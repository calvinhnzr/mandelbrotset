import { Line, Html } from "@react-three/drei"

const MyGrid = () => {
	const MyLine = (props) => {
		return (
			<Line
				name="grid"
				points={[
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
			<MyLine x={-1} />
			<MyLine x={1} />
		</>
	)
}

export default MyGrid
