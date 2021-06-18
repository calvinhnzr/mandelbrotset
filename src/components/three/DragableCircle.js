import * as THREE from "three"

import { useState, useEffect, useRef, useMemo } from "react"
import { Circle, Line, Html, Plane } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useDrag } from "react-use-gesture"

const DragableCircle = (props) => {
	//  start value for a
	let defaultX = 0
	let defaultY = 0

	// set starting value for A
	const [a, setA] = useState({
		position: [defaultX, defaultY, 0],
	})

	// mandelbrot salt C
	const [c, setC] = useState({
		position: [0, 0, 0],
	})

	// store of all iteration coordinates
	var orbitArr = []
	function drawOrbit() {
		// coordinates of every single iteration
		let coo = []

		const iterationCount = 32

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
				const maxIteration = 100
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

	// dragable compnents
	const { viewport, scene } = useThree()
	const { width, height, factor } = viewport
	// make A dragable
	const bindA = useDrag(
		({ offset: [x, y] }) =>
			setA({ position: [x + defaultX, y + defaultY, 0] }),
		{
			// bounds are expressed in canvas coordinates!
			bounds: {
				left: -width / 2,
				right: width / 2,
				top: -height / 2,
				bottom: height / 2,
			},
			rubberband: true,
			transform: ([x, y]) => [x / factor, -y / factor],
		}
	)
	// make C dragable
	const bindC = useDrag(
		({ offset: [x, y] }) => setC({ position: [x, y, 0] }),
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
		}
	)

	const devider = margin * amount
	return (
		<>
			{props.mandelbrot ? drawMandelbrot() : null}

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
			<Circle
				args={[0.05, 64]}
				position={[a.position[0], a.position[1], 0.01]}
				scale={0.8}
				// {...bindA()}
			>
				<meshBasicMaterial attach="material" color="white" />
			</Circle>

			<Circle
				args={[0.05, 64]}
				position={[c.position[0], c.position[1], 0.02]}
				{...bindC()}>
				<meshBasicMaterial attach="material" color="#437ef1" />
			</Circle>

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
							position={[value[0], value[1], 0.01]}>
							<meshBasicMaterial
								attach="material"
								color="#65D677"
							/>
						</Circle>
					</>
				)
			})}
		</>
	)
}

export default DragableCircle
