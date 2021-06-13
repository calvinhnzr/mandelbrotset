const MyMesh = (props) => {
	let size = props.size
	return (
		<mesh position={props.position}>
			<boxGeometry args={[size, size, size]} />
			<meshPhongMaterial color={props.color} wireframe={true} />
		</mesh>
	)
}

export default MyMesh
