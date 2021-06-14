import { useState, useEffect, useRef } from "react"
import { Circle, Line } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useDrag } from "react-use-gesture"

const DragableCircle = (props) => {
	let defaultX = 0.4
	let defaultY = 0.4

	const [boxPos, setBoxPos] = useState({
		position: [defaultX, defaultY, 0],
	})

	const { viewport } = useThree()
	const { width, height, factor } = viewport

	let arr = []
	let coo = []

	let tempRe = boxPos.position[0]
	let tempIm = boxPos.position[1]

	for (let i = 0; i < 8; i++) {
		let re = tempRe * tempRe - tempIm * tempIm
		let im = 2 * (tempRe * tempIm)
		coo = [re, im, tempRe, tempIm]
		tempRe = re
		tempIm = im
		arr.push(coo)
	}

	const bind = useDrag(
		({ offset: [x, y] }) =>
			setBoxPos({ position: [x + defaultX, y + defaultY, 0] }),

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

	return (
		<>
			<Circle
				args={[0.05, 64]}
				position={[boxPos.position[0], boxPos.position[1], 0.01]}
				{...bind()}>
				<meshBasicMaterial attach="material" color="#EA5B89" />
			</Circle>
			{arr.map((value, index) => (
				<>
					<Line
						name="axis"
						points={[
							[value[0], value[1], 0],
							[value[2], value[3], 0],
						]}
						color="white"
						lineWidth={2}
					/>
					<Circle
						key={index}
						args={[0.025, 64]}
						position={[value[0], value[1], 0.01]}>
						<meshBasicMaterial attach="material" color="#EA5B89" />
					</Circle>
				</>
			))}
		</>
	)
}

export default DragableCircle
