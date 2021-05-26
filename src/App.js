import React, { useState, useEffect } from "react"
import { createGlobalStyle } from "styled-components"

import { mydata } from "./data"
import Presentation from "./components/Presentation"
import Progress from "./components/Progress"
import Info from "./components/Info"
import Card from "./components/Card"

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:regular,bold,italic&subset=latin,latin-ext');
  h1, h2, h3, h4, p {
		color: white;
		font-family: "Roboto", sans-serif !important;
	}
`

function App() {
	const [current, setCurrent] = useState(0)
	const [showInfo, setShowInfo] = useState(false)

	const max = mydata.cards.length

	const handleKeyDown = (event) => {
		switch (event.keyCode) {
			// shows Info [i]
			case 73:
				setShowInfo(!showInfo)
				break
			// previous card
			case 37:
				setCurrent(current - decrement())
				break
			// next card
			case 39:
				setCurrent(current + increment())
				break
			// start presentation from beginning
			case 82:
				setCurrent(0)
				break
			default:
				break
		}
	}

	const increment = () => (!(current >= max - 1) ? 1 : 0)
	const decrement = () => (!(current <= 0) ? 1 : 0)

	useEffect(() => {
		document.title = `Mandelbrot ${current + 1} / ${max}`

		window.addEventListener("keydown", handleKeyDown)
		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	})

	return (
		<div className="App">
			<GlobalStyle />
			<Presentation current={current}>
				{mydata.cards.map((item, index) => {
					return <Card key={index}>{item.components}</Card>
				})}
			</Presentation>
			<Progress current={current + 1} max={max} />
			<Info />
		</div>
	)
}

export default App
