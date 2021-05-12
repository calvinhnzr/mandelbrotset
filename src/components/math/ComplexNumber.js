import { useState, useEffect } from "react"

import styled from "styled-components"
import ComplexGraph from "../threejs/MyComplexGraph"
import MyMesh from "../threejs/MyMesh"

import Container from "../styled/Container"

// import { useState, useEffect } from "react"

const StyledComplex = styled.div``

const Complex = (props) => {
	const [re, setRe] = useState(2)
	const [im, setIm] = useState(7)

	useEffect(() => {
		setRe(re * re - im * im)
		setIm(2 * (re * im))
	}, [])

	let squareComplex = `${re} + ${im}i`

	return (
		<>
			<Container>
				<p style={{ color: "white" }}>{squareComplex}</p>
			</Container>
			<ComplexGraph>
				<MyMesh
					position={[props.x, 0, 0]}
					size={0.12}
					color="#437ef1"
				/>
			</ComplexGraph>
		</>
	)
}

export default Complex