import styled from "styled-components"

const StyledPresentation = styled.div`
	outline: 1px solid red;
	height: 100%;
	width: 100%;
	position: relative;
	overflow-y: hidden;
	overflow-x: hidden;
`

const StyledMove = styled.div`
	transition: 0.5s all linear;
	will-change: transform;
	width: auto;
	height: 100%;
	display: flex;
	flex-wrap: nowrap;
	transform: translateX(${(props) => props.current * -100}%);
`

const Presentation = (props) => {
	return (
		<StyledPresentation>
			<StyledMove current={props.current}>{props.children}</StyledMove>
		</StyledPresentation>
	)
}

export default Presentation
