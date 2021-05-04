import MyStyledInput from "../styled/StyledInput"
import styled from "styled-components"

const StyledNumberLine = styled.div`
	/* outline: 1px solid white; */
	grid-row-start: 2;
	grid-row-end: 6;
	grid-column: 2 / 12;
	display: flex;
	flex-direction: row;
`

const StyledContainer = styled.div`
	/* outline: 1px solid red; */
	width: 20%;
	margin: 1rem;
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

const StyledStartingPoint = styled.div``

const StyledIteration = styled.div`
	margin-top: 2rem;
`

const StyledCanvas = styled.div`
	/* outline: 1px solid red; */
	width: 80%;
	margin: 1rem;
`

const NumberLine = () => {
	return (
		<StyledNumberLine>
			<StyledContainer>
				<StyledStartingPoint>
					<MyStyledInput />
				</StyledStartingPoint>
				<StyledIteration>
					<StyledHeadline>Iteration</StyledHeadline>
				</StyledIteration>
			</StyledContainer>
			<StyledCanvas></StyledCanvas>
		</StyledNumberLine>
	)
}

export default NumberLine
