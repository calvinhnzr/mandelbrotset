import { Line } from "@react-three/drei"

const MyLine = (props) => {
	return (
		<Line
			name="grid"
			points={props.points}
			dashed={true}
			dashSize={1}
			dashScale={10}
			color="#363738"
			lineWidth={3}
		/>
	)
}

let nums = [-2, -1, 0, 1, 2]

const Horizontal = () => {
	return nums.map((item, index) => (
		<MyLine
			key={index}
			points={[
				[item, 2.5, -0.2],
				[item, -2.5, -0.2],
			]}
		/>
	))
}

const Vertical = () => {
	return nums.map((item, index) => (
		<MyLine
			key={index}
			points={[
				[2.5, item, -0.2],
				[-2.5, item, -0.2],
			]}
		/>
	))
}

const Grid = () => {
	return (
		<>
			<Vertical />
			<Horizontal />
		</>
	)
}

export default Grid
