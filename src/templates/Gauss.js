import { useState } from "react"
import styled from "styled-components"

import gauss1 from "../images/gauss1.png"
import gauss2 from "../images/gauss2.png"
import gauss3 from "../images/gauss3.png"
import gauss4 from "../images/gauss4.png"

const SubText = styled.p`
	grid-column: 2 / 12;
	grid-row: 8 / 12;
	font-size: 1.2rem;
	font-weight: 100;
	line-height: 1.3;
	@media only screen and (min-width: 960px) {
		/* outline: 1px solid white; */
		grid-column: 8 / 12;
		grid-row: 3 / 11;
		font-size: 1.5rem;
		align-self: center;
	}
`

const Show = styled.div`
	/* outline: 1px solid white; */
	position: relative;
	grid-column: 2 /12;
	grid-row: 3 / 8;
	background-color: #191a1b;
	border-radius: 0.5rem;
	& > img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		transform: translateY(1rem);
	}
	@media only screen and (min-width: 960px) {
		grid-column: 2 /7;
		grid-row: 3 / 11;
		display: flex;
		justify-content: center;
		& > img {
			/* outline: 1px solid white; */
			/* transform: none; */
			object-fit: fill;
			width: auto;
			height: 100%;
		}
	}
`
const Counter = styled.p`
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	z-index: 10;
`

const Buttons = styled.div`
	position: absolute;
	height: 100%;
	bottom: 0;
	left: 0;
	display: flex;
	width: 100%;
`

const Button = styled.button`
	opacity: 0;
	height: 100%;
	width: 50%;
	&:last-of-type {
		right: 0 !important;
	}
`

const Gauss = () => {
	const [current, setcurrent] = useState(0)

	const length = [-2, -1, 1, 2]

	const subText = [
		"Reelle Zahlen auf einem Zahlenstrahl.",
		"Zahlengerade zeigt die Spiegelung von x an der 0.",
		"Zahlenebene zeigt die Drehung von x um 180 Grad um die 0.",
		"Zahlenebene zeigt die Drehung von x um 90 Grad um die 0, equivalent mit der Multiplikation mit i.",
	]
	let max = 4

	const increment = () => (!(current >= max - 1) ? 1 : 0)
	const decrement = () => (!(current <= 0) ? 1 : 0)

	const images = [gauss1, gauss2, gauss3, gauss4]

	return (
		<>
			<Show>
				<img src={images[current]} />
				<Counter>{current + 1} / 4</Counter>
				<Buttons>
					<Button onClick={() => setcurrent(current - decrement())} />
					<Button onClick={() => setcurrent(current + increment())} />
				</Buttons>
			</Show>

			<SubText>{subText[current]}</SubText>
		</>
	)
}

export default Gauss
