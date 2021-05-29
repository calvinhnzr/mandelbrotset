import styled from "styled-components"

const StyledNote = styled.p`
	/* outline: 1px solid white; */
	grid-column: 2 / 12;
	grid-row: 11/ 13;
	align-self: center;
	font-size: 0.9rem;
	line-height: 1.1;
	color: rgba(196, 196, 196, 0.2);

	@media only screen and (min-width: 960px) {
		& > br {
			display: none;
		}
		justify-self: end;
		grid-column: 2 / 12;
		grid-row: 11/ 13;
	}
`

const Note = (props) => {
	return <StyledNote>{props.children}</StyledNote>
}

export default Note
