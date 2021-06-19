import { useState } from "react"
import styled from "styled-components"
import Gallery from "../components/Gallery"

import fraktalantennen from "../images/realuse/fraktalantennen.png"
import imageCompression from "../images/realuse/lenna2.gif"
import keyExchange from "../images/realuse/key-exchange.jpg"

const images = [fraktalantennen, imageCompression, keyExchange]

const List = styled.ul`
	/* outline: 1px solid white; */
	grid-column: 8 / 12;
	grid-row: 3 / 11;
	align-self: center;
	list-style: inherit;
	h5 {
		font-size: 1.8rem;
		/* font-weight: 100; */
		line-height: 1.3;
		margin-bottom: 1.5rem;
	}
	li {
		color: aliceblue;
		font-size: 1.5rem;
		line-height: 1.3;
		font-weight: 100;
		margin-bottom: 0.5rem;
	}
`

const RealUse = () => {
	const [current, setcurrent] = useState(0)

	const content = [
		<List>
			<h5>Fraktalantenne</h5>
			<li>fraktale Strukturen</li>
			<li>breitbandige Sende- und Empfangsqualität</li>
			<li>für Bluetooth, WLAN, GSM, GPS</li>
		</List>,
		<List>
			<h5>Bildkompression</h5>
			<li>Wiederkehrende Strukturen</li>
			<li>Itertiertes Funktionensystem</li>
			<li>Rekonstruktion des Originalbildes</li>
		</List>,
		<List>
			<h5>Mandelbrot- und Julia-Menge Schlüsseltausch</h5>
			<li>
				Verschlüsselung auf Basis von Diffie-Hellman mit Mandelbrot und
				Julia-Menge
			</li>
			<li>Bessere Verschlüsselung mit der gleichen Leistung</li>
		</List>,
	]

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
			{content[current]}
		</>
	)
}
export default RealUse
