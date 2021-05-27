import { useState } from "react"
import { FaInfoCircle } from "react-icons/fa"
import styled from "styled-components"

const StyledInfo = styled.button`
	border: none;
	border-radius: 50%;
	height: 3.2rem;
	width: 3.2rem;
	bottom: 1.5rem;
	right: 1.5rem;
	z-index: 10;
	position: fixed;
	background-color: #191a1b;
	z-index: 10;
	svg {
		height: 100%;
		width: 100%;
		color: #363738;
	}
`

const StyledMenu = styled.div`
	top: 0;
	position: fixed;
	outline: 1px solid white;
	background: rgba(0, 0, 0, 0.8);
	height: 100vh;
	width: 100%;
	z-index: 5;
`

const Info = (props) => {
	// [TODO] send state to Presentation to disable overflow
	const [active, setActive] = useState(false)
	return (
		<>
			{active ? <StyledMenu /> : null}
			<StyledInfo onClick={() => setActive(!active)}>
				{props.children}
				<FaInfoCircle />
			</StyledInfo>
		</>
	)
}

export default Info
