import { useContext } from "react"
import { Context } from "../Context"
import styled from "styled-components"

const myDarkGrey = "#202123"
const myBlue = "#65D677"

// missing firefox support
const StyledProgress = styled.progress`
	display: none;

	@media only screen and (min-width: 960px) {
		display: inherit;
		-webkit-appearance: none;
		appearance: none;
		position: absolute;
		bottom: 0;
		height: 0.75rem;
		width: 100%;

		&[value] {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			border: none;
			color: ${myDarkGrey};

			background-color: ${myBlue};
		}
		&[value]::-webkit-progress-value {
			background-color: ${myDarkGrey};
			transition: width 0.5s ease-in-out;
		}
		&[value]::-webkit-progress-bar {
			background-color: ${myBlue};
		}
	}
`

const Progress = (props) => {
	const { currentPage } = useContext(Context)

	return (
		<StyledProgress
			value={currentPage + 1}
			max={props.max}></StyledProgress>
	)
}

export default Progress
