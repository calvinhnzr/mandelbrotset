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
			<Circle
				args={[0.05, 64]}
				position={[
					boxPos.position[0] * boxPos.position[0] -
						boxPos.position[1] * boxPos.position[1],
					2 * (boxPos.position[0] * boxPos.position[1]),
					0,
				]}>
				<meshBasicMaterial attach="material" color="white" />
			</Circle>
		</>
	)
}

export default DragableCircle
