import styled from "styled-components"

const StyledTitle = styled.h1`
	font-weight: bold;
	font-size: 3rem;
	grid-column: 2 / 12;
	grid-row: 6 / 7;
	align-self: end;

	@media only screen and (min-width: 960px) {
		font-size: 4.5rem;
		grid-column: 2 / 12;
	}
`

const Title = (props) => {
	return <StyledTitle>{props.value}</StyledTitle>
}

export default Title
