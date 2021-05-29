import styled from "styled-components"

const StyledQuote = styled.blockquote`
	/* outline: 1px solid white; */
	grid-column: 2 / 12;
	grid-row: 8 / 11;
	display: flex;
	flex-direction: column;
	font-family: "Roboto", sans-serif;
	font-weight: 100;
	font-style: italic;
	line-height: 1.1;
	font-size: 1.4rem;
	color: white;
	position: relative;
	& > p {
		margin-top: 1rem;
		font-weight: bold;
		color: #f6f179;
	}
	@media only screen and (min-width: 960px) {
		line-height: 1.5;
		grid-column: 3 / 7;
		grid-row: 5 / 8;
	}
`
const Quote = (props) => {
	return <StyledQuote>{props.children}</StyledQuote>
}

export default Quote
