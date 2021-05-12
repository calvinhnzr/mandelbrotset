import { Ring } from "@react-three/drei"

const MyCircle = () => {
	return (
		<Ring args={[1.99, 2.02, 64]} position={[0, 0, -0.21]}>
			<meshBasicMaterial color="#363738" />
		</Ring>
	)
}

export default MyCircle
