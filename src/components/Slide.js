import React, { useEffect } from "react"

import Title from "./Title"
import SubTitle from "./SubTitle"
import Headline from "./Headline"

import styled from "styled-components"

const StyledSlide = styled.section`
	/* outline: 1px solid white; */

	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 0 0 auto;

	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;

	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(6, 1fr);
	gap: 1rem;

	h1,
	h2,
	h3,
	h4 {
		color: white;
		font-family: "Roboto";
		margin-bottom: 0.5rem;
	}
`

const Slide = (props) => {
	const item = props.item

	return (
		<StyledSlide>
			{item.title ? <Title title={item.title} /> : null}
			{item.subTitle ? <SubTitle subTitle={item.subTitle} /> : null}
			{item.headline ? <Headline headline={item.headline} /> : null}
			{props.children}
		</StyledSlide>
	)
}

export default Slide
