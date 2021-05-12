import { Line, Html } from "@react-three/drei"
import styled from "styled-components"

const StyledNumAxis = styled.span`
	font-family: "Roboto";
	font-size: ${(props) => (props.colored ? "1.2rem" : "1rem")};
	color: ${(props) => (props.colored ? "#437ef1" : "white")};
`

const MyAxisY = (props) => {
	const MyLine = (props) => {
		return (
			<Line
				name="xAxis"
				points={[
					[0, props.y, -0],
					[0, props.y * -1, -0],
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
					name="yAxis"
					points={[
						[0, props.x, 0],
						[-0.1, props.x, 0],
					]}
					color="white"
				/>
				<Html
					center={true}
					position={[-0.3, props.x, 0]}
					distanceFactor={5}>
					<StyledNumAxis>{props.x}</StyledNumAxis>
				</Html>
			</>
		)
	}

	return (
		<>
			<MyLine y={3.5} />
			<Dots x={-2} />
			<Dots x={-1} />
			{props.null ? <Dots x={0} /> : null}
			<Dots x={1} />
			<Dots x={2} />
		</>
	)
}

export default MyAxisY
