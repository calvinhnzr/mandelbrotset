import { useState } from "react"
import { useDrag } from "react-use-gesture"
import { FaInfoCircle } from "react-icons/fa"
import styled from "styled-components"

const StyledInfo = styled.button`
	/* hide info card during presentation  */
	/* display: none; */

	border: none;
	cursor: pointer;
	border-radius: 50%;
	height: 2.5rem;
	width: 2.5rem;
	bottom: 2rem;
	right: 1.5rem;
	z-index: 10;
	position: absolute;
	background-color: #51575e;

	opacity: 0.2;
	&:hover {
		opacity: 1;
	}
	svg {
		transition: 0.2s ease-in-out;
		height: 100%;
		width: 100%;
		color: white;
		opacity: 0.5;
	}
`

const StyledMenu = styled.div`
	position: absolute;
	padding: 4rem 5.5rem 4rem 4rem;
	height: calc(100vh - 8rem);
	margin: 4rem 0 4rem 4rem;
	top: 3rem;
	/* bottom: 4rem; */
	left: 0;
	right: 0;
	overflow-y: scroll;
	width: 35rem;
	z-index: 500000000;
	background-color: #51575e;
	/* background-color: #141515; */
	border-radius: 0.5rem;
	box-shadow: 0px 8px 80px rgb(0 0 0 / 20%);
	> * {
		color: white;
		opacity: 0.7;
		font-family: "Roboto", sans-serif !important;
	}
	h1 {
		font-size: 2rem;
		font-weight: bold;
		width: fit-content;
		margin-bottom: 2rem;
		padding-bottom: 0.5rem;
		border-bottom: 0.2rem solid white;
		color: white;
	}
	h2 {
		font-size: 1.5rem;
		font-weight: bold;
		margin: 3rem 0 1rem;
	}
	p {
		font-size: 1.13rem;
		line-height: 1.4;
		margin-bottom: 1rem;
	}
	div {
		margin-top: 2rem;
		a {
			font-family: "Roboto";
			color: white;
		}
	}
	img {
		max-width: 100%;
		height: auto;
		pointer-events: none;
		user-drag: none;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-drag: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
`

const Info = (props) => {
	const [cursor, setCursor] = useState(true)

	const [cardPos, setCardPos] = useState({
		x: 0,
		y: 0,
	})

	const bindCard = useDrag((params) => {
		setCardPos({
			x: params.offset[0],
			y: params.offset[1],
		})
	})

	// [TODO] send state to Presentation to disable overflow
	const [active, setActive] = useState(false)
	return (
		<>
			{active ? (
				<StyledMenu
					{...bindCard()}
					onMouseDown={() => setCursor(false)}
					onMouseUp={() => setCursor(true)}
					style={{
						cursor: cursor ? "grab" : "grabbing",
						position: "absolute",
						top: cardPos.y,
						left: cardPos.x,
					}}>
					{props.children}
				</StyledMenu>
			) : null}
			<StyledInfo
				onClick={() => setActive(!active)}
				style={active ? { opacity: "1" } : null}>
				<FaInfoCircle />
			</StyledInfo>
		</>
	)
}

export default Info
