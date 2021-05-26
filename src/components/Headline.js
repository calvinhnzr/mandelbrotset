import styled from "styled-components"

const StyledHeadline = styled.h3`
	font-family: "Roboto";
	font-size: 2.25rem;
	line-height: 1.2;
	grid-column: 2 / 12;
	grid-row: 1 / 2;
	align-self: end;
`

const Headline = (props) => {
	return <StyledHeadline>{props.value}</StyledHeadline>
}

export default Headline
