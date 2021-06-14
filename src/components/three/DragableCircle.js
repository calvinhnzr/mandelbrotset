import { Circle } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useDrag } from "react-use-gesture"

const DragableCircle = (props) => {
	const { viewport } = useThree()
	const { width, height, factor } = viewport

	let defaultX = 0.4
	let defaultY = 0.4

	const bind = useDrag(
		({ offset: [x, y] }) =>
			props.setBoxPos({ position: [x + defaultX, y + defaultY, 0] }),
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
		<Circle
			args={[0.05, 64]}
			position={[
				props.boxPos.position[0].toFixed(2),
				props.boxPos.position[1].toFixed(2),
				0,
			]}
			{...bind()}>
			<meshBasicMaterial attach="material" color="#EA5B89" />
		</Circle>
	)
}

export default DragableCircle
