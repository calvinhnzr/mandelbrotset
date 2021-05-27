import styled from "styled-components"

const StyledList = styled.ol`
	grid-column: 2 / 12;
	grid-row: 4 / 12;
	height: auto;
	margin-top: 2rem;
	@media only screen and (min-width: 960px) {
		margin-top: 0;
	}
`

const StyledElements = styled.li`
	width: fit-content;
	position: relative;
	letter-spacing: 1px;

	&.sequence {
		font-size: 1.7rem;
		margin-bottom: 1.5rem;
		list-style: none;
		&::after {
			font-size: 1.3rem;
		}
		@media only screen and (min-width: 960px) {
			margin-left: ${(props) => props.marginLeft}rem;
			margin-bottom: 2.5rem;
		}
	}

	&.numberLine {
		font-size: 1.2rem;
		font-weight: 100;
		margin-bottom: 1.5rem;
		line-height: 1.1;
		counter-increment: item;
		&::before {
			display: inline-block;
			/* width: 1em; */
			padding-right: 0.5em;
			font-weight: bold;
			/* text-align: right; */
			content: counter(item);
		}
		&::after {
			font-size: 1rem;
		}
	}

	&::after {
		position: absolute;
		top: -0.8rem;
		right: -1.5rem;
		content: "2";
		font-family: "Roboto";
		font-weight: bold;
		color: ${(props) => props.color};
	}

	&:last-of-type {
		&::after {
			display: none;
		}
	}
`

const IterationList = (props) => {
	const myArr = []
	const numOfIterations = props.iterations
	let myStartingPoint = props.startingPoint

	for (let i = 0; i < numOfIterations; i++) {
		myStartingPoint = Math.pow(myStartingPoint, 2)
		myArr.push(myStartingPoint)
	}

	return (
		<StyledList>
			{myStartingPoint !== 0
				? props.array.map((item, index) => (
						<StyledElements
							key={index}
							className={props.myStyle}
							marginLeft={2 * (index + 3.2)}
							color={props.color}>
							{item}
						</StyledElements>
				  ))
				: null}
		</StyledList>
	)
}

export default IterationList
