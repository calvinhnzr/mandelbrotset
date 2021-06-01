import { Provider } from "./Context"
import { createGlobalStyle } from "styled-components"
import NewData from "./NewData"
import Presentation from "./components/Presentation"
import Progress from "./components/Progress"

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, li {
		color: white;
		font-family: "Roboto", sans-serif !important;
	}
`

function App() {
	let current = 1
	let max = 16

	return (
		<Provider>
			<div className="App">
				<GlobalStyle />
				<Presentation>
					<NewData />
				</Presentation>
				<Progress current={current + 1} max={max} />
			</div>
		</Provider>
	)
}

export default App
