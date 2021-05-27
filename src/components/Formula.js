import styled from "styled-components"

const StyledFormula = styled.div`
	/* outline: 1px solid white; */

	grid-row: 3 / 4;
	grid-column: 2 / 12;
	align-items: center;
	width: fit-content;
	position: relative;

	&::after {
		content: "2";
		position: absolute;
		top: -0.8rem;
		right: -1.5rem;
		font-family: "Roboto";
		font-size: 1.4rem;
		font-weight: bold;
		color: ${(props) => props.color};
	}
	& span {
		width: fit-content;
		font-family: "Roboto";
		font-size: 2rem;
		font-weight: 100;
		letter-spacing: 1px;
		color: white;
		margin-right: 0.5rem;
	}
`

const Formula = (props) => {
	return <StyledFormula color={props.color}>{props.children}</StyledFormula>
}

export default Formula
