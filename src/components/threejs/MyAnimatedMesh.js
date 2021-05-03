import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

const MyAnimatedMesh = () => {
	const myAnimatedMesh = useRef()

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime()
		myAnimatedMesh.current.position.z = Math.sin(elapsedTime)
	})

	return (
		<mesh ref={myAnimatedMesh} position={[2, 0, 0]}>
			<boxGeometry />
			<meshPhongMaterial color="white" />
		</mesh>
	)
}

export default MyAnimatedMesh
