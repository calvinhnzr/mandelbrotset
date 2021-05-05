import { Canvas } from "@react-three/fiber"
import { OrbitControls, Line } from "@react-three/drei"
import styled from "styled-components"

const StyledCanvas = styled.div`
	outline: 1px solid white;
	grid-row-start: 2;
	grid-row-end: 6;
	grid-column: 6 / 12;
`

const MyCanvas = (props) => {
	return (
		<StyledCanvas>
			<Canvas>
				<OrbitControls />
				{props.children}
				<ambientLight intensity={0.1} />
				<directionalLight position={[0, 0, 5]} intensity={0.2} />
				<Line
					points={[
						// l h t
						[-3.5, -0.5, 0.5],
						[3.5, -0.5, 0.5],
					]}
					color="#437ef1"
					lineWidth={3}
				/>
				<Line
					points={[
						[0, -0.5, 0.5],
						[0, 1, 0.5],
					]}
					color="#437ef1"
					lineWidth={3}
				/>
			</Canvas>
		</StyledCanvas>
	)
}

export default MyCanvas
