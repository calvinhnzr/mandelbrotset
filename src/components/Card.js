import styled from "styled-components"

const StyledCard = styled.section`
	background-color: #202123;
	width: 100%;
	/* 100vh unstable on mobile */
	height: 780px;
	flex: 0 0 auto;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(12, 1fr);
	gap: 1rem;
	row-gap: 2.25rem;
	margin-bottom: 1.3rem;
	position: relative;
	&:first-of-type {
		gap: 1rem;
		background-color: #191a1b;
		margin-bottom: 0;
		height: 100%;
	}

	@media only screen and (min-width: 960px) {
		margin-bottom: 0;
		height: 100%;
		&:first-of-type {
			/* background-color: #202123; */
		}
	}
`

const Card = (props) => {
	return <StyledCard>{props.children}</StyledCard>
}

export default Card
