import styled from "styled-components"

const StyledSubTitle = styled.h2`
	font-family: "Roboto";
	font-size: 2.25rem;
	font-weight: 100;
	font-style: italic;
	color: white;
	grid-column: 2 / 12;
	grid-row: 4 / 5;
	align-self: start;
`

const SubTitle = (props) => {
	return <StyledSubTitle>{props.value}</StyledSubTitle>
}

export default SubTitle
