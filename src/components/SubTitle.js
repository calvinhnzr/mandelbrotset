import styled from "styled-components"

const StyledSubTitle = styled.h2`
	margin-top: 0.2rem;
	font-weight: 100;
	font-style: italic;
	font-size: 1.9rem;
	line-height: 1.1;
	grid-column: 2 / 12;
	grid-row: 4 / 5;

	@media only screen and (min-width: 960px) {
		font-size: 2.25rem;
		align-self: start;
	}
`

const SubTitle = (props) => {
	return <StyledSubTitle>{props.value}</StyledSubTitle>
}

export default SubTitle
