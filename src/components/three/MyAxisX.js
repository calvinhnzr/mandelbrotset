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
					[props.max, 0, 0],
					[props.min, 0, 0],
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
						[props.x, 0.05, 0],
						[props.x, -0.05, 0],
					]}
					color="white"
					lineWidth={3}
				/>
				<Html
					center={true}
					position={[props.x, -0.5, 0]}
					distanceFactor={5}>
					<StyledNumAxis>{props.x}</StyledNumAxis>
				</Html>
			</>
		)
	}

	return (
		<>
			<MyLine
				max={Math.max(...props.length) + 0.5}
				min={Math.min(...props.length) - 0.5}
			/>
			{props.length.map((value, index) => (
				<Dots key={index} x={value} />
			))}

			{props.null ? <Dots x={0} /> : null}
		</>
	)
}

export default MyAxisX
