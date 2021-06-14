import { useState, useEffect, useRef } from "react"
import { Circle } from "@react-three/drei"
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

	let re1 =
		boxPos.position[0] * boxPos.position[0] -
		boxPos.position[1] * boxPos.position[1]
	let im1 = 2 * (boxPos.position[0] * boxPos.position[1])

	let re2 = re1 * re1 - im1 * im1
	let im2 = 2 * (re1 * im1)

	let re3 = re2 * re2 - im2 * im2
	let im3 = 2 * (re2 * im2)

	let re4 = re3 * re3 - im3 * im3
	let im4 = 2 * (re3 * im3)

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
				position={[boxPos.position[0], boxPos.position[1], 0]}
				{...bind()}>
				<meshBasicMaterial attach="material" color="#EA5B89" />
			</Circle>
			<Circle args={[0.05, 64]} position={[re1, im1, 0]}>
				<meshBasicMaterial attach="material" color="white" />
			</Circle>
			<Circle args={[0.05, 64]} position={[re2, im2, 0]}>
				<meshBasicMaterial attach="material" color="white" />
			</Circle>
			<Circle args={[0.05, 64]} position={[re3, im3, 0]}>
				<meshBasicMaterial attach="material" color="white" />
			</Circle>
			<Circle args={[0.05, 64]} position={[re4, im4, 0]}>
				<meshBasicMaterial attach="material" color="white" />
			</Circle>
		</>
	)
}

export default DragableCircle
