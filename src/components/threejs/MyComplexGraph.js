import MyCanvas from "./MyCanvas"
import Axis from "./Axis"
import MyCircle from "./MyCircle"

const ComplexGraph = (props) => {
	return (
		<>
			<MyCanvas position={[0, 0, 3.5]}>
				{props.children}
				<MyCircle />
				<Axis />
			</MyCanvas>
		</>
	)
}

export default ComplexGraph
