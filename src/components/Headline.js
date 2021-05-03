import styled from "styled-components"

const StyledHeadline = styled.h3`
	margin-top: 1rem;
	font-family: "Roboto";
	font-size: 2.25rem;
	color: white;
	grid-column: 2 / 12;
	grid-row: 1 / 2;
	align-self: end;
`

const Headline = (props) => {
	return <StyledHeadline>{props.headline}</StyledHeadline>
}

export default Headline
