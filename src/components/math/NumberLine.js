import { useState } from "react"
import styled from "styled-components"

import MyInput from "../styled/StyledInput"
import MyList from "../styled/StyledList"

import MyGraph from "../threejs/MyGraph"

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
	const [num, setNum] = useState("")
	//const iterations = 5

	const handleChange = (e) => {
		let num = e.target.value
		let length = num.toString().length

		if (length <= 5) {
			setNum(e.target.value)
		}
	}

	return (
		<>
			<StyledNumberLine>
				<StyledContainer>
					<MyInput
						type="number"
						min="-5"
						max="5"
						value={num}
						onChange={handleChange}
						placeholder="float"
						handleKeyDown={props.handleKeyDown}
					/>
					<MyList
						iterations={4}
						startingPoint={num}
						myStyle="numberLine"
					/>
				</StyledContainer>
			</StyledNumberLine>
			<MyGraph />
		</>
	)
}

export default NumberLine
