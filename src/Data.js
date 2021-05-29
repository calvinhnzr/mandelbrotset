import { useState } from "react"

import Card from "./components/Card"

import Title from "./components/Title"
import SubTitle from "./components/SubTitle"
import Headline from "./components/Headline"

// templates
import SquareNumbers from "./templates/SquareNumbers"
import OnNumberLine from "./templates/OnNumberLine"
import Syntax from "./templates/Syntax"
// import SquareComplexNumbers from "./templates/SquareComplexNumbers"
import Portrait from "./templates/Portrait"

const Data = () => {
	const [content] = useState([
		{
			id: 1,
			color: "#437EF1",
			components: [
				<Title value="Mandelbrotset" />,
				<SubTitle value="„Wenn Mathematik mal&nbsp;schön&nbsp;ist.“" />,
			],
		},
		{
			id: 2,
			color: "#437EF1",
			components: [
				<Headline value="Zahlen Quadrieren" />,
				<SquareNumbers color="#437EF1" />,
			],
		},
		{
			id: 3,
			color: "#437EF1",
			components: [
				<Headline value="Am Zahlenstrahl" />,
				<OnNumberLine color="#437EF1" />,
			],
		},
		{
			id: 4,
			color: "#EA5B89",
			components: [<Headline value="Komplexe Zahlen" />],
		},
		{
			id: 5,
			color: "#EA5B89",
			components: [<Headline value="Komplexe Zahlenebene" />],
		},
		{
			id: 6,
			color: "#EA5B89",
			components: [<Headline value="Form" />, <Syntax />],
		},
		{
			id: 7,
			color: "#EA5B89",
			components: [<Headline value="Berechnung" />],
		},
		{
			id: 8,
			color: "#EA5B89",
			components: [
				<Headline value="Komplexe Zahlen Quadrieren" />,
				// <SquareComplexNumbers color="#EA5B89" />,
			],
		},
		{
			id: 9,
			color: "#F6F179",
			sourse: "https://fineartamerica.com/featured/benoit-mandelbrot-emilio-segre-visual-archivesamerican-institute-of-physicsscience-photo-library.html",
			components: <Portrait />,
		},
		{
			id: 10,
			color: "#FFFFFF",
			components: [<Headline value="Was ist ein Fraktal?" />],
		},
		{
			id: 11,
			color: "#FFFFFF",
			components: [
				<Headline value="Was ist die jetzt Mandelbrotmenge?" />,
			],
		},
	])
	return (
		<>
			{content.map((item, index) => {
				return <Card key={index + 1}>{item.components}</Card>
			})}
		</>
	)
}

export default Data
