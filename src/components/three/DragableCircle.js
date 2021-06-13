import { useState } from "react"
import { Circle } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useDrag } from "react-use-gesture"

const DragableCircle = (props) => {
	const { size, viewport } = useThree()

	const [position, setPosition] = useState([0, 0, 0])
	const aspect = size.width / viewport.width

	const bind = useDrag(
		({ offset: [x, y] }) => {
			const [, , z] = position
			setPosition([x / aspect, -y / aspect, z])
		},
		{ pointerEvents: true }
	)

	return (
		<Circle
			args={[0.05, 64]}
			position={[position[0], position[1], 0.005]}
			{...bind()}>
			<meshBasicMaterial attach="material" color="#EA5B89" />
		</Circle>
	)
}

export default DragableCircle
