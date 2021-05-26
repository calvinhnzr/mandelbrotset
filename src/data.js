import Title from "./components/Title"
import SubTitle from "./components/SubTitle"
import Headline from "./components/Headline"

export const mydata = {
	cards: [
		{
			id: 1,
			components: [
				<Title value="Mandelbrotset" />,
				<SubTitle value="„Wenn Mathematik mal schön ist.“" />,
			],
		},
		{
			id: 2,
			components: [<Headline value="Zahlen Quadrieren..." />],
			color: "#437EF1",
		},
		{
			id: 3,
			components: [<Headline value="...am Zahlenstrahl" />],
			color: "#437EF1",
		},
		{
			id: 4,
			components: [<Headline value="Komplexe Zahlen" />],
			color: "#EA5B89",
		},
		{
			id: 5,
			components: [<Headline value="Komplexe Zahlenebene" />],
			color: "#EA5B89",
		},
		{
			id: 6,
			components: [<Headline value="Form" />],
			color: "#EA5B89",
		},
		{
			id: 7,
			components: [<Headline value="Berechnung" />],
			color: "#EA5B89",
		},
		{
			id: 8,
			components: [<Headline value="Komplexe Zahlen Quadrieren" />],
			color: "#EA5B89",
		},
		{
			id: 9,
			components: [],
			color: "#F6F179",
		},
		{
			id: 10,
			components: [<Headline value="Was ist ein Fraktal?" />],
			color: "#FFFFFF",
		},
		{
			id: 11,
			components: [
				<Headline value="Was ist die jetzt Mandelbrotmenge?" />,
			],
			color: "#FFFFFF",
		},
	],
}
