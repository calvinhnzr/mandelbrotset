const MyMesh = (props) => {
	let size = props.size
	return (
		<mesh position={props.position} onClick={() => console.log(true)}>
			<boxGeometry args={[size, size, size]} />
			<meshPhongMaterial color="white" />
		</mesh>
	)
}

export default MyMesh
