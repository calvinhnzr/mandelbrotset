import { useState, useEffect } from "react"
import styled from "styled-components"

import MyInput from "../styled/StyledInput"
import MyList from "../styled/StyledList"

import MyGraph from "../threejs/MyGraph"
import MyAxisX from "../threejs/MyAxisX"

const StyledNumberLine = styled.div`
	/* outline: 1px solid white; */
	margin-top: 2rem;
	grid-row-start: 2;
	grid-row-end: 6;
	grid-column: 2 / 6;
	display: flex;
	flex-direction: row;
`

const StyledContainer = styled.div`
	/* outline: 1px solid red; */
	width: 100%;
	display: flex;
	flex-direction: column;
`

const NumberLine = (props) => {
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
			<StyledNumberLine>
				<StyledContainer>
					<MyInput
						type="number"
						min="-5"
						max="5"
						value={start}
						onChange={handleChange}
						placeholder="float"
						handleKeyDown={props.handleKeyDown}
					/>
					<MyList
						iterations={4}
						startingPoint={start}
						myStyle="numberLine"
						array={array}
					/>
				</StyledContainer>
			</StyledNumberLine>
			{/* get  */}
			<MyGraph x={start} numbers={array}>
				<MyAxisX null={true} />
			</MyGraph>
		</>
	)
}

export default NumberLine
