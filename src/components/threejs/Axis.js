import { Line } from "@react-three/drei"

const MyLine = (props) => {
	return (
		<Line name="axis" points={props.points} color="white" lineWidth={3} />
	)
}
let nums = [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1]

const Dots = () => {
	return nums.map((item) => (
		<>
			<MyLine
				points={[
					[item * 2, 0.05, 0],
					[item * 2, -0.05, 0],
				]}
			/>
			<MyLine
				points={[
					[0.05, item * 2, 0],
					[-0.05, item * 2, 0],
				]}
			/>
		</>
	))
}

const Axis = () => {
	return (
		<>
			<Dots />
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
