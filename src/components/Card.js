import styled from "styled-components"

const StyledCard = styled.section`
	/* outline: 1px solid white; */
	background-color: #202123;
	width: 100%;
	height: 100vh;
	flex: 0 0 auto;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(12, 1fr);
	/* gap: 1rem; */
	margin-bottom: 1.3rem;

	&:first-of-type {
		background-color: #191a1b;
		margin-bottom: 0;
		height: 100%;
	}

	@media only screen and (min-width: 960px) {
		margin-bottom: 0;
		height: 100%;
	}
`

const Card = (props) => {
	return <StyledCard>{props.children}</StyledCard>
}

export default Card
