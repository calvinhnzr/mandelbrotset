import * as THREE from "three"

import { useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { FaLock, FaLockOpen } from "react-icons/fa"
import styled from "styled-components"

const StyledScene = styled.div`
	position: relative;
	grid-column: 2 / 12;
	grid-row: 4 / 9;
	background-color: #191a1b;
	border-radius: 0.5rem;
	&.gauss {
		grid-row: 3 / 8;
	}
	@media only screen and (min-width: 960px) {
		grid-column: 6 / 12;
		grid-row: 3 / 11;
	}
`

const StyledLock = styled.button`
	z-index: 100;
	border: none;
	position: absolute;
	width: 2rem;
	height: 2rem;
	bottom: 1rem;
	right: 1rem;
	background: none;
	cursor: pointer;

	&.reset {
		right: 4rem;
		color: #363738;
		font-family: "Roboto";
		font-weight: bold;
		font-size: 1.7rem;
		text-align: center;
		line-height: 0.8;
		&:hover {
			color: #ffffff66;
		}
	}
	& > * {
		color: #363738;
		transition: 0.1s ease-in-out;
		width: 100%;
		height: 100%;
		&:hover {
			color: #ffffff66;
		}
	}
`

const MyReset = (props) => {
	return (
		<StyledLock
			onClick={() => props.myOrbitControls.current.reset()}
			className="reset">
			R
		</StyledLock>
	)
}

const MyLock = (props) => {
	return (
		<StyledLock onClick={() => props.setActive(!props.active)}>
			{props.active ? <FaLockOpen /> : <FaLock />}
		</StyledLock>
	)
}

const Scene = (props) => {
	const [active, setActive] = useState(false)
	const myOrbitControls = useRef()
	const canvasRef = useRef()

	return (
		<StyledScene className={props.className}>
			{props.control ? (
				<>
					<MyReset myOrbitControls={myOrbitControls} />
					<MyLock active={active} setActive={setActive} />
				</>
			) : null}
			<Canvas
				gl={{
					powerPreference: "high-performance",
				}}
				dpr={[1, 2]}
				camera={{
					// default: 75
					fov: 40,
					near: 0.1,
					far: 1000,
					position: props.position,
				}}>
				<OrbitControls
					ref={myOrbitControls}
					enabled={active}
					enableZoom={true}
				/>
				<ambientLight intensity={0.5} />
				{/* <directionalLight position={[0, 3, 5]} intensity={0.3} /> */}
				{props.children}
			</Canvas>
		</StyledScene>
	)
}

export default Scene
