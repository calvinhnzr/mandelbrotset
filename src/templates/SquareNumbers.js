import { useState } from "react"
import getWindowDimensions from "../hooks/useWindowDimensions"

import Slider from "../components/Slider"
import Input from "../components/Input"
import Formula from "../components/Formula"
import IterationList from "../components/IterationList"
import styled from "styled-components"

const StyledStart = styled.span`
	background-color: #363738;
	border-radius: 0.2rem;
	padding: 0.5rem;
	font-weight: bold;
`

const SquareNumbers = (props) => {
	const [start, setStart] = useState("")
	const [array, setArray] = useState([])
	const { width } = getWindowDimensions()

	const iterations = 4
	const max = 9
	const min = 0

	const renderInput = () => {
		if (width >= 960) {
			return (
				<Formula color={props.color}>
					<span>x = </span>
					<Input
						type="number"
						min="1"
						max="9"
						placeholder="int"
						value={start}
						onChange={handleChange}
					/>
				</Formula>
			)
		} else {
			return (
				<>
					<Formula color={props.color}>
						<div>
							<span>x = </span>

							<StyledStart>
								{start > 0 ? (
									start
								) : (
									<span style={{ color: "#8e8e8e" }}>0</span>
								)}
							</StyledStart>
						</div>
					</Formula>
					<Slider
						min={min}
						max={max}
						step="1"
						value={start}
						setStart={setStart}
						onChange={handleChange}
					/>
				</>
			)
		}
	}

	const handleChange = (e) => {
		e.preventDefault()
		if (e.target.value.toString().length <= 1) setStart(e.target.value)
		if (e.target.value.toString().length <= 1) {
			setArray([
				Math.pow(e.target.value, 2),
				Math.pow(e.target.value, 4),
				Math.pow(e.target.value, 8),
				Math.pow(e.target.value, 16),
			])
		}
	}

	return (
		<>
			{renderInput()}
			<IterationList
				iterations={iterations}
				startingPoint={start}
				array={array}
				myStyle="sequence"
				color={props.color}
			/>
		</>
	)
}

export default SquareNumbers
