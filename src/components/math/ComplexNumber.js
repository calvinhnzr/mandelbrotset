import { useState, useEffect } from "react"

import styled from "styled-components"
import ComplexGraph from "../threejs/MyComplexGraph"
import MyMesh from "../threejs/MyMesh"

import Cube from "../threejs/Cube"

import Aside from "../styled/Aside"
import Formula from "../styled/Formula"

// import { useState, useEffect } from "react"

const StyledComplex = styled.div``

const Complex = (props) => {
	const [re, setRe] = useState()
	const [im, setIm] = useState()

	const multiFactor = 2
	let re1 = re * re - im * im
	let im1 = 2 * (re * im)

	// const [list, setList] = useState([[], []])

	let firstIte = useEffect(() => {
		// 	setRe(re * re - im * im)
		// 	setIm(2 * (re * im))
		// setList([[re * re - im * im], [2 * (re * im)]])
	}, [])

	return (
		<>
			<Aside>
				<Formula
					re={re}
					im={im}
					setRe={setRe}
					setIm={setIm}
					handleKeyDown={props.handleKeyDown}
				/>
				<span
					style={{
						color: "white",
						marginTop: "2rem",
						fontFamily: "Roboto",
						fontSize: "1.3rem",
						fontWeight: "100",
					}}>
					x_0 = 0 <br />
					<br />
					z_(n+1) ={" "}
					<span style={{ fontWeight: "bold" }}>((z_n)^2)</span> + c
				</span>
				{/* 
					formel
					input
					iteration list
				*/}
			</Aside>
			<ComplexGraph>
				<Cube />
				<MyMesh
					position={[re ? re * 2 : 0, im ? im * 2 : 0, 0]}
					size={0.15}
					color="#ea5b89"
				/>
			</ComplexGraph>
		</>
	)
}

export default Complex
