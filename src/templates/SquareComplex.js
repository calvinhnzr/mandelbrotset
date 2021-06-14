import { useState, useEffect, useRef } from "react"
import Scene from "../components/three/Scene"
import Axis from "../components/three/Axis"
import Ring from "../components/three/Ring"
import { Circle } from "@react-three/drei"

import DragableCircle from "../components/three/DragableCircle"
import { useFrame } from "@react-three/fiber"

const SquareComplex = () => {
	let defaultX = 0.4
	let defaultY = 0.4

	const [boxPos, setBoxPos] = useState({
		position: [defaultX, defaultY, 0],
	})

	const myCircle = useRef(0)
	// X
	// const [re, setRe] = useState()
	// Y
	// const [im, setIm] = useState()
	// let re1 = re * re - im * im
	// let im1 = 2 * (re * im)
	let re1 =
		boxPos.position[0] * boxPos.position[0] -
		boxPos.position[1] * boxPos.position[1]

	let im1 = 2 * (boxPos.position[0] * boxPos.position[1])

	return (
		<>
			<Scene control position={[0, 0, 5]}>
				<Axis />
				<Ring />
				<DragableCircle boxPos={boxPos} setBoxPos={setBoxPos} />
				<Circle
					ref={myCircle}
					args={[0.05, 64]}
					position={[re1, im1, 0]}>
					<meshBasicMaterial attach="material" color="white" />
				</Circle>
			</Scene>
		</>
	)
}

export default SquareComplex
