import Slide from "./Slide"
import styled from "styled-components"

const StyledSlider = styled.div`
	/* outline: 1px solid red; */
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

	transform: translateX(${(props) => props.currentSlide * -100}%);
`

const Slider = (props) => {
	const max = props.data.default.slides.length
	const renderSlides = () =>
		props.data.default.slides.map((item, index) => (
			<Slide
				key={index}
				item={item}
				handleKeyDown={props.handleKeyDown}
			/>
		))

	return (
		<StyledSlider>
			<StyledMove max={max} currentSlide={props.currentSlide}>
				{renderSlides()}
			</StyledMove>
		</StyledSlider>
	)
}

export default Slider
