import { useState, useEffect } from "react"

import styled from "styled-components"

const StyledContainer = styled.div`
	margin-bottom: 1rem;
	position: relative;
	width: fit-content;
	display: flex;
	align-items: center;

	// exponent ^2
	&::after {
		content: "2";
		position: absolute;
		top: -0.8rem;
		right: -1.5rem;
		font-family: "Roboto";
		font-size: 1.4rem;
		font-weight: bold;
		color: #437ef1;
	}
`
const StyledInput = styled.input`
	background-color: #363738;
	border: none;
	border-radius: 0.2rem;
	height: auto;
	width: 5rem;
	padding: 0.5rem;
	font-family: "Roboto";
	font-size: 1.6rem;
	color: white;
`

const StyledLabel = styled.label`
	font-family: "Roboto";
	font-size: 1.2rem;
	font-weight: bold;
	letter-spacing: 1px;
	color: white;
	margin-right: 0.5rem;
`

const NumInput = (props) => {
	const [placeholder, setPlaceholder] = useState("")

	useEffect(() => {
		console.log(props)

		if (props.placeholder === "int") {
			intPlaceholder()
		} else if (props.placeholder === "float") {
			floatPlaceholder()
		} else {
			setPlaceholder(8)
		}
	}, [])

	const intPlaceholder = () => setPlaceholder(Math.ceil(Math.random() * 9))
	const floatPlaceholder = () => {
		setPlaceholder((Math.random() * 9).toFixed(2))
	}
	return (
		<StyledContainer>
			<StyledLabel>x = </StyledLabel>
			<StyledInput
				type={props.type}
				min={props.min}
				max={props.max}
				value={props.value}
				onChange={props.onChange}
				placeholder={placeholder}
				step={props.placeholder === "float" ? "0.01" : "1"}
			/>
		</StyledContainer>
	)
}

export default NumInput
