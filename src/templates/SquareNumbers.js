import { useState } from "react"

import Input from "../components/Input"
import Formula from "../components/Formula"
import IterationList from "../components/IterationList"

const SquareNumbers = (props) => {
	const [start, setStart] = useState("")
	const [array, setArray] = useState([])

	const iterations = 4

	const handleChange = (e) => {
		e.preventDefault()
		if (e.target.value.toString().length <= 1) setStart(e.target.value)
		if (e.target.value.toString().length <= 1) {
			setArray([
				Math.pow(e.target.value, 2),
				Math.pow(e.target.value, 4),
				Math.pow(e.target.value, 8),
				Math.pow(e.target.value, 16),
			])
		}
	}

	return (
		<>
			<Formula color={props.color}>
				<span>x = </span>
				<Input
					type="number"
					min="1"
					max="9"
					placeholder="float"
					placeholder="int"
					value={start}
					onChange={handleChange}
				/>
			</Formula>
			<IterationList
				iterations={iterations}
				startingPoint={start}
				array={array}
				myStyle="sequence"
				color={props.color}
			/>
		</>
	)
}

export default SquareNumbers
