import { Canvas } from "@react-three/fiber"
import { OrbitControls, Line } from "@react-three/drei"
import styled from "styled-components"

const StyledCanvas = styled.div`
	outline: 1px solid white;
	grid-row-start: 2;
	grid-row-end: 6;
	grid-column: 6 / 12;
	/* background-color: #1e1f21; */
	/* background-color: #437ef1; */
`

const MyCanvas = (props) => {
	return (
		<StyledCanvas>
			<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 2.6] }}>
				<OrbitControls />
				{props.children}
				<ambientLight intensity={0.1} />
				<directionalLight position={[0, 0, 5]} intensity={0.2} />
			</Canvas>
		</StyledCanvas>
	)
}

export default MyCanvas
