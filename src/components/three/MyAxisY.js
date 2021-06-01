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
					[0, props.max, -0],
					[0, props.min, -0],
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
						[0, props.y, 0],
						[-0.1, props.y, 0],
					]}
					color="white"
				/>
				<Html
					center={true}
					position={[-0.3, props.y, 0]}
					distanceFactor={5}>
					<StyledNumAxis>{props.y}</StyledNumAxis>
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
				<Dots key={index} y={value} />
			))}
			{props.null ? <Dots y={0} /> : null}
		</>
	)
}

export default MyAxisY
