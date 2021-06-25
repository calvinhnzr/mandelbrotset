import styled from "styled-components"
import juliaMenge from "../images/zoom/zoom-14-big.jpg"
import MyMath from "../components/math/MyMath"

const StyledImgage = styled.img`
	grid-column: 2 / 8;
	grid-row: 3 / 11;
	object-fit: cover;
	display: block;
	width: 100%;
	height: 100%;
	text-shadow: 0px 0px 25px rgb(0 0 0 / 60%);
`

const StyledText = styled.ul`
	grid-column: 9 / 12;
	grid-row: 3 / 11;
	align-self: center;
	list-style: inherit;
	height: fit-content;
	li {
		font-weight: 100;
		line-height: 1.3;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`

const Juliaset = () => {
	return (
		<>
			<StyledText>
				<li>
					<MyMath>{"z_{n+1}=z_n^2 + c"}</MyMath>
				</li>
				<li>
					Unterscheidet sich von der Mandelbrotmenge nur durch die
					Addition der Konstanten c
				</li>
				<li>
					Bei Mandelbrot: für jeden Bildpunkt andere Konstante, bei
					Juliamenge: für jeden Punkt gleich
				</li>
			</StyledText>
			<StyledImgage src={juliaMenge} alt="Julia Menge" />
		</>
	)
}
export default Juliaset
