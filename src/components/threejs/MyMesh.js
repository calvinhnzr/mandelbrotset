const MyMesh = (props) => {
	return (
		<mesh position={props.position}>
			<boxBufferGeometry />
			<meshPhongMaterial color="white" />
		</mesh>
	)
}

export default MyMesh
