import Card from "./components/Card"

import Title from "./components/Title"
import SubTitle from "./components/SubTitle"
import Headline from "./components/Headline"

// templates
import SquareNumbers from "./templates/SquareNumbers"
import OnNumberLine from "./templates/OnNumberLine"
import Syntax from "./templates/Syntax"
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
				<Headline value="Am Zahlenstrahl" />,
				<OnNumberLine color="#437EF1" />,
			</Card>
			<Card>
				<Headline value="Komplexe Zahlen" />
			</Card>
			<Card>
				<Headline value="Komplexe Zahlenebene" />
			</Card>
			<Card>
				<Headline value="Komplexe Zahlenebene" />
			</Card>
			<Card>
				<Headline value="Form" />
				<Syntax />
			</Card>
			<Card>
				<Headline value="Berechnung" />
			</Card>
			<Card>
				<Headline value="Komplexe Zahlen Quadrieren" />
			</Card>
			<Card>
				<Portrait />
			</Card>
			<Card>
				<Headline value="Was ist ein Fraktal?" />
			</Card>
			<Card>
				<Headline value="Was ist die jetzt Mandelbrotmenge?" />
			</Card>
		</>
	)
}

export default NewData
