import { useState } from "react"
import styled from "styled-components"

import { FaLock, FaLockOpen } from "react-icons/fa"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

import { Circle, Line } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useDrag } from "react-use-gesture"

import Scene from "./Scene"
import MyMath from "../math/MyMath"

const StyledLock = styled.button`
	width: 100%;
	height: 100%;
	border: none;
	background: none;
	cursor: pointer;
	&.reset {
		color: #363738;
		font-family: "Roboto";
		font-weight: bold;
		font-size: 1.5rem;
		text-align: center;
		&:hover {
			color: #ffffff66;
		}
	}
	svg {
		height: 1.3rem;
		transform: translateY(1px);
	}
	& > * {
		color: #363738;
		transition: 0.1s ease-in-out;
		width: 100%;
		height: 100%;
		&:hover {
			color: #ffffff66;
		}
	}
`

const StyledCheckBox = styled.label`
	z-index: 200;
	display: flex;
	align-items: center;
	width: fit-content;
	margin-top: 1rem;
	font-size: 1.2rem;
	font-weight: 400;
	letter-spacing: 1px;
	color: #424242;

	cursor: pointer;

	input {
		display: none;
	}
	svg {
		margin-left: 0.5rem;
		height: 2rem;
		width: 1.8rem;
	}
`

const Container = styled.div`
	grid-row: 3 / 11;
	grid-column: 2 / 6;
	/* outline: 1px solid white; */
	display: flex;
	flex-direction: column;
	align-self: center;
`

const FormulaContainer = styled.div`
	/* outline: 1px solid red; */
	/* margin-bottom: 4rem; */
	width: 100%;
	height: 100%;
	/* flex-direction: column; */
	/* justify-content: flex-end; */
	position: relative;
`

const Button = styled.button`
	position: absolute;
	opacity: 0;
	z-index: 10;
	height: 100%;
	width: 50%;
	cursor: pointer;
	&:last-of-type {
		right: 0 !important;
	}
`

const HiddenContent = styled.div`
	/* float: right; */
	/* margin: 0 auto; */
	/* margin-left: 5.5rem; */
	width: fit-content;
	/* outline: 1px solid white; */
	pointer-events: none;
	& > span {
		color: white;
		font-size: 1.1rem;
		margin: 0.5rem 0;
	}
	@media only screen and (min-width: 960px) {
		/* font-size: 3.5rem; */
		& > span {
			font-size: 3.5rem !important;
		}
	}
`

const Table = styled.table`
	/* outline: 1px solid green; */
	margin-top: 3rem;
	border-spacing: 1rem;
	width: 100%;
	table-layout: fixed;
	margin-left: -1rem;
	tr {
		white-space: nowrap;
		th {
			text-align: center;
		}
		td:first-of-type {
			/* text-align: right; */
		}
		th,
		td {
			/* outline: 1px solid white; */
			font-size: 1.5rem;
			will-change: auto;
			vertical-align: middle;
		}
	}
`
const Box = styled.div`
	display: block;
	background-color: #363738;
	text-align: center;
	padding: 0.5rem 0;
	width: 100%;
	border-radius: 3px;
`

const CValue = (props) => {
	const { viewport, scene } = useThree()
	const { width, height, factor } = viewport

	const bindC = useDrag(
		({ offset: [x, y] }) => props.setC({ position: [x, y, 0] }),
		{
			// bounds are expressed in canvas coordinates!
			bounds: {
				left: -width / 2,
				right: width / 2,
				top: -height / 2,
				bottom: height / 2,
			},

			transform: ([x, y]) => [x / factor, -y / factor],
			enabled: props.lockC,
		}
	)

	return (
		<Circle
			args={[0.05, 64]}
			position={[props.c.position[0], props.c.position[1], 0.01]}
			{...bindC()}>
			<meshBasicMaterial attach="material" color="coral" />
		</Circle>
	)
}

const AValue = (props) => {
	const { viewport, scene } = useThree()
	const { width, height, factor } = viewport

	const bindA = useDrag(
		({ offset: [x, y] }) => {
			props.setA({ position: [x + 0.4, y + 0.4, 0] })
		},
		{
			// bounds are expressed in canvas coordinates!
			bounds: {
				left: -width / 2,
				right: width / 2,
				top: -height / 2,
				bottom: height / 2,
			},
			// rubberband: true,
			transform: ([x, y]) => [x / factor, -y / factor],
			enabled: props.lockA,
			initial: [0.4, 0.4],
		}
	)

	return (
		<Circle
			args={[0.05, 64]}
			position={[props.a.position[0], props.a.position[1], 0.02]}
			// scale={0.8}
			{...bindA()}>
			<meshBasicMaterial attach="material" color="#437ef1" />
		</Circle>
	)
}

