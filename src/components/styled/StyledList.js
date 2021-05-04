import styled from "styled-components"

const StyledList = styled.ul`
	margin-top: 2rem;
	height: 100%;
`

const StyledElements = styled.li`
	width: fit-content;
	margin-bottom: 2.5rem;
	font-family: "Roboto";
	font-size: 1.5rem;
	color: white;
	position: relative;
	letter-spacing: 1px;
	// exponent ^2
	&::after {
		position: absolute;
		top: -0.8rem;
		right: -1.5rem;
		content: "2";
		font-family: "Roboto";
		font-size: 1.3rem;
		font-weight: bold;
		color: #437ef1;
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
			{myStartingPoint != ""
				? myArr.map((item, index) => (
						<StyledElements
							key={index}
							style={{
								marginLeft: 2 * (index + 2.5) + "rem",
							}}>
							{item}
						</StyledElements>
				  ))
				: null}
		</StyledList>
	)
}

export default List
