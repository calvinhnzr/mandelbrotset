import styled from "styled-components"

const StyledSubTitle = styled.h2`
	margin-top: 1rem;
	font-family: "Roboto";
	font-size: 2.25rem;
	font-weight: 100;
	font-style: italic;
`

const SubTitle = (props) => {
	return <StyledSubTitle>{props.subTitle}</StyledSubTitle>
}

export default SubTitle
