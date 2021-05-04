import { useState } from "react"
import styled from "styled-components"

// remove all components except ExponentSequence
// leave Styled components instead
// only one Main component

const StyledStartingPoint = styled.div`
	position: relative;
	width: 5rem;
	&::after {
		position: absolute;
		top: -0.8rem;
		right: -1.5rem;
		content: "2";
		font-family: "Roboto";
		font-size: 1.4rem;
		font-weight: bold;
		color: #437ef1;
	}
	input {
		background-color: #363738;
		border: none;
		border-radius: 0.2rem;
		height: auto;
		width: 5rem;
		padding: 0.5rem;
		font-family: "Roboto";
		font-size: 1.6rem;
		color: white;
	}
`

const StartingPoint = () => {
	const [num, setNum] = useState(9)
	const handleChange = (e) => {
		let num = e.target.value
		let length = num.toString().length

		if (length <= 1) {
			setNum(e.target.value)
		}
	}

	return (
		<StyledStartingPoint>
			<input
				type="number"
				min="1"
				max="9"
				placeholder="x:"
				value={num}
				onChange={handleChange}
			/>
		</StyledStartingPoint>
	)
}

const StyledSequence = styled.ul`
	margin-top: 2rem;
	height: 100%;
	li {
		width: fit-content;
		margin-bottom: 2.5rem;
		font-family: "Roboto";
		font-size: 1.5rem;
		color: white;
		position: relative;
		letter-spacing: 1px;
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
	}
`

const Sequence = () => {
	const myArr = []
	const numOfIterations = 5
	let myStartingPoint = 9

	for (let i = 0; i < numOfIterations; i++) {
		myStartingPoint = Math.pow(myStartingPoint, 2)
		myArr.push(myStartingPoint)
	}

	return (
		<StyledSequence>
			{myArr.map((item, index) => (
				<li
					key={index}
					style={{ marginLeft: 2 * (index + 2.5) + "rem" }}>
					{item}
				</li>
			))}
		</StyledSequence>
	)
}

const StyledExponentSequence = styled.div`
	/* outline: 1px solid white; */
	margin-top: 2rem;
	grid-row-start: 2;
	grid-row-end: 6;
	grid-column: 2 / 12;
`

const ExponentSequence = () => {
	return (
		<StyledExponentSequence>
			<StartingPoint />
			<Sequence />
		</StyledExponentSequence>
	)
}

export default ExponentSequence
