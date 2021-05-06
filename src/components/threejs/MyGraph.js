import { Line, Html } from "@react-three/drei"
import styled from "styled-components"
import MyCanvas from "./MyCanvas"
import MyMesh from "./MyMesh"

// [BUG] canvas sharpness
// [BUG] warning: multiply threejs imports

const StyledNumAxis = styled.span`
	font-family: "Roboto";
	font-size: ${(props) => (props.colored ? "1.4rem" : "1rem")};
	color: ${(props) => (props.colored ? "#437ef1" : "white")};
`

const MyGrid = () => {
	const MyLine = (props) => {
		return (
			<Line
				name="grid"
				points={[
					// l h 5
					[props.x, 1.5, -0.2],
					[props.x, -1.5, -0.2],
				]}
				dashed={true}
				dashSize={1}
				dashScale={10}
				color="#363738"
				lineWidth={3}
			/>
		)
	}

	return (
		<>
			<MyLine x={-2} />
			<MyLine x={-1} />
			<MyLine x={0} />
			<MyLine x={1} />
			<MyLine x={2} />
		</>
	)
}

const MyAxis = () => {
	const MyLine = (props) => {
		return (
			<Line
				name="xAxis"
				points={[
					// l h t
					[props.x, 0, 0],
					[props.x * -1, 0, 0],
				]}
				color="white"
				lineWidth={3}
			/>
		)
	}

	const Dots = (props) => {
		return (
			<>
				<Line
					name="xAxis"
					points={[
						// l h t
						[props.x, 0, 0],
						[props.x, -0.1, 0],
					]}
					color="white"
					lineWidth={3}
				/>
				<Html
					center={true}
					position={[props.x, -0.3, 0]}
					distanceFactor={5}>
					<StyledNumAxis>{props.x}</StyledNumAxis>
				</Html>
			</>
		)
	}

	return (
		<>
			<MyLine x={3.5} />
			<Dots x={-2} />
			<Dots x={-1} />
			<Dots x={0} />
			<Dots x={1} />
			<Dots x={2} />
		</>
	)
}

const MyGraph = (props) => {
	return (
		<MyCanvas>
			<MyAxis />
			<MyGrid />
			<MyMesh position={[props.x, 0, 0]} size={0.1} />
			<Html center={true} position={[props.x, 0.3, 0]} distanceFactor={5}>
				<StyledNumAxis colored>&#129312;</StyledNumAxis>
			</Html>
		</MyCanvas>
	)
}

export default MyGraph
