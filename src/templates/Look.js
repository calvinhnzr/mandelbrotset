import styled from "styled-components"

import numberphile from "../images/numberphile.jpeg"
import numberphile1 from "../images/numberphile1.jpeg"

const Card = styled.div`
	/* display: none; */
	grid-row: 3 / 6;
	grid-column: 2 / 12;
	&:last-of-type {
		grid-row: 7 / 10;
		margin-top: 2rem;
	}
	h6 {
		padding-top: 1.5rem;
		display: block;
		font-size: 1.2rem;
		font-weight: 100;
	}
	@media only screen and (min-width: 960px) {
		grid-row: 3 / 11;
		grid-column: 2 / 7;
		margin-right: 2rem;
		&:last-of-type {
			grid-row: 3 / 11;
			grid-column: 7 / 12;
			margin: 0;
			margin-left: 2rem;
		}
		h6 {
			padding-top: 2rem;
			display: block;
			font-size: 1.5rem;
			font-weight: 100;
		}
	}
`

const YoutubeLink = styled.a`
	transition: 0.1s ease-in-out;
	/* outline: 1px solid green; */
	height: auto;
	display: block;
	box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.4);

	img {
		height: auto;
		width: 100%;
		display: block;
	}
	@media only screen and (min-width: 960px) {
		&:hover {
			transform: translateY(-0.5rem) translateX(-0.5rem);
			box-shadow: 0px 8px 40px rgba(0, 0, 0, 1);
			cursor: pointer;
		}
	}
`

const Look = () => {
	return (
		<>
			<Card>
				<YoutubeLink
					href="https://youtu.be/FFftmWSzgmk"
					target="_blank"
					rel="noopener noreferrer">
					<img
						src={numberphile1}
						alt="What's so special about the Mandelbrot Set? - Numberphile"
					/>
				</YoutubeLink>
				<h6>What's so special about the Mandelbrot Set?</h6>
			</Card>
			<Card>
				<YoutubeLink
					href="https://youtu.be/NGMRB4O922I"
					target="_blank"
					rel="noopener noreferrer">
					<img
						src={numberphile}
						alt="The Mandelbrot Set - Numberphile
"
					/>
				</YoutubeLink>
				<h6>The Mandelbrot Set</h6>
			</Card>
		</>
	)
}

export default Look
