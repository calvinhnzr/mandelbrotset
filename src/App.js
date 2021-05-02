import * as data from "./data/data.json"

import Slider from "./components/Slider"
import Slide from "./components/Slide"
import Control from "./components/Control"
import Progress from "./components/Progress"

import styled from "styled-components"

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`

function App() {
	return (
		<div className="App">
			<Wrapper>
				<Control maxSlides={data.slides.length} data={data} />
			</Wrapper>
		</div>
	)
}

export default App
