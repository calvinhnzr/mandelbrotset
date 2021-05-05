import styled from "styled-components"

const StyledKey = styled.div`
	display: block;
	height: 3.7rem;
	width: 3.7rem;
	border: 0.2rem solid #363738;
	border-radius: 0.5rem;
	background-color: #202123;
	box-shadow: 7px 8px 12px 0px #00000073;
	margin-bottom: 1rem;

	&:hover {
		box-shadow: none;
		background-color: #363738;
		transform: translateX(3px) translateY(4px);
		transition: 0.1s ease-in-out;
		cursor: pointer;
	}
`

const StyledLetter = styled.span`
	display: block;
	font-family: "Roboto";
	font-weight: bold;
	font-size: 1.3rem;
	color: white;
	color: #ffffff66;
	width: 100%;
	height: 100%;
	padding-top: 1rem;
	text-align: center;
`

const StyledLabel = styled.span`
	/* outline: 1px solid white; */
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 1rem;
	color: white;
	font-family: "Roboto";
	font-weight: 400;
	letter-spacing: 1px;
`

const Key = (props) => {
	return (
		<StyledLabel>
			<StyledKey>
				<StyledLetter>{props.letter}</StyledLetter>
			</StyledKey>
			{props.label}
		</StyledLabel>
	)
}

export default Key
