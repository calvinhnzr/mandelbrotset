import { useState, useMemo } from "react"
import styled from "styled-components"

import * as THREE from "three"

import Axis from "../components/three/Axis"
import Ring from "../components/three/Ring"
import DragableCircle from "../components/three/DragableCircle"
import MyMath from "../components/math/MyMath"

import mandelbrotset from "../images/mandelbrotset.png"

const Container = styled.div`
	/* margin-top: 2rem; */
	grid-row: 4 / 11;
	grid-column: 2 / 6;
	outline: 1px solid white;
	display: flex;
	flex-direction: column;
	> span {
		font-size: 2rem;
		color: white;
		margin-bottom: 1rem;
	}
`

const StyledCheckBox = styled.label`
	display: flex;
	align-items: center;
	width: fit-content;
	margin-top: 1rem;
	font-size: 1.2rem;
	font-weight: 100;
	/* text-decoration: underline; */
	&:first-of-type {
		margin-top: 2.5rem;
	}
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

const Mandelbrot = () => {
	const [image, setImage] = useState(false)
	const [mandelbrot, setMandelbrot] = useState(false)

	return (
		<>
			{/* <Container>
				<span>
					<MyMath>{"z=(a+b*i)^2"}</MyMath>
				</span>
				<span>
					<MyMath>{"z_0=0"}</MyMath>
				</span>
				<span>
					<MyMath>{"z_{n+1}=x_n^2 + c"}</MyMath>
				</span>

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
			</Container> */}
			<DragableCircle mandelbrot={mandelbrot}>
				{image ? <Image url={mandelbrotset} /> : null}
				<Axis />
				<Ring />
			</DragableCircle>
		</>
	)
}

export default Mandelbrot
