import { useState } from "react"
import styled from "styled-components"

import MyInput from "../styled/StyledInput"
import MyList from "../styled/StyledList"

import MyCanvas from "../threejs/MyCanvas"
import MyMesh from "../threejs/MyMesh"
import MyAnimatedMesh from "../threejs/MyAnimatedMesh"

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

const StyledHeadline = styled.h4`
	font-family: "Roboto";
	font-size: 1.3rem;
	font-weight: 100;
	color: white;
	margin-bottom: 1rem;
`

const StyledCanvas = styled.div`
	/* outline: 1px solid red; */
	/* width: 50%; */
	/* margin: 1rem; */
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
			<MyCanvas>
				<MyAnimatedMesh />
				<MyMesh position={[0, 0, 0]} />
				<MyMesh position={[-2, 0, 0]} />
			</MyCanvas>
		</>
	)
}

export default NumberLine
