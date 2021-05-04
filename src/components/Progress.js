import styled from "styled-components"

const myDarkGrey = "#202123"
const myBlue = "#65D677"

// missing firefox support
const StyledProgress = styled.progress`
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
`

const Progress = (props) => (
	<StyledProgress value={props.value} max={props.max}></StyledProgress>
)

export default Progress
