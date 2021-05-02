import React, { useState, useEffect } from "react"

import Progress from "./Progress"
import styled from "styled-components"

const StyledControl = styled.aside`
	outline: 1px solid greenyellow;
`

const StyledContainer = styled.div`
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

let maxSlides = 16

const Control = () => {
	const [count, setCount] = useState(1)
	const [isHidden, setIsHidden] = useState(false)

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
				setCount(1)
				break
			default:
				break
		}
	}

	const increment = () => {
		if (!(count >= maxSlides)) {
			return 1
		} else {
			return 0
		}
	}
	const decrement = () => {
		if (!(count <= 1)) {
			return 1
		} else {
			return 0
		}
	}

	useEffect(() => {
		document.title = `Mandelbrot ${currentSlide} / ${maxSlides}`
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
						{currentSlide}/{maxSlides}
					</span>
					<button onClick={() => setCount(count + increment())}>
						Next Slide
					</button>
					<button onClick={() => setCount(count - decrement())}>
						Previous Slide
					</button>
					<button onClick={() => setCount(1)}>Reset</button>
				</StyledContainer>
			) : (
				""
			)}

			<Progress value={currentSlide} max={maxSlides} />
		</StyledControl>
	)
}

export default Control