const DragableCircle = (props) => {
	const [currentFormula, setCurrentFormula] = useState(0)
	const shown = { opacity: "1", height: "auto" }
	const hidden = { opacity: "0", height: 0 }

	const [showControls, setShowControls] = useState(false)

	const increment = () => (!(currentFormula >= 3 - 1) ? 1 : 0)
	const decrement = () => (!(currentFormula <= 0) ? 1 : 0)

	const [lockA, setLockA] = useState(true)
	const [lockC, setLockC] = useState(false)

	// set starting value for A
	const [a, setA] = useState({
		position: [0.4, 0.4, 0],
	})

	// set starting value for C
	const [c, setC] = useState({
		position: [0, 0, 0],
	})

	// store of all iteration coordinates
	var orbitArr = []
	function drawOrbit() {
		// coordinates of every single iteration
		let coo = []

		const iterationCount = 16

		let tempRe = 0
		let tempIm = 0

		tempRe = a.position[0]
		tempIm = a.position[1]

		for (let i = 0; i < iterationCount; i++) {
			let re = tempRe * tempRe - tempIm * tempIm
			let im = 2 * (tempRe * tempIm)

			// add c
			re += c.position[0]
			im += c.position[1]

			coo = [re, im, tempRe, tempIm]
			tempRe = re
			tempIm = im
			orbitArr.push(coo)
		}
	}
	drawOrbit()

	let pixelArr = []
	// radius
	const radius = 1
	// pixel per block
	const amount = 10 // += 2
	const margin = amount * radius

	function drawMandelbrot() {
		// coordinates of pixel
		let coo = []
		let x, y
		const moveLeft = amount / 2
		for (let i = -margin - moveLeft; i < margin - moveLeft; i++) {
			for (let j = -margin + 1; j < margin; j++) {
				// pixel position
				x = i / (margin / radius)
				y = j / (margin / radius)

				coo = [x, y]

				// mandelbrot
				let tempRe = 0
				let tempIm = 0
				pixelArr.push(coo)

				let iteration = 0
				// iteration per pixel
				const maxIteration = 200
				while (iteration < maxIteration) {
					let re = tempRe * tempRe - tempIm * tempIm
					let im = 2 * (tempRe * tempIm)
					// add c
					re += x
					im += y
					if (re >= 4) {
						pixelArr.pop(coo)
						break
					}

					tempRe = re
					tempIm = im

					iteration++
				}
			}
		}
	}

	const devider = margin * amount

	return (
		<>
			<Container>
				<FormulaContainer>
					<Button
						onClick={() =>
							setCurrentFormula(currentFormula - decrement())
						}
					/>
					<Button
						onClick={() =>
							setCurrentFormula(currentFormula + increment())
						}
					/>
					<HiddenContent
						style={currentFormula === 0 ? shown : hidden}>
						<MyMath>{"z=(a+b*i)^2"}</MyMath>
					</HiddenContent>
					<HiddenContent
						style={currentFormula === 1 ? shown : hidden}>
						<MyMath>{"z_0=z^2 + c"}</MyMath>
					</HiddenContent>
					<HiddenContent
						style={currentFormula === 2 ? shown : hidden}>
						<MyMath>{"z_0=0"}</MyMath>
						<br />
						<MyMath>{"z_{n+1}=x_n^2 + c"}</MyMath>
					</HiddenContent>
				</FormulaContainer>
				<StyledCheckBox>
					Controls
					{showControls ? <FiChevronUp /> : <FiChevronDown />}
					<input
						type="checkbox"
						checked={showControls}
						onChange={() => setShowControls(!showControls)}
					/>
				</StyledCheckBox>
				{showControls ? (
					<Table>
						<thead>
							<tr>
								<th></th>
								<th
									style={{
										color: "white",
										pointerEvents: "none",
									}}>
									<MyMath>Re</MyMath>
								</th>
								<th
									style={{
										color: "white",
										pointerEvents: "none",
									}}>
									<MyMath>Im</MyMath>
								</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td
									style={{
										color: "white",
										pointerEvents: "none",
									}}>
									<MyMath>z =</MyMath>
								</td>
								<td>
									<Box>
										{Math.floor(a.position[0] * 100) / 100}
									</Box>
								</td>
								<td>
									<Box>
										{Math.floor(a.position[1] * 100) / 100}
									</Box>
								</td>
								<td>
									<StyledLock
										className="reset"
										onClick={() =>
											setA({ position: [0, 0, 0] })
										}>
										R
									</StyledLock>
								</td>
								<td>
									<StyledLock
										onClick={() => setLockA(!lockA)}>
										{lockA ? (
											<FaLockOpen color="#65D677" />
										) : (
											<FaLock />
										)}
									</StyledLock>
								</td>
							</tr>
							<tr>
								<td
									style={{
										color: "white",
										pointerEvents: "none",
									}}>
									<MyMath>c =</MyMath>
								</td>
								<td>
									<Box>
										{Math.floor(c.position[0] * 100) / 100}
									</Box>
								</td>
								<td>
									<Box>
										{Math.floor(c.position[1] * 100) / 100}
									</Box>
								</td>
								<td>
									<StyledLock
										className="reset"
										onClick={() =>
											setC({ position: [0, 0, 0] })
										}>
										R
									</StyledLock>
								</td>
								<td>
									<StyledLock
										onClick={() => setLockC(!lockC)}>
										{lockC ? (
											<FaLockOpen color="#65D677" />
										) : (
											<FaLock />
										)}
									</StyledLock>
								</td>
							</tr>
						</tbody>
					</Table>
				) : null}
			</Container>
			<Scene control position={[0, 0, 3.7]}>
				{props.mandelbrot ? drawMandelbrot() : null}
				{props.children}
				{pixelArr.map((value, index) => (
					<Circle
						key={index}
						args={[margin / devider, margin / devider]}
						args={[margin / devider / 2, 64]}
						scale={0.8}
						position={[value[0], value[1], -0.1]}>
						<meshBasicMaterial attach="material" color="coral" />
					</Circle>
				))}
				<AValue a={a} setA={setA} lockA={lockA} />
				<CValue c={c} setC={setC} lockC={lockC} />
				{orbitArr.map((value, index) => {
					return (
						<>
							{/* [BUGFIX] error msg */}

							{/* <Line
								points={[
									[value[0], value[1], 0],
									[value[2], value[3], 0],
								]}
								color="white"
								lineWidth={2}
							/> */}
							<Circle
								key={index}
								args={[0.025, 64]}
								position={[value[0], value[1], 0.009]}>
								<meshBasicMaterial
									attach="material"
									color="#65D677"
								/>
							</Circle>
						</>
					)
				})}
			</Scene>
		</>
	)
}

export default DragableCircle
