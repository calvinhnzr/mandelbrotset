import { useState } from "react"
import { useDrag } from "react-use-gesture"
import { useSprings, animated, to as interpolate } from "react-spring"
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
	zoom16,
	zoom15,
	zoom14,
	zoom13,
	zoom12,
	zoom11,
	zoom10,
	zoom9,
	zoom8,
	zoom7,
	zoom6,
	zoom5,
	zoom4,
	zoom3,
	zoom2,
	zoom1,
	normal,
]

const StyledContainer = styled.div`
	grid-row: 1 / 13;
	grid-column: 1 / 13;
	position: relative;
	overflow: hidden;
	> div {
		/* outline: 1px solid white; */
		position: absolute;
		will-change: transform;
		display: flex;
		align-items: center;
		justify-content: center;
		touch-action: none;
		margin: auto;
		left: 0;
		right: 0;
		bottom: 5rem;
		/* card */
		width: fit-content;
		/* padding: 1rem; */
		> div {
			background-color: #fdf7ea;
			/* background-color: #191a1b; */
			padding: 0.7rem;
			padding-bottom: 3rem;
			background-size: 100%;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
			width: 38rem;
			height: 30rem;
			will-change: transform;
			box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4),
				0 10px 10px -10px rgba(50, 50, 73, 0.3);
			box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.1),
				0 10px 10px -10px rgba(50, 50, 73, 0.1);
			box-shadow: none;
			box-shadow: 0px 8px 30px rgb(0 0 0 / 30%);
			img {
				width: 100%;
				height: 100%;
				pointer-events: none;
				user-drag: none;
				user-select: none;
				-moz-user-select: none;
				-webkit-user-drag: none;
				-webkit-user-select: none;
				-ms-user-select: none;
			}
			p {
				line-height: 1.8;
				color: #333;
				/* color: white; */
				/* opacity: 0.5; */
				position: relative;
				span {
					position: absolute;
					right: 0;
				}
			}
		}
	}
`

const Zoom = (props) => {
	// These two are just helpers, they curate spring data, values that are later being interpolated into css
	const to = (i) => ({
		x: 0,
		y: i * -4,
		scale: 1,
		rot: -10 + Math.random() * 20,
		delay: i * 100,
	})
	const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
	// This is being used down there in the view, it interpolates rotation and scale into a css transform
	const trans = (r, s) =>
		`perspective(1500px) rotateX(30deg) rotateY(${
			r / 10
		}deg) rotateZ(${r}deg) scale(${s})`

	function Deck() {
		const [cursor, setCursor] = useState(true)
		const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out

		const [props, set] = useSprings(cards.length, (i) => ({
			...to(i),
			from: from(i),
		})) // Create a bunch of springs using the helpers above
		// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
		const bind = useDrag(
			({
				args: [index],
				down,
				movement: [mx],
				direction: [xDir],
				velocity,
			}) => {
				const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
				const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
				if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
				set((i) => {
					if (index !== i) return // We're only interested in changing spring-data for the current spring
					const isGone = gone.has(index)
					const x = isGone
						? (200 + window.innerWidth) * dir
						: down
						? mx
						: 0 // When a card is gone it flys out left or right, otherwise goes back to zero
					const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
					const scale = down ? 1.1 : 1 // Active cards lift up a bit
					return {
						x,
						rot,
						scale,
						delay: undefined,
						config: {
							friction: 50,
							tension: down ? 800 : isGone ? 200 : 500,
						},
					}
				})
				if (!down && gone.size === cards.length)
					setTimeout(() => gone.clear() || set((i) => to(i)), 600)
			}
		)
		// Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
		return props.map(({ x, y, rot, scale }, i) => (
			<animated.div key={i} style={{ x, y }}>
				{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
				<animated.div
					{...bind(i)}
					onMouseDown={() => setCursor(false)}
					onMouseUp={() => setCursor(true)}
					style={{
						transform: interpolate([rot, scale], trans),
						cursor: cursor ? "grab" : "grabbing",
					}}>
					<img src={cards[i]} />
					<p>
						{cards.length - i}. <span>25. Juni 2021</span>
					</p>
				</animated.div>
			</animated.div>
		))
	}

	return (
		<StyledContainer>
			<Deck />
		</StyledContainer>
	)
}

export default Zoom
