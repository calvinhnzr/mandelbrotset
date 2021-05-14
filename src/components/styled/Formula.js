import styled from "styled-components"

import Input from "./Input"

const StyledFormula = styled.div`
	margin-top: 2.5rem;
	display: flex;
	align-items: center;
	width: 100%;
	& div {
		position: relative;
		&::after {
			content: "2";
			position: absolute;
			top: -0.8rem;
			right: -1rem;
			font-family: "Roboto";
			font-size: 1.4rem;

			font-weight: bold;
			color: #ea5b89;
		}
	}

	& span {
		width: fit-content;
		font-family: "Roboto";
		font-size: 1.2rem;
		font-size: 1.6rem;
		font-weight: 100;
		letter-spacing: 1px;
		color: white;
		margin: 0 0.5rem;
	}
`

const Formula = (props) => {
	return (
		<StyledFormula>
			<span style={{ fontWeight: "bold" }}>x = </span>
			<div>
				<span>(</span>
				<Input
					type="number"
					min="-2"
					max="2"
					placeholder="float"
					value={props.re}
					onChange={(e) => props.setRe(e.target.value)}
					handleKeyDown={props.handleKeyDown}
				/>
				<span>+</span>
				<Input
					type="number"
					min="-2"
					max="2"
					placeholder="float"
					value={props.im}
					onChange={(e) => props.setIm(e.target.value)}
					handleKeyDown={props.handleKeyDown}
				/>
				<span>i )</span>
			</div>
		</StyledFormula>
	)
}

export default Formula
