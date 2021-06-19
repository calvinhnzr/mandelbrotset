import styled from "styled-components"

const Show = styled.div`
	position: relative;
	grid-column: 2 /12;
	grid-row: 3 / 8;
	border-radius: 0.5rem;
	overflow: hidden;
	background-color: #191a1b;

	&.realuse {
		border-radius: 0;
		box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.4);
	}
	@media only screen and (min-width: 960px) {
		grid-column: 2 /7;
		grid-row: 3 / 11;
		display: flex;
		justify-content: center;
	}
`

const Image = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	&.gauss {
		transform: translateY(1rem);
	}
	@media only screen and (min-width: 960px) {
		object-fit: fill;
		width: auto;
		height: 100%;
		&.realuse {
			object-fit: cover;

			/* object-fit: contain; */
			width: 100%;
			height: auto;
		}
	}
`

const Counter = styled.p`
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	z-index: 10;
`

const Buttons = styled.div`
	position: absolute;
	height: 100%;
	bottom: 0;
	left: 0;
	display: flex;
	width: 100%;
`

const Button = styled.button`
	opacity: 0;
	height: 100%;
	width: 50%;
	cursor: pointer;
	&:last-of-type {
		right: 0 !important;
	}
`

const Gallery = (props) => {
	const increment = () => (!(props.current >= props.max - 1) ? 1 : 0)
	const decrement = () => (!(props.current <= 0) ? 1 : 0)

	return (
		<Show className={props.className}>
			<Image
				src={props.images[props.current]}
				className={props.className}
			/>
			<Counter>
				{props.current + 1} / {props.max}
			</Counter>
			<Buttons>
				<Button
					onClick={() =>
						props.setcurrent(props.current - decrement())
					}
				/>
				<Button
					onClick={() =>
						props.setcurrent(props.current + increment())
					}
				/>
			</Buttons>
		</Show>
	)
}
export default Gallery
