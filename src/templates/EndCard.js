import styled from "styled-components"

const Members = styled.div`
	/* outline: 1px solid white; */
	grid-column: 2 / 12;
	grid-row: 8 / 12;
	justify-self: center;

	ul {
		li {
			text-align: center;
			font-size: 1.3rem;
			font-weight: 100;
			line-height: 1.4;
		}
	}
`

const Title = styled.div`
	/* outline: 1px solid white; */
	grid-column: 2 / 12;
	grid-row: 2 / 5;
	justify-self: center;
	ul {
		li {
			text-align: center;
			font-size: 1.8rem;
			font-weight: 100;
			line-height: 1.4;
			:first-of-type {
				font-size: 3rem;
				font-weight: bold;
				letter-spacing: 1px;
			}
		}
	}
`

const Uni = styled.div``

const EndCard = () => {
	return (
		<>
			<Title>
				<ul>
					<li>Die Mandelbrot-Menge</li>
					<li>Projektarbeit M22</li>
					<li>Praktikum Mathematik 2</li>
				</ul>
			</Title>
			<Uni></Uni>
			<Members>
				<ul>
					<li>Justus Bringer</li>
					<li>Arwin Epackchi</li>
					<li>Angelina Cecilia-Marie Hesse</li>
					<li>Calvin Hinzer</li>
					<li>Justin Huynh</li>
				</ul>
			</Members>
		</>
	)
}

export default EndCard
