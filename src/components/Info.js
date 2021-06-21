import { useState } from "react"
import { FaInfoCircle } from "react-icons/fa"
import styled from "styled-components"

const StyledInfo = styled.button`
	border: none;
	cursor: pointer;
	border-radius: 50%;
	height: 3.2rem;
	width: 3.2rem;
	bottom: 1.5rem;
	right: 1.5rem;
	z-index: 10;
	position: absolute;
	background-color: #202123;
	z-index: 10;
	&:hover {
		svg {
			color: white;
		}
	}
	svg {
		transition: 0.2s ease-in-out;
		height: 100%;
		width: 100%;
		color: #363738;
		opacity: 0.2;
	}
`

const StyledMenu = styled.div`
	top: 0;
	position: absolute;
	background-color: #202123;
	height: 100%;
	width: 100%;
	z-index: 5;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(12, 1fr);
	gap: 1rem;
	row-gap: 2.25rem;
`

const Info = (props) => {
	// [TODO] send state to Presentation to disable overflow
	const [active, setActive] = useState(false)
	return (
		<>
			{active ? <StyledMenu>{props.children}</StyledMenu> : null}
			<StyledInfo onClick={() => setActive(!active)}>
				<FaInfoCircle />
			</StyledInfo>
		</>
	)
}

export default Info
