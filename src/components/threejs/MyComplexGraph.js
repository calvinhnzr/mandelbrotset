import MyCanvas from "./MyCanvas"
import Axis from "./Axis"
import Grid from "./Grid"

import MyCircle from "./MyCircle"

const ComplexGraph = (props) => {
	return (
		<>
			<MyCanvas position={[0, 0, 3]}>
				<MyCircle />
				<Grid />
				<Axis />
			</MyCanvas>
		</>
	)
}

export default ComplexGraph
