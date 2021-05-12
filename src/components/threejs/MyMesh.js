const MyMesh = (props) => {
	let size = props.size
	return (
		<mesh position={props.position} onClick={() => console.log(true)}>
			<boxGeometry args={[size, size, size]} />
			<meshPhongMaterial color={props.color} wireframe />
		</mesh>
	)
}

export default MyMesh
