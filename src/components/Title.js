import styled from "styled-components"

const StyledTitle = styled.h1`
	font-family: "Roboto";
	font-size: 4.5rem;
	font-weight: bold;
	color: white;
	grid-column: 2 / 12;
	grid-row: 3 / 4;
	align-self: end;
`

const Title = (props) => {
	return <StyledTitle>{props.title}</StyledTitle>
}

export default Title
