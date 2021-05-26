import { useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import styled from "styled-components"

const StyledCanvas = styled.div`
	outline: 1px solid white;
`

const Canvas = () => {
	return (
		<StyledCanvas>
			<Canvas>
				<OrbitControls
					ref={myOrbitControls}
					enabled={active}
					enableZoom={true}
				/>
				{/* 
          - grid
          - axis
          - num on axis, dots
          - element
          - lock
          - reset
          - iterations
        
        
        */}
			</Canvas>
		</StyledCanvas>
	)
}

export default Canvas
