import { useState, useEffect, useContext } from "react"

import { Context } from "../Context"

import styled from "styled-components"

const StyledInput = styled.input`
	background-color: #363738;
	color: white;
	border: none;
	width: fit-content;
	height: auto;
	border-radius: 0.2rem;
	padding: 0.5rem;
	font-size: 2rem;

	@media only screen and (min-width: 960px) {
		max-width: 100%;
	}
`

const Input = (props) => {
	const [placeholder, setPlaceholder] = useState("")
	const { setInputOnFocus } = useContext(Context)

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
			placeholder={placeholder}
			onFocus={() => setInputOnFocus(true)}
			onBlur={() => setInputOnFocus(false)}
		/>
	)
}

export default Input
