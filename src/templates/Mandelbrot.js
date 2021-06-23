import { useState, useMemo } from "react"
import styled from "styled-components"

import * as THREE from "three"

import Axis from "../components/three/Axis"
import Ring from "../components/three/Ring"
import DragableCircle from "../components/three/DragableCircle"
import MyMath from "../components/math/MyMath"

import mandelbrotset from "../images/mandelbrotset.png"

const Container = styled.div`
	z-index: 100;
	grid-row: 10 / 11;
	grid-column: 6 / 7;
	position: relative;
`

const StyledCheckBox = styled.label`
	position: absolute;
	left: 1.3rem;
	bottom: 1.2rem;
	display: flex;
	align-items: center;
	width: fit-content;
	font-size: 1.2rem;
	letter-spacing: 1px;
	font-weight: 400;
	flex-direction: row-reverse;
	color: #363738;
	cursor: pointer;
	input {
		display: none;
	}
`

const Texture = ({ texture }) => {
	return (
		<mesh position={[-0.513, 0.015, -0.01]} scale={0.476}>
			<planeBufferGeometry attach="geometry" args={[6.4, 4.69]} />
			<meshBasicMaterial
				attach="material"
				map={texture}
				transparent={true}
				opacity={0.5}
			/>
		</mesh>
	)
}

const Image = ({ url }) => {
	const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
	return <Texture texture={texture} />
}

const Mandelbrot = () => {
	const [image, setImage] = useState(false)
	const [mandelbrot, setMandelbrot] = useState(false)

	return (
		<>
			<Container>
				<StyledCheckBox>
					Picture
					<input
						type="checkbox"
						checked={image}
						onChange={() => setImage(!image)}
					/>
				</StyledCheckBox>
				{/* <StyledCheckBox>
					Mandelbrot
					<input
						type="checkbox"
						checked={mandelbrot}
						onChange={() => setMandelbrot(!mandelbrot)}
					/>
				</StyledCheckBox> */}
			</Container>
			<DragableCircle mandelbrot={mandelbrot}>
				{image ? <Image url={mandelbrotset} /> : null}
				<Axis />
				<Ring />
			</DragableCircle>
		</>
	)
}

export default Mandelbrot
