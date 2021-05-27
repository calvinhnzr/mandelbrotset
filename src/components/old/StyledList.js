import styled from "styled-components"

const StyledList = styled.ol`
	height: 100%;
	margin-top: 2rem;
`

const StyledElements = styled.li`
	font-family: "Roboto";
	width: fit-content;
	color: white;
	position: relative;
	letter-spacing: 1px;

	&.sequence {
		font-size: 1.5rem;
		/* outline: 1px solid red; */
		margin-bottom: 2.5rem;
		margin-left: ${(props) => props.marginLeft}rem;
		list-style: none;
		&::after {
			font-size: 1.3rem;
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
		/* color: #437ef1; */
		color: red !important;
	}

	&:last-of-type {
		&::after {
			display: none;
		}
	}
`

const List = (props) => {
	// calculate exponent

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
							marginLeft={2 * (index + 3.2)}>
							{item}
						</StyledElements>
				  ))
				: null}
		</StyledList>
	)
}

export default List
