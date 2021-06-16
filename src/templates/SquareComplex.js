import * as THREE from "three"
import styled from "styled-components"
import { useState, useEffect, useRef, useMemo } from "react"
import Scene from "../components/three/Scene"
import Axis from "../components/three/Axis"
import Ring from "../components/three/Ring"
import { Line, PerspectiveCamera } from "@react-three/drei"

import DragableCircle from "../components/three/DragableCircle"
import mandelbrotset from "../images/mandelbrotset.png"

const StyledCheckBox = styled.label`
	/* outline: 1px solid red; */
	display: flex;
	align-items: center;
	width: fit-content;
	font-size: 1.5rem;
	font-weight: 100;
	/* text-decoration: underline; */
	cursor: pointer;
	grid-column: 2 / 6;
	grid-row: 3 / 4;
	input {
		margin-left: 1rem;
		height: 2rem;
		width: 2rem;
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

	return (
		<>
			<StyledCheckBox>
				Picture
				<input
					type="checkbox"
					checked={image}
					onChange={() => setImage(!image)}
				/>
			</StyledCheckBox>
			<Scene control position={[0, 0, 4]}>
				{image ? <Image url={mandelbrotset} /> : null}
				<Axis />
				<Ring />
				<DragableCircle />
			</Scene>
		</>
	)
}

export default SquareComplex
