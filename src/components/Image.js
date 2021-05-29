import styled from "styled-components"

const StyledImage = styled.img`
	/* outline: 1px solid white; */

	grid-column: 3 / 11;
	grid-row: 2 / 8;
	width: 100%;
	height: 100%;
	object-fit: cover;

	@media only screen and (min-width: 960px) {
		grid-column: 8/ 12;
		grid-row: 2 / 11;
	}
`

const Image = (props) => {
	return <StyledImage src={props.src} alt={props.alt} />
}

export default Image
