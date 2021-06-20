import Card from "./components/Card"

import Title from "./components/Title"
import SubTitle from "./components/SubTitle"
import Headline from "./components/Headline"

// templates
import SquareNumbers from "./templates/SquareNumbers"
import OnNumberLine from "./templates/OnNumberLine"
import ComplexNumbersIntro from "./templates/ComplexNumbersIntro"
import Gauss from "./templates/Gauss"
import Form from "./templates/Form"
import Calculation from "./templates/Calculation"
import Mandelbrot from "./templates/Mandelbrot"
import Fractal from "./templates/Fractal"
import Visual from "./templates/Visual"
import Juliaset from "./templates/Juliaset"
import RealUse from "./templates/RealUse"
import Look from "./templates/Look"

import Portrait from "./templates/Portrait"

const NewData = () => {
	return (
		<>
			<Card>
				<Title value="Mandelbrotset" />
				<SubTitle value="„Wenn Mathematik mal&nbsp;schön&nbsp;ist.“" />
			</Card>
			<Card>
				<Headline value="Zahlen Quadrieren" />
				<SquareNumbers color="#437EF1" />
			</Card>
			<Card>
				<Headline value="Am Zahlenstrahl" />
				<OnNumberLine color="#437EF1" />
			</Card>
			<Card>
				<Headline value="Komplexe Zahlen" />
				<ComplexNumbersIntro />
			</Card>
			<Card>
				<Headline value="Komplexe Zahlenebene" />
				<Gauss />
			</Card>
			<Card>
				<Headline value="Form" />
				<Form />
			</Card>
			<Card>
				<Headline value="Umrechnung" />
				<Calculation />
			</Card>
			<Card>
				<Portrait />
			</Card>
			<Card>
				<Headline value="Mandelbrotmenge (WIP)" />
				<Mandelbrot />
			</Card>
			<Card>
				<Headline value="Julia-Menge (WIP)" />
				<Juliaset />
			</Card>
			<Card>
				<Headline value="Was ist ein Fraktal?" />
				<Fractal />
			</Card>
			<Card>
				<Headline value="Visualisierung und Implementierung (WIP)" />
				<Visual />
			</Card>
			<Card>
				<Headline value="Realanwendungen" />
				<RealUse />
			</Card>
			<Card>
				<Headline value="Ausblick" />
				<Look />
			</Card>
			<Card>
				<Title value="Vielen Dank für Ihre Aufmerksamkeit!" />
				<SubTitle value="Fragen?" />
			</Card>
		</>
	)
}

export default NewData
