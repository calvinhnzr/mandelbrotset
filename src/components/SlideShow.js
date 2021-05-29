import { useEffect, useRef } from "react"
import getWindowDimensions from "../hooks/useWindowDimensions"
import styled from "styled-components"

const Card = styled.div`
	/* outline: 1px solid white; */
	height: 100%;
	width: 100%;
	background-color: #191a1b;
	border-radius: 0.5rem;
	/* height: 22rem; */
	display: flex;
	flex-direction: column;
	margin-right: ${(props) => props.myMargin}px;
	flex: 0 0 auto;
	width: ${(props) => props.width - props.myMargin * 3}px;
	padding: 0;
	position: relative;
	&:last-of-type {
		margin: 0 !important;
	}
`

const StyledProgressContainer = styled.div`
	/* outline: 1px solid white; */
	grid-column: 2 / 12;
	grid-row: 9 / 10;
	height: 7px;
	border-radius: 1rem;
	background-color: #191a1b;
`

const StyledProgressBar = styled.div`
	height: 7px;
	background: #ea5b89;
	object-fit: cover;
	width: calc(100% / 3);
	width: "";
	border-radius: 1rem;
`

const StyledSlideShow = styled.div`
	/* outline: 1px solid red; */
	/* padding: 4rem 0 3rem; */
	/* padding-top: 1rem; */
	grid-column: 1 / 13;
	grid-row: 3 / 9;
	display: flex;
	flex-wrap: nowrap;
	overflow-x: auto;
	z-index: 100;

	&::-webkit-scrollbar {
		width: 0px;
		background: transparent; /* make scrollbar transparent */
	}
	&::after {
		content: "";
		min-width: ${(props) => props.myMargin}px;
	}

	&::before {
		content: "";
		min-width: ${(props) => props.myMargin}px;
	}
`

const SlideShow = (props) => {
	const carouselRef = useRef(null)
	const barRef = useRef(null)
	const cardRef = useRef(null)

	const { width } = getWindowDimensions()

	let myMargin = width / 12
	console.log(myMargin)

	useEffect(() => {
		const bar = barRef.current
		const carousel = carouselRef.current
		const block = cardRef.current

		// set default width

		const blockLength = 3

		bar.style.width = 100 / blockLength + "%"
		function progressBarScroll() {
			let scrolled =
				(((carousel.scrollLeft /
					(carousel.scrollWidth - carousel.clientWidth)) *
					100) /
					blockLength) *
				(blockLength - 1) // (x - 1) / x
			bar.style.width = 100 / blockLength + scrolled + "%"
		}
		carousel.addEventListener("scroll", progressBarScroll, false)
		return () => {
			carousel.removeEventListener("scroll", progressBarScroll, false)
		}
	})

	const Progressbar = () => {
		return (
			<StyledProgressContainer>
				<StyledProgressBar ref={barRef} />
			</StyledProgressContainer>
		)
	}

	return (
		<>
			<StyledSlideShow ref={carouselRef} myMargin={myMargin}>
				<Card ref={cardRef} myMargin={myMargin} width={width} />
				<Card ref={cardRef} myMargin={myMargin} width={width} />
				<Card ref={cardRef} myMargin={myMargin} width={width} />
			</StyledSlideShow>
			<Progressbar />
		</>
	)
}

export default SlideShow
