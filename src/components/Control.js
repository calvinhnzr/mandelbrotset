import Progress from "./Progress"
import styled from "styled-components"

const StyledControl = styled.aside`
	outline: 1px solid greenyellow;
`

let currentSlide = 1
let maxSlides = 16

const Control = () => {
	return (
		<StyledControl>
			<Progress value={currentSlide} max={maxSlides} />
		</StyledControl>
	)
}

export default Control
