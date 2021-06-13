import { Canvas } from "@react-three/fiber"

import Scene from "../components/three/Scene"
import Axis from "../components/three/Axis"
import Ring from "../components/three/Ring"

import DragableCircle from "../components/three/DragableCircle"

const SquareComplex = (props) => {
	// const [re, setRe] = useState()
	// const [im, setIm] = useState()
	// let re1 = re * re - im * im
	// let im1 = 2 * (re * im)

	return (
		<>
			<Scene control position={[0, 0, 5]}>
				<Axis />
				<Ring />
				<DragableCircle />
			</Scene>
		</>
	)
}

export default SquareComplex
