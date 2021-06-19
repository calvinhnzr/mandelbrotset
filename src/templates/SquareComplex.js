import * as THREE from "three"
import styled from "styled-components"
import { useState, useMemo } from "react"
import Scene from "../components/three/Scene"
import Axis from "../components/three/Axis"
import Ring from "../components/three/Ring"

import DragableCircle from "../components/three/DragableCircle"
import mandelbrotset from "../images/mandelbrotset.png"

const Container = styled.div`
	grid-row-start: 3;
	grid-column: 2 / 6;
	/* outline: 1px solid white; */
	display: flex;
	flex-direction: column;
`

const StyledCheckBox = styled.label`
	display: flex;
	align-items: center;
	width: fit-content;

	font-size: 1.2rem;
	font-weight: 100;
	/* text-decoration: underline; */
	cursor: pointer;
	input {
		margin-left: 1rem;
		height: 1.5rem;
		width: 1.5rem;
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

const SquareComplex = () => {
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
				<StyledCheckBox>
					Mandelbrot
					<input
						type="checkbox"
						checked={mandelbrot}
						onChange={() => setMandelbrot(!mandelbrot)}
					/>
				</StyledCheckBox>
			</Container>
			<Scene control position={[0, 0, 4]}>
				{image ? <Image url={mandelbrotset} /> : null}
				<Axis />
				<Ring />

				<DragableCircle mandelbrot={mandelbrot} />
			</Scene>
		</>
	)
}

export default SquareComplex
