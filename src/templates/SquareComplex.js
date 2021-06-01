import { useState } from "react"

import Input from "../components/Input"
import Formula from "../components/Formula"
import IterationList from "../components/IterationList"
import Scene from "../components/three/Scene"
import Axis from "../components/three/Axis"
import Circle from "../components/three/Circle"

const SquareComplex = (props) => {
	const myStyle = { fontSize: "1.5rem" }

	const [re, setRe] = useState()
	const [im, setIm] = useState()

	const multiFactor = 2
	let re1 = re * re - im * im
	let im1 = 2 * (re * im)

	return (
		<>
			<Formula color={props.color}>
				<span style={myStyle}>x = ( </span>
				<Input type="number" min="-2" max="2" placeholder="float" />
				<span style={myStyle}> + </span>
				<Input type="number" min="-2" max="2" placeholder="float" />
				<span style={myStyle}> )</span>
			</Formula>
			<Scene control>
				<Axis />
				<Circle />
				{/* 
					+ Cube
					+ Axis: X/Y
					+ Barrier: Circle

				*/}
			</Scene>
			{/* IterationList */}
		</>
	)
}

export default SquareComplex
