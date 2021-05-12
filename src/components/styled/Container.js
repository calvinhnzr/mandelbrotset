import styled from "styled-components"

const StyledContainer = styled.aside`
	/* outline: 1px solid white; */
	grid-row-start: 2;
	grid-row-end: 6;
	grid-column: 2 / 5;
	display: flex;
	flex-direction: row;
`

const Container = (props) => {
	return <StyledContainer>{props.children}</StyledContainer>
}

export default Container
