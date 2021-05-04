import styled from "styled-components"

const StyledContainer = styled.div`
	margin-bottom: 1rem;
	position: relative;
	width: fit-content;
	display: flex;
	align-items: center;

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

const StyledLabel = styled.label`
	font-family: "Roboto";
	font-size: 1.2rem;
	font-weight: bold;
	letter-spacing: 1px;
	color: white;
	margin-right: 0.5rem;
`

const NumInput = (props) => {
	return (
		<StyledContainer>
			<StyledLabel>x = </StyledLabel>
			<StyledInput
				type={props.type}
				min={props.min}
				max={props.max}
				value={props.value}
				onChange={props.onChange}
				placeholder="8"
			/>
		</StyledContainer>
	)
}

export default NumInput
