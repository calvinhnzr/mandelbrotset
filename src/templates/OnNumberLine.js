import { useState } from "react"
import styled from "styled-components"
import getWindowDimensions from "../hooks/useWindowDimensions"

import Slider from "../components/Slider"
import Input from "../components/Input"
import Formula from "../components/Formula"
import Scene from "../components/three/Scene"
import IterationList from "../components/IterationList"

import MyGrid from "../components/threejs/MyGrid"
import MyAxisX from "../components/threejs/MyAxisX"
import MyMesh from "../components/threejs/MyMesh"

const StyledStart = styled.span`
	background-color: #363738;
	border-radius: 0.2rem;
	padding: 0.5rem;
	font-weight: bold;
`

const OnNumberLine = (props) => {
	const [start, setStart] = useState("")
	const [array, setArray] = useState([])
	const { width } = getWindowDimensions()

	const iterations = 4
	const min = -2
	const max = 2

	const handleChange = (e) => {
		e.preventDefault()

		// set starting point

		if (e.target.value.toString().length <= 5) setStart(e.target.value)

		if (e.target.value.toString().length <= 5)
			setArray([
				Math.pow(e.target.value, 2),
				Math.pow(e.target.value, 4),
				Math.pow(e.target.value, 8),
				Math.pow(e.target.value, 16),
			])
	}

	const renderInput = () => {
		if (width >= 960) {
			return (
				<Formula color={props.color}>
					<span>x = </span>
					<Input
						type="number"
						min="-2"
						max="2"
						placeholder="float"
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
								{start != 0 ? (
									start
								) : (
									<span style={{ color: "#8e8e8e" }}>
										0.00
									</span>
								)}
							</StyledStart>
						</div>
					</Formula>
					<Slider
						min={-2}
						max={2}
						step={0.01}
						value={start}
						setStart={setStart}
						onChange={handleChange}
						className="numberLine"
					/>
				</>
			)
		}
	}

	return (
		<>
			{renderInput()}
			<IterationList
				iterations={iterations}
				startingPoint={start}
				array={array}
				myStyle="numberLine"
				color={props.color}
			/>
			<Scene>
				<MyAxisX null />
				<MyGrid />
				<MyMesh position={[start, 0, 0]} size={0.2} color="#437ef1" />
				{array.map((item, index) => (
					<MyMesh
						key={index}
						position={[item, 0, 0]}
						size={0.1}
						color="red"
					/>
				))}
			</Scene>
		</>
	)
}

export default OnNumberLine
