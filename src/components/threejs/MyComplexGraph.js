import MyCanvas from "./MyCanvas"
import Axis from "../three/Axis"
import MyCircle from "../three/Circle"

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
