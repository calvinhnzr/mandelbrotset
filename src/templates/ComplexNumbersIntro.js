import { useState } from "react"
import styled from "styled-components"

import { useDrag } from "react-use-gesture"

import MyMath from "../components/math/MyMath"

const Text = styled.p`
	grid-column: 2 / 12;
	grid-row: 3 / 4;
	font-size: 1.4rem;
	line-height: 1.2;
	@media only screen and (min-width: 960px) {
		font-size: 1.5rem;
	}
`

const Container = styled.div`
	grid-column: 2 / 12;
	grid-row: 4 / 11;

	@media only screen and (min-width: 960px) {
		width: fit-content;
	}
`

const List = styled.ul`
	list-style: none;
	& > li {
		/* outline: 1px solid white; */
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
		&::after {
			float: right;
			/* outline: 1px solid white; */
			/* content: " nicht lösbar!"; */
			font-weight: 100;
			@media only screen and (min-width: 960px) {
				margin-left: 3rem;
			}
		}
	}
	& > :last-of-type {
		margin-top: 3rem;
		color: #ea5b89;
		&::after {
			display: none;
		}
	}
`

const Card = styled.div`
	height: 25rem;
	width: 20rem;
	margin-left: -2rem;
	margin-top: 2.5rem;
	background-color: #191a1b;
	/* border: 4px solid #363738; */
	z-index: 200;
	box-shadow: 0px 8px 40px rgb(0 0 0 / 20%);
	border-radius: 0.5rem;
	grid-column: 2 / 12;
	grid-row: 4 / 11;
	&:hover {
		cursor: grab;
	}
`

const ComplexNumbersIntro = () => {
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

	return (
		<>
			<Text>Schulmathematik sagt unlösbar, was sagt die Uni?</Text>
			<Card
				{...bindCard()}
				onMouseDown={() => setCursor(false)}
				onMouseUp={() => setCursor(true)}
				style={{
					cursor: cursor ? "grab" : "grabbing",
					position: "absolute",
					top: cardPos.y,
					left: cardPos.x,
				}}
			/>
			<Container>
				<List>
					<li>
						<MyMath>{"\\mathbb{N}:"}</MyMath>
						<span> </span>
						<MyMath>{"x+5=2"}</MyMath>
					</li>
					<li>
						<MyMath>{"\\mathbb{Z}:"}</MyMath>
						<span> </span>
						<MyMath>{"5*x=2"}</MyMath>
					</li>
					<li>
						<MyMath>{"\\mathbb{Q}:"}</MyMath>
						<span> </span>
						<MyMath>{"x*x=2"}</MyMath>
					</li>
					<li>
						<MyMath>{"\\mathbb{R}:"}</MyMath>
						<span> </span>
						<MyMath>{"x*x=-1"}</MyMath>
					</li>
					<li>
						<MyMath>{"\\mathbb{C}:"}</MyMath>
						<span> </span>
						<MyMath>{"i^2=-1"}</MyMath>
					</li>
				</List>
			</Container>
		</>
	)
}
export default ComplexNumbersIntro
