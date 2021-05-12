import { Line, Html } from "@react-three/drei"
import styled from "styled-components"

const StyledNumAxis = styled.span`
	font-family: "Roboto";
	font-size: ${(props) => (props.colored ? "1.2rem" : "1rem")};
	color: ${(props) => (props.colored ? "#437ef1" : "white")};
`

const MyAxisX = (props) => {
	const MyLine = (props) => {
		return (
			<Line
				name="xAxis"
				points={[
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
			{props.null ? <Dots x={0} /> : null}
			<Dots x={1} />
			<Dots x={2} />
		</>
	)
}

export default MyAxisX
