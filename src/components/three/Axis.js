import { Line, Html } from "@react-three/drei"
import styled from "styled-components"

const StyledNumAxis = styled.span`
	/* display: none; */
	opacity: 1;
	font-family: "Roboto";
	font-weight: 100;
	font-size: ${(props) => (props.colored ? "1.2rem" : "1rem")};
	color: ${(props) => (props.colored ? "#437ef1" : "white")};
`

const MyLine = (props) => {
	return (
		<Line name="axis" points={props.points} color="white" lineWidth={3} />
	)
}
let nums = [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1]
let multiFactor = 2
const Dots = () => {
	return nums.map((item) => (
		<>
			<MyLine
				points={[
					[item * multiFactor, 0.05, 0],
					[item * multiFactor, -0.05, 0],
				]}
			/>

			{item ? (
				<Html
					center={true}
					position={[item * multiFactor, -0.2, 0]}
					distanceFactor={5}>
					<StyledNumAxis>{item}</StyledNumAxis>
				</Html>
			) : null}

			<MyLine
				points={[
					[0.05, item * multiFactor, 0],
					[-0.05, item * multiFactor, 0],
				]}
			/>
			{item ? (
				<Html
					center={true}
					position={[-0.2, item * 2, 0]}
					distanceFactor={5}>
					<StyledNumAxis>{item}</StyledNumAxis>
				</Html>
			) : null}
		</>
	))
}

const Axis = () => {
	return (
		<>
			{/* <Dots /> */}
			<MyLine
				points={[
					[2.5, 0, 0],
					[-2.5, 0, 0],
				]}
			/>
			<MyLine
				points={[
					[0, 2.5, 0],
					[0, -2.5, 0],
				]}
			/>
		</>
	)
}

export default Axis
