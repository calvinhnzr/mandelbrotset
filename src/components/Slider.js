import React, { useState } from "react"

import Slide from "./Slide"
import styled from "styled-components"

const StyledSlider = styled.div`
	/* outline: 1px solid red; */
	position: relative;
	grid-column: 1 / 13;
	grid-row: 1 / 7;

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
	console.log(props.currentSlide)

	const max = props.data.default.slides.length

	const renderSlides = () =>
		props.data.default.slides.map((item, index) => (
			<Slide key={index}>
				<h2>{item.num}</h2>
				<h1>{item.title}</h1>
				<h2>{item.subTitle}</h2>
				<h3>{item.headline}</h3>
			</Slide>
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
