import { useRef, useState } from "react"
import * as THREE from "three"
import { Canvas, extend, useThree } from "react-three-fiber"
import { DragControls } from "three/examples/jsm/controls/DragControls"

// extend({ DragControls })

const ex = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xff00ff })
)

const Cube = () => {
	const ref = useRef()
	const [position, setPosition] = useState(0)

	// const { camera } = useThree()
	// const aspect = size.width / viewport.width

	const mySize = 0.15

	return <></>
}

export default Cube
