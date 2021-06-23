import { useState } from "react"
import { useDrag } from "react-use-gesture"
import styled from "styled-components"

import zoom1 from "../images/zoom/zoom-1.jpg"
import zoom2 from "../images/zoom/zoom-2.jpg"
import zoom3 from "../images/zoom/zoom-3.jpg"
import zoom4 from "../images/zoom/zoom-4.jpg"
import zoom5 from "../images/zoom/zoom-5.jpg"
import zoom6 from "../images/zoom/zoom-6.jpg"
import zoom7 from "../images/zoom/zoom-7.jpg"
import zoom8 from "../images/zoom/zoom-8.jpg"
import zoom9 from "../images/zoom/zoom-9.jpg"
import zoom10 from "../images/zoom/zoom-10.jpg"
import zoom11 from "../images/zoom/zoom-11.jpg"
import zoom12 from "../images/zoom/zoom-12.jpg"
import zoom13 from "../images/zoom/zoom-13.jpg"
import zoom14 from "../images/zoom/zoom-14.jpg"
import zoom15 from "../images/zoom/zoom-15.jpg"
import zoom16 from "../images/zoom/zoom-16.jpg"
import normal from "../images/zoom/zoom-normal.jpg"

const cards = [
	// zoom1,
	// zoom2,
	// zoom3,
	// zoom4,
	// zoom5,
	// zoom6,
	// zoom7,
	// zoom8,
	// zoom9,
	// zoom10,
	// zoom11,
	// zoom12,
	// zoom13,
	// zoom14,
	// zoom15,
	// zoom16,
	normal,
]

const StyledDeck = styled.div`
	outline: 1px solid green;
	width: fit-content;
	position: relative;
	will-change: transform;
	width: 40rem;
	height: 100%;
	margin: 0 auto;
`

const Deck = (props) => {
	return <StyledDeck>{props.children}</StyledDeck>
}

const Card = (props) => {
	return <StyledCard>{props.children}</StyledCard>
}

const StyledContainer = styled.div`
	outline: 1px solid red;
	grid-column: 1 / 13;
	grid-row: 2 / 12;
`

const StyledCard = styled.div`
	z-index: 200;
	background-color: white;
	border-radius: 0.3rem;
	width: 40rem;
	height: 30rem;
	margin: auto;
	position: absolute;
	top: 0;
	bottom: 0;

	will-change: transform;
	transform: translate3d(0px, -20px, 0px);
	&:hover {
		cursor: grab;
	}
	> img {
		object-fit: cover;
		padding: 1rem 1rem 3rem;
		width: 100%;
		height: 100%;
	}
	> div {
		display: none;
		height: 1rem;
		padding: 1rem;
		background-color: white;
		p {
			color: #333;
		}
	}
`

const MyCard = styled.div`
	width: 40rem;
	height: 30rem;
	margin-left: -2.5rem;
	margin-top: 7rem;
	background-color: #fff5e0;
	/* border: 4px solid #363738; */
	will-change: transform;
	transform: perspective(1500px) rotateX(30deg) rotateY(-0.195659deg)
		rotateZ(-1.95659deg) scale(1);
	z-index: 200;
	box-shadow: 0px 8px 40px rgb(0 0 0 / 20%);
	border-radius: 0.5rem;
	grid-column: 2 / 12;
	grid-row: 4 / 11;
	&:hover {
		cursor: grab;
	}
`

const Zoom = () => {
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
			<StyledContainer>
				<Deck>
					<MyCard
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

					{/* {cards.map((value, index) => {
						return (
				<Card
					{...bindCard()}
					onMouseDown={() => setCursor(false)}
					onMouseUp={() => setCursor(true)}
					style={{
						cursor: cursor ? "grab" : "grabbing",
						position: "absolute",
						top: cardPos.y,
						left: cardPos.x,
					}}>
					<img src={value} />
					<div>
						<p>Mandelbrot 12. Juni 2021</p>
					</div>
				</Card>
				)
					})} */}
				</Deck>
			</StyledContainer>
		</>
	)
}

export default Zoom
