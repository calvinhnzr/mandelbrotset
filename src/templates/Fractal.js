import { useState } from "react"
import styled from "styled-components"
import Gallery from "../components/Gallery"

import tree from "../images/fractals/tree.jpg"
import cloud from "../images/fractals/cloud.jpg"
import romanesco from "../images/fractals/romanesco.jpg"

const images = [tree, cloud, romanesco]

const List = styled.ul`
	/* outline: 1px solid white; */

	list-style: inherit;
	margin-bottom: 3rem;
	&:last-of-type {
		margin-bottom: 0;
	}
	h5 {
		font-size: 1.8rem;
		/* font-weight: 100; */
		line-height: 1.3;
		margin-bottom: 1rem;
	}
	li {
		color: aliceblue;
		font-size: 1.5rem;
		line-height: 1.3;
		font-weight: 100;
		margin-bottom: 0.5rem;
	}
`

const Container = styled.div`
	grid-column: 8 / 12;
	grid-row: 3 / 11;
	align-self: center;
`

const Fractal = () => {
	const [current, setcurrent] = useState(0)

	const max = images.length

	return (
		<>
			<Gallery
				current={current}
				images={images}
				setcurrent={setcurrent}
				max={max}
				className="realuse"
			/>
			<Container>
				<List>
					<h5>Grob erklärt</h5>
					<li>Unendlich zerfranzt</li>
					<li>Siehe Wolken, Bäume, Schneeflocken</li>
					<li>Sierpinski Dreieck</li>
					<li>Beispiel Romanesco</li>
				</List>
				<List>
					<h5>Genauer erklärt</h5>
					<li>“Ausgedehnte Objekte”</li>
					<li>gebrochene räumliche Dimension</li>
					<li>auch “fraktale Dimension” genannt</li>
				</List>
			</Container>
		</>
	)
}

export default Fractal
