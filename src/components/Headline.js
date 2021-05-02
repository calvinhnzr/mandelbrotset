import styled from "styled-components"

const StyledHeadline = styled.h3`
	margin-top: 1rem;
	font-family: "Roboto";
	font-size: 2.25rem;
`

const Headline = (props) => {
	return <StyledHeadline>{props.headline}</StyledHeadline>
}

export default Headline
