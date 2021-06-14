import { useState, useEffect, useContext } from "react"
import { Context } from "../Context"
import styled from "styled-components"

const StyledPresentation = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	@media only screen and (min-width: 960px) {
		overflow-x: hidden;
		overflow-y: hidden;
	}
`

const StyledMove = styled.div`
	transition: 0.5s all linear;
	will-change: transform;

	width: auto;
	height: 100%;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	/* 
	scroll-snap-type: mandatory;
	scroll-snap-points-y: repeat(100%);
	scroll-snap-type: y mandatory; */

	@media only screen and (min-width: 960px) {
		flex-direction: row;
		transform: translateX(${(props) => props.current * -100}%);
	}
`

const Presentation = (props) => {
	const [showInfo, setShowInfo] = useState(false)
	const { currentPage, setCurrentPage } = useContext(Context)
	const { inputOnFocus } = useContext(Context)

	// max number of slides
	let max = 15

	const handleKeyDown = (event) => {
		event.preventDefault()
		switch (event.keyCode) {
			// shows Info [i]
			case 73:
				setShowInfo(!showInfo)
				break
			// previous card
			case 37:
				setCurrentPage(currentPage - decrement())
				break
			// next card
			case 39:
				setCurrentPage(currentPage + increment())
				break
			// start presentation from beginning
			case 82:
				setCurrentPage(0)
				break
			default:
				break
		}
	}

	const increment = () => (!(currentPage >= max - 1) ? 1 : 0)
	const decrement = () => (!(currentPage <= 0) ? 1 : 0)

	useEffect(() => {
		document.title = `Mandelbrot ${currentPage + 1} / ${max}`
		if (inputOnFocus) {
			window.removeEventListener("keydown", handleKeyDown)
		} else {
			window.addEventListener("keydown", handleKeyDown)
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	})

	return (
		<StyledPresentation>
			<StyledMove current={currentPage}>{props.children}</StyledMove>
		</StyledPresentation>
	)
}

export default Presentation
