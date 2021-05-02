import styled from "styled-components"

const StyledSlide = styled.section`
	/* outline: 1px solid white; */

	width: 100%;
	height: 100%;

	padding: 2rem;
	display: flex;
	flex-direction: column;
	flex: 0 0 auto;

	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;
	h1,
	h2,
	h3 {
		color: white;
		font-family: "Roboto";
		margin-bottom: 0.5rem;
	}
`

const Slide = (props) => {
	return <StyledSlide>{props.children}</StyledSlide>
}

export default Slide
