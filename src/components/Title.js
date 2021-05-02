import styled from "styled-components"

const StyledTitle = styled.h1`
	font-family: "Roboto";
	font-size: 4.5rem;
	font-weight: bold;
`

const Title = (props) => {
	return <StyledTitle>{props.title}</StyledTitle>
}

export default Title
