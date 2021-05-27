import { useState } from "react"

import Input from "../components/Input"
import Formula from "../components/Formula"
import Scene from "../components/three/Scene"
import IterationList from "../components/IterationList"

import MyGrid from "../components/threejs/MyGrid"
import MyAxisX from "../components/threejs/MyAxisX"

const OnNumberLine = (props) => {
	const [start, setStart] = useState("")
	const [array, setArray] = useState([])

	const iterations = 4

	const handleChange = (e) => {
		e.preventDefault()

		// set starting point

		if (e.target.value.toString().length <= 5) setStart(e.target.value)

		if (e.target.value.toString().length <= 5)
			setArray([
				Math.pow(e.target.value, 2),
				Math.pow(e.target.value, 4),
				Math.pow(e.target.value, 8),
				Math.pow(e.target.value, 16),
			])
	}

	return (
		<>
			<Formula color={props.color}>
				<span>x = </span>
				<Input
					type="number"
					min="-2"
					max="2"
					placeholder="float"
					value={start}
					onChange={handleChange}
				/>
			</Formula>
			<IterationList
				iterations={iterations}
				startingPoint={start}
				array={array}
				myStyle="numberLine"
				color={props.color}
			/>
			<Scene>
				<MyAxisX null />
				<MyGrid />
			</Scene>
		</>
	)
}

export default OnNumberLine
