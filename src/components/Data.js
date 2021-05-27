import { useState } from "react"

import Card from "./Card"

import Title from "./Title"
import SubTitle from "./SubTitle"
import Headline from "./Headline"

import Scene from "./three/Scene"

// templates
import SquareNumbers from "../templates/SquareNumbers"

const Data = (props) => {
	const [content, setContent] = useState([
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
				<SquareNumbers
					color="#437EF1"
					handleKeyDown={props.handleKeyDown}
				/>,
			],
		},
		{
			id: 3,
			color: "#EA5B89",
			components: [<Headline value="Am Zahlenstrahl" />, <Scene />],
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
			components: [<Headline value="Form" />],
		},
		{
			id: 7,
			color: "#EA5B89",
			components: [<Headline value="Berechnung" />],
		},
		{
			id: 8,
			color: "#EA5B89",
			components: [<Headline value="Komplexe Zahlen Quadrieren" />],
		},
		{
			id: 9,
			color: "#F6F179",
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
