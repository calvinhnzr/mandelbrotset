import styled from "styled-components"

const StyledCard = styled.section`
	width: 100%;
	height: 100%;
	flex: 0 0 auto;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(6, 1fr);
	gap: 1rem;
`

const Card = (props) => {
	return <StyledCard>{props.children}</StyledCard>
}

export default Card
