import styled from "styled-components"

const StyledHeadline = styled.h3`
	font-family: "Roboto";
	font-size: 2.25rem;
	font-size: 3rem;
	font-weight: bold;
	line-height: 1.2;
	grid-column: 2 / 12;
	grid-row: 2 /3;
	align-self: center;
	z-index: 200;
	text-shadow: 0px 0px 25px rgba(0, 0, 0, 0.6);
	@media only screen and (min-width: 960px) {
		grid-row: 2 / 3;
		align-self: end;
	}
`

const Headline = (props) => {
	return <StyledHeadline>{props.value}</StyledHeadline>
}

export default Headline
