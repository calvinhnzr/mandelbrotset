import styled from "styled-components"
import MyAxisY from "../threejs/MyAxisY"
import Graph from "../threejs/MyGraph"
import ComplexGraph from "../threejs/MyComplexGraph"

import MyAxisX from "../threejs/MyAxisX"

// import { useState, useEffect } from "react"

const StyledComplex = styled.div``

const Complex = (props) => {
	// const [re, setRe] = useState(2)
	// const [im, setIm] = useState(7)

	// useEffect(() => {
	// 	setRe(re * re - im * im)
	// 	setIm(2 * (re * im))
	// }, [])

	// let squareComplex = console.log(`${re} + ${im}i`)

	const numbers = [1, 1, 1, 1]

	return (
		<>
			<StyledComplex></StyledComplex>
			<ComplexGraph></ComplexGraph>
		</>
	)
}

export default Complex
