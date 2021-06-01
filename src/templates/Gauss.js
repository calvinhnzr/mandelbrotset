import { useState } from "react"
import styled from "styled-components"

import gauss1 from "../images/gauss1.png"
import gauss2 from "../images/gauss2.png"
import gauss3 from "../images/gauss3.png"
import gauss4 from "../images/gauss4.png"

import Gallery from "../components/Gallery"

const SubText = styled.p`
	grid-column: 2 / 12;
	grid-row: 8 / 12;
	font-size: 1.2rem;
	font-weight: 100;
	line-height: 1.3;
	@media only screen and (min-width: 960px) {
		grid-column: 8 / 12;
		grid-row: 3 / 11;
		font-size: 1.5rem;
		align-self: center;
	}
`

const Gauss = () => {
	const [current, setcurrent] = useState(0)

	const subText = [
		"Reelle Zahlen auf einem Zahlenstrahl.",
		"Zahlengerade zeigt die Spiegelung von x an der 0.",
		"Zahlenebene zeigt die Drehung von x um 180 Grad um die 0.",
		"Zahlenebene zeigt die Drehung von x um 90 Grad um die 0, equivalent mit der Multiplikation mit i.",
	]
	const max = 4
	const images = [gauss1, gauss2, gauss3, gauss4]

	return (
		<>
			<Gallery
				current={current}
				images={images}
				setcurrent={setcurrent}
				max={max}
			/>
			<SubText>{subText[current]}</SubText>
		</>
	)
}

export default Gauss
