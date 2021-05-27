import { Provider } from "./Context"
import { createGlobalStyle } from "styled-components"
import Presentation from "./components/Presentation"
import Progress from "./components/Progress"

import Data from "./components/Data"

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, p, li {
		color: white;
		font-family: "Roboto", sans-serif !important;
	}
`

function App() {
	let current = 1
	let max = 11

	return (
		<Provider>
			<div className="App">
				<GlobalStyle />
				<Presentation>
					<Data />
				</Presentation>
				<Progress current={current + 1} max={max} />
			</div>
		</Provider>
	)
}

export default App
