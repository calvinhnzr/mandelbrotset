import { useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { FaLock, FaLockOpen } from "react-icons/fa"
import styled from "styled-components"

const StyledCanvas = styled.div`
	border-radius: 0.5rem;
	grid-row-start: 2;
	grid-row-end: 6;
	grid-column: 6 / 12;

	background-color: #191a1b;

	position: relative;
`

const StyledLock = styled.button`
	z-index: 100;
	/* outline: 1px solid blue; */
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

const MyCanvas = (props) => {
	const [active, setActive] = useState(false)
	const myOrbitControls = useRef()
	return (
		<StyledCanvas>
			<MyReset myOrbitControls={myOrbitControls} />
			<MyLock active={active} setActive={setActive} />
			<Canvas dpr={[1, 2]} camera={{ position: props.position }} reset>
				<OrbitControls
					ref={myOrbitControls}
					enabled={active}
					enableZoom={true}
				/>
				{props.children}
				<ambientLight intensity={0.5} />
				<directionalLight position={[0, 3, 5]} intensity={0.3} />
			</Canvas>
		</StyledCanvas>
	)
}

export default MyCanvas
