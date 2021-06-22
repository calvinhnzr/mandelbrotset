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
	grid-column: 2 / 12;
	grid-row: 8 / 12;
	position: relative;
	display: flex;

	@media only screen and (min-width: 960px) {
		align-items: center;
		grid-column: 8 / 12;
		grid-row: 3 / 11;
	}
`

const Text = styled.p`
	font-size: 1.2rem;
	font-weight: 100;
	line-height: 1.3;

	@media only screen and (min-width: 960px) {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`

const HiddenContent = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	flex-direction: column;
	& > span {
		color: white;
		font-size: 1.1rem;
		margin: 0.5rem 0;
	}
	@media only screen and (min-width: 960px) {
		font-size: 1.5rem;
		& > span {
			font-size: 1.5rem !important;
		}
	}
`

const Calculation = () => {
	const [current, setcurrent] = useState(0)
	const images = [calc1, calc2, calc3, calc4, calc5, calc4, calc4]
	const max = images.length
	// fix mathjax does not load
	const shown = { opacity: "1" }
	const hidden = { opacity: "0" }

	return (
		<>
			<Gallery
				current={current}
				images={images}
				setcurrent={setcurrent}
				max={max}
			/>
			<SubText>
				<HiddenContent style={current === 0 ? shown : hidden}>
					<Text>
						Eindeutig definiert durch x-Wert und y-Wert. Gibt es
						andere Möglichkeiten?
					</Text>
					<MyMath>{"z=a+b*i"}</MyMath>
					<MyMath>{"z=3+2*i"}</MyMath>
				</HiddenContent>
				<HiddenContent style={current === 1 ? shown : hidden}>
					<Text>Wie können wir die Länge des Vektors berechnen?</Text>
				</HiddenContent>
				<HiddenContent style={current === 2 ? shown : hidden}>
					<Text>Länge? Pythagoras!</Text>
					<MyMath>{"r=\\sqrt{3^2+2^2}"}</MyMath>
					<MyMath>{"r=3.6"}</MyMath>
				</HiddenContent>
				<HiddenContent style={current === 3 ? shown : hidden}>
					<Text>G bekannt, A bekannt, rechtwinklig.</Text>
					<MyMath>{"tan(G/A)"}</MyMath>
					<MyMath>{"\\Rightarrow tan(\\varphi)"}</MyMath>
					<MyMath>{"\\Rightarrow tan(3/2)"}</MyMath>
				</HiddenContent>
				<HiddenContent style={current === 4 ? shown : hidden}>
					<Text>
						Grafisch verstanden.
						<br />
						Mathematische Darstellung?
					</Text>

					<MyMath>{"r=\\sqrt{3^2+2^2}"}</MyMath>
					<MyMath>{"\\varphi=tan^{(-1)}(2/3)"}</MyMath>
				</HiddenContent>
				<HiddenContent style={current === 5 ? shown : hidden}>
					<MyMath>{"cos(\\varphi)=A/H"}</MyMath>
					<MyMath>{"\\Rightarrow cos(\\varphi)*H=A"}</MyMath>
					<MyMath>{"\\Leftrightarrow cos(\\varphi)*r=Re(z)"}</MyMath>
					<br />
					<MyMath>{"sin(\\varphi)=G/H"}</MyMath>
					<MyMath>{"\\Rightarrow sin(\\varphi)*H=G"}</MyMath>
					<MyMath>{"\\Leftrightarrow sin(\\varphi)*r=Im(z)"}</MyMath>
				</HiddenContent>
				<HiddenContent style={current === 6 ? shown : hidden}>
					<MyMath>{"z=r*cos(\\varphi)+i*r*sin(\\varphi)"}</MyMath>
					<MyMath>{"z=r*(cos(\\varphi)+i*sin(\\varphi))"}</MyMath>
					<MyMath>{"\\Rightarrow r*cis(\\varphi)"}</MyMath>
				</HiddenContent>
			</SubText>
		</>
	)
}

export default Calculation
