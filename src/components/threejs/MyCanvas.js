import { Canvas } from "@react-three/fiber"
import styled from "styled-components"

const StyledCanvas = styled.div`
	/* outline: 1px solid white; */
	grid-row-start: 1;
	grid-row-end: 7;
	grid-column: 2 / 12;
`
const MyCanvas = (props) => {
	return (
		<StyledCanvas>
			<Canvas>
				{props.children}
				<ambientLight intensity={0.1} />
				<directionalLight position={[0, 0, 5]} intensity={0.2} />
			</Canvas>
		</StyledCanvas>
	)
}

export default MyCanvas
