import * as data from "./data/data.json"

import Slider from "./components/Slider"
import Slide from "./components/Slide"
import Control from "./components/Control"
import Progress from "./components/Progress"

import styled from "styled-components"

const Wrapper = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(6, 1fr);
	gap: 0.5rem;
`

function App() {
	return (
		<div className="App">
			<Wrapper>
				<Control />
				<Slider />
			</Wrapper>
		</div>
	)
}

export default App
