import * as THREE from "three"
import styled from "styled-components"
import { useState, useMemo, useEffect } from "react"
import { FaLock, FaLockOpen } from "react-icons/fa"
import Scene from "../components/three/Scene"
import Axis from "../components/three/Axis"
import Ring from "../components/three/Ring"

import DragableCircle from "../components/three/DragableCircle"
import mandelbrotset from "../images/mandelbrotset.png"

const Container = styled.div`
	grid-row-start: 3;
	grid-column: 2 / 6;
	/* outline: 1px solid white; */
	display: flex;
	flex-direction: column;
`
const Table = styled.table`
	/* outline: 1px solid white; */
	border-spacing: 1rem;
	width: 100%;
	tr {
		white-space: nowrap;
		th {
			text-align: center;
		}
		td:first-of-type {
			text-align: right;
		}
		th,
		td {
			/* outline: 1px solid white; */
			font-size: 1.5rem;
			width: 20%;
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

const StyledCheckBox = styled.label`
	display: flex;
	align-items: center;
	width: fit-content;

	font-size: 1.2rem;
	font-weight: 100;
	/* text-decoration: underline; */
	cursor: pointer;
	input {
		margin-left: 1rem;
		height: 1.5rem;
		width: 1.5rem;
	}
`

const Texture = ({ texture }) => {
	return (
		<mesh position={[-0.513, 0.015, -0.01]} scale={0.476}>
			<planeBufferGeometry attach="geometry" args={[6.4, 4.69]} />
			<meshBasicMaterial
				attach="material"
				map={texture}
				transparent={true}
				opacity={0.5}
			/>
		</mesh>
	)
}
const Image = ({ url }) => {
	const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
	return <Texture texture={texture} />
}

const Mandelbrot = () => {
	const [image, setImage] = useState(false)
	const [mandelbrot, setMandelbrot] = useState(false)

	let defaultX = 0
	let defaultY = 0

	const myCallback = (dataFromChild) => {
		//use dataFromChild
		// return dataFromChild
		defaultY = Math.floor(dataFromChild.position[0] * 100) / 100
		defaultX = Math.floor(dataFromChild.position[1] * 100) / 100
	}

	return (
		<>
			<Container>
				<Table>
					<colgroup>
						<col span="1" />
						<col span="1" />
						<col span="1" />
						<col span="1" />
						<col span="1" />
					</colgroup>
					<tr>
						<th></th>
						<th>x</th>
						<th>y</th>
						<th></th>
						<th></th>
					</tr>
					<tr>
						<td>z =</td>
						<td>
							<Box>{0}</Box>
						</td>
						<td>
							<Box>{0}</Box>
						</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>c =</td>
						<td>
							<Box>{defaultY}</Box>
						</td>
						<td>
							<Box>{defaultY}</Box>
						</td>
						<td></td>
						<td></td>
					</tr>
				</Table>

				{/* <StyledCheckBox>
					Picture
					<input
						type="checkbox"
						checked={image}
						onChange={() => setImage(!image)}
					/>
				</StyledCheckBox>
				<StyledCheckBox>
					Mandelbrot
					<input
						type="checkbox"
						checked={mandelbrot}
						onChange={() => setMandelbrot(!mandelbrot)}
					/>
				</StyledCheckBox> */}
			</Container>
			<Scene control position={[0, 0, 4]}>
				{image ? <Image url={mandelbrotset} /> : null}
				<Axis />
				<Ring />

				<DragableCircle
					mandelbrot={mandelbrot}
					callbackFromParent={myCallback}
				/>
			</Scene>
		</>
	)
}

export default Mandelbrot
