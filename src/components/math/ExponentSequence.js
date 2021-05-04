import { useState } from "react"
import styled from "styled-components"

import MyInput from "../styled/StyledInput"
import MyList from "../styled/StyledList"

const StyledList = styled.ul`
	margin-top: 2rem;
	height: 100%;
`

const StyledListItem = styled.li`
	width: fit-content;
	margin-bottom: 2.5rem;
	font-family: "Roboto";
	font-size: 1.5rem;
	color: white;
	position: relative;
	letter-spacing: 1px;
	// exponent ^2
	&::after {
		position: absolute;
		top: -0.8rem;
		right: -1.5rem;
		content: "2";
		font-family: "Roboto";
		font-size: 1.3rem;
		font-weight: bold;
		color: #437ef1;
	}
	&:last-of-type {
		&::after {
			display: none;
		}
	}
`

const StyledExponentSequence = styled.div`
	margin-top: 2rem;
	grid-row-start: 2;
	grid-row-end: 6;
	grid-column: 2 / 12;
`

const ExponentSequence = () => {
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
			/>
			<MyList iterations={iterations} startingPoint={num} />
		</StyledExponentSequence>
	)
}

export default ExponentSequence
