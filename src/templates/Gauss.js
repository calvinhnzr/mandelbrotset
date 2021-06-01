import { Line, Html, CubicBezierLine } from "@react-three/drei"
import { useState } from "react"

import Scene from "../components/three/Scene"
import MyAxisX from "../components/three/MyAxisX"
import MyAxisY from "../components/three/MyAxisY"
import styled from "styled-components"

const StyledNumAxis = styled.span`
	font-family: "Roboto";
	font-size: "1rem";
	color: #ea5b89;
`
const Button = styled.button`
	/* grid-column: 2 / 12; */
	grid-column: 2 / 7;
	grid-row: 7 / 8;
	/* opacity: 0; */
	z-index: 1;
	&:last-of-type {
		grid-column: 7 / 12;
	}
`

const SubText = styled.p`
	/* outline: 1px solid white; */
	grid-column: 2 / 12;
	grid-row: 8 / 12;
	font-size: 1.2rem;
	font-weight: 100;
	line-height: 1.3;
`

const Counter = styled.p`
	grid-column: 10 / 12;
	grid-row: 7 / 8;

	z-index: 1;
`

const Gauss = () => {
	const [current, setcurrent] = useState(0)

	const length = [-2, -1, 1, 2]

	const subText = [
		"Reelle Zahlen auf einem Zahlenstrahl.",
		"Zahlengerade zeigt die Spiegelung von x an der 0.",
		"Zahlenebene zeigt die Drehung von x um 180 Grad um die 0.",
		"Zahlenebene zeigt die Drehung von x um 90 Grad um die 0, equivalent mit der Multiplikation mit i.",
	]
	let max = 4

	const increment = () => (!(current >= max - 1) ? 1 : 0)
	const decrement = () => (!(current <= 0) ? 1 : 0)

	const Point = (props) => {
		return (
			<>
				<Line
					name="axis"
					points={[
						[props.x, 0.1, 0],
						[props.x, -0.1, 0],
					]}
					color="#EA5B89"
					lineWidth={5}
				/>
				<Html
					center={true}
					position={[props.x, -0.5, 0]}
					distanceFactor={5}>
					<StyledNumAxis>x</StyledNumAxis>
				</Html>
			</>
		)
	}

	const HalfCircle = () => {
		let num = (4 * (Math.sqrt(2) - 1)) / 3
		let x = 1.5
		num *= x
		let y = 0.5
		const z = 0
		const myColor = "#ea5b89"
		// multiply factor

		return (
			<>
				<Line
					points={[
						[-1.5, 0.5, 0],
						[-1.7, 0.7, 0],
					]}
					color="#EA5B89"
					lineWidth={3}
				/>
				<Line
					points={[
						[-1.5, 0.5, 0],
						[-1.3, 0.7, 0],
					]}
					color="#EA5B89"
					lineWidth={3}
				/>
				<CubicBezierLine
					// x y z
					start={[-x, y, z]}
					midA={[-x, num + y, z]}
					midB={[-num, x + y, z]}
					end={[0, x + y, z]}
					lineWidth={3}
					color={myColor}
					dashed={false}
					dashSize={1}
					dashScale={10}
				/>
				<CubicBezierLine
					// x y z
					start={[0, x + y, z]}
					midA={[num, x + y, z]}
					midB={[x, num + y, z]}
					end={[x, 0 + y, z]}
					lineWidth={3}
					color={myColor}
					dashed={false}
					dashSize={1}
					dashScale={10}
				/>
			</>
		)
	}

	const QuarterCircle = () => {
		let num = (4 * (Math.sqrt(2) - 1)) / 3
		let x = 1.5
		num *= x
		let y = 0
		const z = 0
		const myColor = "#ea5b89"
		return (
			<>
				<CubicBezierLine
					// x y z
					start={[0, x + y, z]}
					midA={[num, x + y, z]}
					midB={[x, num + y, z]}
					end={[x, 0 + y, z]}
					lineWidth={5}
					color={myColor}
					dashed={false}
					dashSize={1}
					dashScale={10}
				/>
			</>
		)
	}

	const myScene = [
		<>
			<Point x={-1.5} />
			<Point x={1.5} />
		</>,
		<>
			<HalfCircle position={(0, 1, 0)} />
			<Point x={-1.5} />
			<Point x={1.5} />
		</>,
		<>
			<MyAxisY length={length} />
			<Point x={1.5} />
			<QuarterCircle />
		</>,
	]

	return (
		<>
			<Scene className="gauss" control>
				<MyAxisX null length={length} />
				{myScene[current - 1]}
			</Scene>
			<Counter>{current + 1} / 4</Counter>
			<Button onClick={() => setcurrent(current - decrement())}>
				Previous
			</Button>
			<Button onClick={() => setcurrent(current + increment())}>
				Next
			</Button>

			<SubText>{subText[current]}</SubText>
		</>
	)
}

export default Gauss
