import { useState, useEffect } from "react"
import styled from "styled-components"

const StyledInput = styled.input`
	background-color: #363738;
	border: none;
	border-radius: 0.2rem;
	height: auto;
	max-width: 6rem;
	/* min-width: 4rem; */
	padding: 0.5rem;
	font-family: "Roboto";
	font-size: 1.6rem;
	color: white;
`

const Input = (props) => {
	const [placeholder, setPlaceholder] = useState("")

	useEffect(() => {
		if (props.placeholder === "int") {
			intPlaceholder()
		} else if (props.placeholder === "float") {
			floatPlaceholder()
		} else {
			setPlaceholder(8)
		}
	}, [props.placeholder])

	const intPlaceholder = () => setPlaceholder(Math.ceil(Math.random() * 9))
	const floatPlaceholder = () => {
		setPlaceholder((Math.random() * 2).toFixed(2))
	}

	return (
		<StyledInput
			type={props.type}
			min={props.min}
			max={props.max}
			step={props.placeholder === "float" ? "0.01" : "1"}
			value={props.value}
			onChange={props.onChange}
			onFocus={() =>
				window.removeEventListener("keydown", props.handleKeyDown)
			}
			onBlur={() =>
				window.addEventListener("keydown", props.handleKeyDown)
			}
			placeholder={placeholder}
		/>
	)
}

export default Input
