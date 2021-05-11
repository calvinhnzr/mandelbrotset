import { useState } from "react"
import styled from "styled-components"

import MyInput from "../styled/StyledInput"
import MyList from "../styled/StyledList"

const StyledExponentSequence = styled.div`
	margin-top: 2rem;
	grid-row-start: 2;
	grid-row-end: 6;
	grid-column: 2 / 12;
`

const ExponentSequence = (props) => {
	const [start, setStart] = useState("")
	const [array] = useState([])
	const iterations = 4

	const handleChange = (e) => {
		e.preventDefault()

		// set starting point
		if (e.target.value.toString().length <= 1) setStart(e.target.value)
		// set iteration
		let myNum = start
		for (let i = 0; i < iterations; i++) {
			myNum = Math.pow(myNum, 2)
			array[i] = myNum
		}
	}

	return (
		<StyledExponentSequence>
			<MyInput
				type="number"
				min="1"
				max="9"
				value={start}
				onChange={handleChange}
				placeholder="int"
				handleKeyDown={props.handleKeyDown}
			/>
			<MyList
				iterations={iterations}
				startingPoint={start}
				myStyle="sequence"
				array={array}
			/>
		</StyledExponentSequence>
	)
}

export default ExponentSequence
