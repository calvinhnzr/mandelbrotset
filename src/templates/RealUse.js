import { useState } from "react"
import styled from "styled-components"
import Gallery from "../components/Gallery"

import fraktalantennen from "../images/realuse/fraktalantennen.jpg"
import imageCompression from "../images/realuse/lenna.jpg"
import keyExchange from "../images/realuse/key-exchange-w.png"

const images = [keyExchange, imageCompression, fraktalantennen]

const Table = styled.table`
	/* outline: 1px solid white; */
	grid-row: 7 / 12;
	grid-column: 2 / 12;
	border-spacing: 1rem;
	width: 100%;
	table-layout: fixed;
	margin-left: -1rem;
	tr {
		white-space: nowrap;

		td:first-of-type {
			/* text-align: right; */
		}
		th,
		td {
			/* outline: 1px solid white; */
			font-size: 1.5rem;
			will-change: auto;
			vertical-align: middle;
			font-weight: 100;
		}
		th {
			font-weight: 400;
			color: coral;
		}
	}
`

const List = styled.ul`
	/* outline: 1px solid white; */
	grid-column: 2 / 12;
	grid-row: 8 / 11;

	list-style: inherit;
	h5 {
		font-size: 1.5rem;
		font-weight: bold;
		line-height: 1.3;
		margin-bottom: 1.5rem;
		color: coral;
	}
	li {
		color: aliceblue;
		font-size: 1.2rem;
		line-height: 1.3;
		font-weight: 100;
		margin-bottom: 0.5rem;
	}

	@media only screen and (min-width: 960px) {
		/* grid-column: 8 / 12;
		grid-row: 3 / 11;
		align-self: center; */
		/* outline: 1px solid white; */
		grid-column: 2 / 9;
		grid-row: 3 / 7;
		align-self: center;
		h5 {
			font-size: 1.8rem;
		}

		li {
			font-size: 1.5rem;
		}
	}
`

const RealUse = () => {
	const [current, setcurrent] = useState(0)

	const content = [
		<List>
			<h5>Mandelbrot- und Julia-Menge Schlüsseltausch</h5>
			<li>
				Verschlüsselung auf Basis von Diffie-Hellman mit Mandelbrot und
				Julia-Menge
			</li>
			<li>
				Bei der gleichen Schlüsselgröße mehr mögliche Variationen, wie
				der Schlüssel aussieht im Vergleich zu Diffie-Hellman
			</li>
		</List>,
		<List>
			<h5>Bildkompression</h5>
			<li>Wiederkehrende Strukturen</li>
			<li>Itertiertes Funktionensystem</li>
			<li>Rekonstruktion des Originalbildes</li>
		</List>,
		<List>
			<h5>Fraktalantenne</h5>
			<li>fraktale Strukturen</li>
			<li>breitbandige Sende- und Empfangsqualität</li>
			<li>für Bluetooth, WLAN, GSM, GPS</li>
		</List>,
	]

	const max = images.length

	return (
		<>
			<Table>
				<thead>
					<tr>
						<th>Key Size</th>
						<th>Fractals Keyspace</th>
						<th>DH (primes) keyspace</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>8-bit</td>
						<td>256</td>
						<td>54</td>
					</tr>
					<tr>
						<td>16-bit</td>
						<td>25536</td>
						<td>6542</td>
					</tr>
					<tr>
						<td>32-bit</td>
						<td>4294967296</td>
						<td>193635250</td>
					</tr>
					<tr>
						<td>64-bit</td>
						<td>18446744073709551616</td>
						<td>415828533893661771</td>
					</tr>
				</tbody>
			</Table>
			<List>
				<h5>Mandelbrot- und Julia-Menge Schlüsseltausch</h5>
				<li>
					Verschlüsselung auf Basis von Diffie-Hellman mit Mandelbrot
					und Julia-Menge
				</li>
				<li>
					Bei der gleichen Schlüsselgröße mehr mögliche Variationen,
					wie der Schlüssel aussieht im Vergleich zu Diffie-Hellman
				</li>
			</List>
			{/* <Gallery
				current={current}
				images={images}
				setcurrent={setcurrent}
				max={max}
				className="realuse"
			/>
			{content[current]} */}
		</>
	)
}
export default RealUse
