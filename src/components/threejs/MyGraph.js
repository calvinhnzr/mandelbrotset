import { Html } from "@react-three/drei"
import styled from "styled-components"

import MyCanvas from "./MyCanvas"
import MyMesh from "./MyMesh"
import MyGrid from "./MyGrid"

// [BUG] canvas sharpness
// [BUG] warning: multiply threejs imports

const StyledNumAxis = styled.span`
	font-family: "Roboto";
	font-size: ${(props) => (props.colored ? "1.2rem" : "1rem")};
	color: ${(props) => (props.colored ? "#437ef1" : "white")};
`

const MyGraph = (props) => {
	return (
		<MyCanvas position={[0, 0, 2.8]}>
			{props.children}
			<MyGrid />
			{props.numbers.map((item, index) => (
				<MyMesh
					key={index}
					position={[item, 0, 0]}
					size={0.1}
					color="red"
				/>
			))}
			<Html center={true} position={[props.x, 0.3, 0]} distanceFactor={5}>
				<StyledNumAxis colored>x</StyledNumAxis>
			</Html>
		</MyCanvas>
	)
}

export default MyGraph
