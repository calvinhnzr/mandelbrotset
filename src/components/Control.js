import React, { useState, useEffect } from "react"

import Slider from "./Slider"
import Progress from "./Progress"
import styled from "styled-components"

// add: double click on screen opens controls

const StyledControl = styled.div`
	width: 100%;
	height: 100%;
	padding: 0.8rem 0;
	gap: 0.5rem;
	position: relative;
`

const StyledContainer = styled.div`
	z-index: 100;
	outline: 1px solid white;
	display: flex;
	flex-direction: column;
	position: absolute;
	height: auto;
	top: 0;
	right: 0;
	span {
		font-family: "Roboto";
		font-size: 1.2rem;
		color: white;
		margin: 0.2rem 0;
	}
`

const Control = (props) => {
	const [count, setCount] = useState(0)
	const [isHidden, setIsHidden] = useState(false)

	let maxSlides = props.maxSlides
	let currentSlide = count

	const handleKeyDown = (event) => {
		switch (event.keyCode) {
			// hides control
			case 72:
				setIsHidden(!isHidden)
				break
			// previous slide
			case 37:
				setCount(count - decrement())
				break
			// next slide
			case 39:
				setCount(count + increment())
				break
			// reset
			case 82:
				setCount(0)
				break
			default:
				break
		}
	}

	const increment = () => {
		if (!(count >= maxSlides - 1)) {
			return 1
		} else {
			return 0
		}
	}
	const decrement = () => {
		if (!(count <= 0)) {
			return 1
		} else {
			return 0
		}
	}

	useEffect(() => {
		document.title = `Mandelbrot ${currentSlide + 1} / ${maxSlides}`
		window.addEventListener("keydown", handleKeyDown)
		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	})

	return (
		<StyledControl>
			{isHidden ? (
				<StyledContainer>
					<span>
						{currentSlide + 1}/{maxSlides}
					</span>
					<button onClick={() => setCount(count + increment())}>
						Next Slide (ArrowRight)
					</button>
					<button onClick={() => setCount(count - decrement())}>
						Previous Slide (ArrowLeft)
					</button>
					<button onClick={() => setCount(0)}>Reset (R)</button>
				</StyledContainer>
			) : null}
			{props.children}

			<Slider data={props.data} currentSlide={currentSlide} />

			<Progress value={currentSlide + 1} max={maxSlides} />
		</StyledControl>
	)
}

export default Control
