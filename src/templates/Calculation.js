import { useState } from "react"
import styled from "styled-components"

import calc1 from "../images/calc/calc1.png"
import calc2 from "../images/calc/calc2.png"
import calc3 from "../images/calc/calc3.png"
import calc4 from "../images/calc/calc4.png"
import calc5 from "../images/calc/calc5.png"

import Gallery from "../components/Gallery"
import MyMath from "../components/math/MyMath"

const SubText = styled.div`
	/* outline: 1px solid white; */
	grid-column: 2 / 12;
	grid-row: 8 / 12;
	display: flex;
	flex-direction: column;
	& > span {
		color: white;
		font-size: 1.1rem;
		margin: 0.5rem 0;
	}
	@media only screen and (min-width: 960px) {
		grid-column: 8 / 12;
		grid-row: 3 / 11;
		align-self: center;
		& > span {
			font-size: 1.5rem;
		}
	}
`

const Text = styled.p`
	font-size: 1.2rem;
	font-weight: 100;
	line-height: 1.3;
	@media only screen and (min-width: 960px) {
		font-size: 1.5rem;
	}
`

const Calculation = () => {
	const [current, setcurrent] = useState(0)
	const images = [calc1, calc2, calc3, calc4, calc5, calc4]
	const max = images.length

	const subText = [
		[
			<Text>
				Eindeutig definiert durch x-Wert und y-Wert. Gibt es andere
				Möglichkeiten?
			</Text>,
			<MyMath>{"z=a+b*i"}</MyMath>,
			<MyMath>{"z=3+2*i"}</MyMath>,
		],
		[<Text>Wie können wir die Länge des Vektors berechnen?</Text>],
		[
			<Text>Länge? Pythagoras!</Text>,
			<MyMath>{"r=\\sqrt{3^2+3^2}"}</MyMath>,
			<MyMath>{"r=3.6"}</MyMath>,
		],
		[
			<Text>G bekannt, A bekannt, rechtwinklig.</Text>,
			<MyMath>{"tan( G/A )"}</MyMath>,
			<MyMath>{"=tan(\\varphi)"}</MyMath>,
			<MyMath>{"=tan(3/2)"}</MyMath>,
		],
		[
			<Text>Grafisch verstanden.</Text>,
			<Text>Mathematische Darstellung?</Text>,
			<MyMath>{"r=\\sqrt{3^2+2^2}"}</MyMath>,
			<MyMath>{"\\varphi=tan^{(-1)}*(2/3)"}</MyMath>,
		],
		[
			<MyMath>{"cos(\\varphi)=A/H"}</MyMath>,
			<MyMath>{"cos(\\varphi)*H=A"}</MyMath>,
			<MyMath>{"cos(\\varphi)*r=Re(z)"}</MyMath>,
			<br />,
			<MyMath>{"sin(\\varphi)=G/H"}</MyMath>,
			<MyMath>{"sin(\\varphi)*H=G"}</MyMath>,
			<MyMath>{"sin(\\varphi)*r=Im(z)"}</MyMath>,
		],
		[
			<MyMath>{"z=r*cos(\\varphi)+i*r*sin(\\varphi)"}</MyMath>,
			<MyMath>{"z=r*(cos(\\varphi)+i*r*sin(\\varphi))"}</MyMath>,
			<MyMath>{"=r*cis(\\varphi)"}</MyMath>,
		],
	]

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

export default Calculation
