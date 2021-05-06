import { Line, Html } from "@react-three/drei"
import styled from "styled-components"
import MyCanvas from "./MyCanvas"

const StyledNumAxis = styled.span`
	font-family: "Roboto";
	font-size: 1rem;
	color: white;
	/* outline: 1px solid white; */
`

const MyGrid = () => {
	const MyLine = (props) => {
		return (
			<Line
				name="grid"
				points={[
					// l h 5
					[props.x, 1.5, 0],
					[props.x, -1.5, 0],
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
					[props.x, 0, 0.2],
					[props.x * -1, 0, 0.2],
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
						[props.x, 0, 0.2],
						[props.x, -0.1, 0.2],
					]}
					color="white"
					lineWidth={3}
				/>
				<Html
					center={true}
					position={[props.x, -0.3, 0.2]}
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

const MyGraph = () => {
	return (
		<MyCanvas>
			<MyAxis />
			<MyGrid />
			{/* <MyMesh position={[0, 0, 0]} size={0.5} /> */}
		</MyCanvas>
	)
}

export default MyGraph
