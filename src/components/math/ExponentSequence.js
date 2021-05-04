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
	// handle input
	const [num, setNum] = useState("")
	const iterations = 5

	const handleChange = (e) => {
		let num = e.target.value
		let length = num.toString().length

		if (length <= 1) {
			setNum(e.target.value)
		}
	}

	return (
		<StyledExponentSequence>
			<MyInput
				type="number"
				min="1"
				max="9"
				value={num}
				onChange={handleChange}
				placeholder="int"
				handleKeyDown={props.handleKeyDown}
			/>
			<MyList iterations={iterations} startingPoint={num} />
		</StyledExponentSequence>
	)
}

export default ExponentSequence
