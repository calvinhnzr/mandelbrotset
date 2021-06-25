import { useEffect, useRef, useState } from "react"
import getWindowDimensions from "../hooks/useWindowDimensions"
import styled from "styled-components"

import MyMath from "./math/MyMath"

const Card = styled.div`
	height: 100%;
	width: 100%;
	background-color: #191a1b;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	margin-right: ${(props) => props.myMargin}px;
	flex: 0 0 auto;
	width: ${(props) => props.width - props.myMargin * 3}px;
	padding: 1.5rem;
	position: relative;
	& > span {
		color: white;
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
		&:first-of-type {
			color: #ea5b89;
		}
	}
	& h5 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
	& h6 {
		font-size: 1.2rem;
		margin: 2rem 0 1rem;
	}
	& p {
		font-size: 1.5rem;
		font-weight: bold;

		color: #ea5b89;
		line-height: 1.2;
	}
	&:last-of-type {
		margin: 0;
	}

	@media only screen and (min-width: 960px) {
		margin: 0;
		width: 100%;
		flex: inherit;
		padding: 2.5rem;
		& h5 {
			font-size: 2rem;
			margin-bottom: 1rem;
		}
		& h6 {
			font-size: 1.5rem;
			margin: 2rem 0 2rem;
		}
		& > span {
			font-size: 2rem;
		}
		&:first-of-type {
			margin-right: 4rem;
		}
	}
`

const StyledProgressContainer = styled.div`
	/* outline: 1px solid white; */
	grid-column: 2 / 12;
	grid-row: 9 / 10;
	height: 7px;
	border-radius: 1rem;
	background-color: #191a1b;

	@media only screen and (min-width: 960px) {
		display: none;
	}
`

const StyledProgressBar = styled.div`
	will-change: auto;
	height: 7px;
	background: #ea5b89;
	object-fit: cover;
	border-radius: 1rem;
	width: 50%;
	width: "";
	width: ${(props) => props.barWidth}%;
`

const StyledSlideShow = styled.div`
	grid-column: 1 / 13;
	grid-row: 3 / 9;
	display: flex;
	flex-wrap: nowrap;
	overflow-x: auto;
	z-index: 100;

	&::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}
	&::after {
		content: "";
		min-width: ${(props) => props.myMargin}px;
	}

	&::before {
		content: "";
		min-width: ${(props) => props.myMargin}px;
	}

	@media only screen and (min-width: 960px) {
		grid-column: 2 / 12;
		grid-row: 3 / 11;
		overflow: inherit;
		&::after,
		&::before {
			display: none;
		}
	}
`

const SlideShow = () => {
	const [barWidth, setBarWidth] = useState("")
	const carouselRef = useRef(null)
	const barRef = useRef(null)
	const cardRef = useRef(null)

	const { width } = getWindowDimensions()
	const blockLength = 2
	let myMargin = width / 12

	useEffect(() => {
		const carousel = carouselRef.current
		function progressBarScroll() {
			let scrolled =
				(((carousel.scrollLeft /
					(carousel.scrollWidth - carousel.clientWidth)) *
					100) /
					blockLength) *
				(blockLength - 1)
			setBarWidth(Math.ceil(100 / blockLength + scrolled))
		}

		carousel.addEventListener("scroll", progressBarScroll, false)
		return () => {
			carousel.removeEventListener("scroll", progressBarScroll, false)
		}
	})

	const Progressbar = () => {
		return (
			<StyledProgressContainer>
				<StyledProgressBar ref={barRef} barWidth={barWidth} />
			</StyledProgressContainer>
		)
	}

	return (
		<>
			<StyledSlideShow ref={carouselRef} myMargin={myMargin}>
				<Card ref={cardRef} myMargin={myMargin} width={width}>
					<h5>Kartesisch</h5>
					<MyMath>{"z=a+b*i"}</MyMath>
					<h6>Umrechnung</h6>
					<MyMath>{"a=r*cos(\\varphi)"}</MyMath>
					<MyMath>{"b=i*r*sin(\\varphi)"}</MyMath>
				</Card>
				<Card ref={cardRef} myMargin={myMargin} width={width}>
					<h5>Polar</h5>
					<MyMath>{"z=r*(cos(\\varphi)+sin(\\varphi)*i)"}</MyMath>
					<h6>Umrechnung</h6>
					<MyMath>{"r=\\sqrt{a^2+b^2}"}</MyMath>
					<MyMath>{"\\varphi=tan^{(-1)}(b/a)"}</MyMath>
				</Card>
			</StyledSlideShow>
			<Progressbar />
		</>
	)
}

export default SlideShow
