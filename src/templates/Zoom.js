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
				style={{
					transform: interpolate([rot, scale], trans),
					backgroundImage: `url(${cards[i]})`,
				}}
			/>
		</animated.div>
	))
}

const Zoom = () => {
	const images = [
		zoom1,
		zoom2,
		zoom3,
		zoom4,
		zoom5,
		zoom6,
		zoom7,
		zoom8,
		zoom9,
		zoom10,
		zoom11,
		zoom12,
		zoom13,
		zoom14,
		zoom15,
		zoom16,
		normal,
	]

	return <>zoom</>
}

export default Zoom
