import styled from "styled-components"

const StyledPresentation = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	@media only screen and (min-width: 960px) {
		overflow-x: hidden;
		overflow-y: hidden;
	}
`

const StyledMove = styled.div`
	transition: 0.5s all linear;
	will-change: transform;
	width: auto;
	height: 100%;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	@media only screen and (min-width: 960px) {
		flex-direction: row;
		transform: translateX(${(props) => props.current * -100}%);
	}
`

const Presentation = (props) => {
	return (
		<StyledPresentation>
			<StyledMove current={props.current}>{props.children}</StyledMove>
		</StyledPresentation>
	)
}

export default Presentation
