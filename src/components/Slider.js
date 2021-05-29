import styled from "styled-components"

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	margin-top: 0.7rem;
	grid-row: 3 / 4;
	grid-column: 6 / 12;

	&.numberLine {
		grid-column: 7 / 12;
	}
`

const StyledSlider = styled.input`
	outline: 1px solid white;
	-webkit-appearance: none;
	width: 100%;
	height: 6px;
	outline: none;
	border-radius: 1rem;
	background: ${(props) => (props.className ? "#191A1B" : null)} !important;
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 1.5rem;
		height: 1.5rem;
		background: #437ef1;
		cursor: pointer;
		border-radius: 50%;
	}
	&::-moz-range-thumb {
		width: 1.5rem;
		height: 1.5rem;
		background: #437ef1;
	}
`

const Slider = (props) => {
	let num = (props.value * 100) / props.max

	return (
		<StyledContainer className={props.className}>
			<StyledSlider
				className={props.className}
				type="range"
				min={props.min}
				max={props.max}
				step={props.step}
				value={props.value ? props.value : 0}
				// onChange={(e) => props.setStart(e.target.value)}
				onChange={props.onChange}
				style={{
					background: `linear-gradient(to right, #437EF1 0%, #437EF1 ${num}%, #191A1B ${num}%, #191A1B 100%)`,
				}}
			/>
		</StyledContainer>
	)
}

export default Slider
