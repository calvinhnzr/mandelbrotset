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

const StyledBotton = styled.button`
	margin: 0.2rem;
	border: none;
	height: 1.5rem;
	height: auto;
	width: auto;
	background-color: white;
	border-radius: 0.2rem;
	box-shadow: 0 6px 25px 0 #00000033;
	font-family: "Roboto";
`

const StyledContainer = styled.div`
	margin: 1rem;
	z-index: 100;
	/* outline: 1px solid white; */
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

	const increment = () => (!(count >= maxSlides - 1) ? 1 : 0)
	const decrement = () => (!(count <= 0) ? 1 : 0)

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
					<div>
						<StyledBotton
							onClick={() => setCount(count - decrement())}>
							Previous
						</StyledBotton>
						<StyledBotton
							onClick={() => setCount(count + increment())}>
							Next
						</StyledBotton>
					</div>
					<StyledBotton onClick={() => setCount(0)}>
						Reset (R)
					</StyledBotton>
					<StyledBotton onClick={() => setIsHidden(!isHidden)}>
						Hide (H)
					</StyledBotton>
				</StyledContainer>
			) : null}
			{props.children}

			<Slider
				data={props.data}
				currentSlide={currentSlide}
				handleKeyDown={handleKeyDown}
			/>

			<Progress value={currentSlide + 1} max={maxSlides} />
		</StyledControl>
	)
}

export default Control
