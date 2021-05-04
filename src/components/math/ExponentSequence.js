import { useState } from "react"
import styled from "styled-components"

const StyledInputContainer = styled.div`
	position: relative;
	width: 5rem;
	// exponent ^2
	&::after {
		content: "2";
		position: absolute;
		top: -0.8rem;
		right: -1.5rem;
		font-family: "Roboto";
		font-size: 1.4rem;
		font-weight: bold;
		color: #437ef1;
	}
`

const StyledInput = styled.input`
	background-color: #363738;
	border: none;
	border-radius: 0.2rem;
	height: auto;
	width: 5rem;
	padding: 0.5rem;
	font-family: "Roboto";
	font-size: 1.6rem;
	color: white;
`
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
	const [num, setNum] = useState(9)

	const handleChange = (e) => {
		let num = e.target.value
		let length = num.toString().length

		if (length <= 1) {
			setNum(e.target.value)
		}
	}

	// calculate exponent
	const myArr = []
	const numOfIterations = 5
	let myStartingPoint = num

	for (let i = 0; i < numOfIterations; i++) {
		myStartingPoint = Math.pow(myStartingPoint, 2)
		myArr.push(myStartingPoint)
	}

	return (
		<StyledExponentSequence>
			<StyledInputContainer>
				<StyledInput
					type="number"
					min="1"
					max="9"
					placeholder="x:"
					value={num}
					onChange={handleChange}
				/>
			</StyledInputContainer>
			<StyledList>
				{myArr.map((item, index) => (
					<StyledListItem
						key={index}
						style={{ marginLeft: 2 * (index + 2.5) + "rem" }}>
						{item}
					</StyledListItem>
				))}
			</StyledList>
		</StyledExponentSequence>
	)
}

export default ExponentSequence
