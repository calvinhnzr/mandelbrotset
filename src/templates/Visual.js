import * as THREE from "three"
import { useState, useRef } from "react"
import styled from "styled-components"
import { OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import Scene from "../components/three/Scene"

const Visual = () => {
	const [mandelbrot, setMandelbrot] = useState(false)
	const canvasRef = useRef(null)

	function fragmentShader() {
		return `
precision highp float;
uniform vec2 res;
uniform float aspect;
uniform float zoom;
uniform vec2 offset;

// gui parameters
uniform vec3 pset1;
uniform vec3 pset2;

vec2 cm (vec2 a, vec2 b){
  return vec2(a.x*b.x - a.y*b.y, a.x*b.y + b.x*a.y);
}

vec2 conj (vec2 a){
  return vec2(a.x, -a.y);
}

float mandelbrot(vec2 c){
  // 1.0
	float alpha = 1.0;
  vec2 z = vec2(0.0 , 0.0);
  vec2 z_0;
  vec2 z_1;
  vec2 z_2;

  for(int i=0; i < 200; i++){  // i < max iterations
    z_2 = z_1;
    z_1 = z_0;
    z_0 = z;

    float x_0_sq = z_0.x*z_0.x;
    float y_0_sq = z_0.y*z_0.y;
    vec2 z_0_sq = vec2(x_0_sq - y_0_sq, 2.0*z_0.x*z_0.y);
    float x_1_sq = z_1.x*z_1.x;
    float y_1_sq = z_1.y*z_1.y;
    vec2 z_1_sq = vec2(x_1_sq - y_1_sq, 2.0*z_1.x*z_1.y);

    // the recurrence equation
    z = pset1.x*z_0_sq + c + pset1.y*z_1_sq
    + pset1.z*cm(z_1_sq, z_2) + pset2.x*cm(z_1_sq, z_0)
    + pset2.y*cm(z_2, z_0) + pset2.z*cm(z_1, z_2);

    float z_0_mag = x_0_sq + y_0_sq;
    float z_1_mag = x_1_sq + y_1_sq;

    if(z_0_mag > 12.0){
      float frac = (12.0 - z_1_mag) / (z_0_mag - z_1_mag);
      alpha = (float(i) - 1.0 + frac)/200.0; // should be same as max iterations
      break;
    }
  }

  return alpha;
}

void main(){ // gl_FragCoord in [0,1]
  vec2 uv = zoom * vec2(aspect, 1.0) * gl_FragCoord.xy / res + offset;
  float s = 1.0 - mandelbrot(uv);

  
	vec3 coord = vec3(s,s,s);
  gl_FragColor = vec4(pow(coord, vec3(5.38, 6.15, 3.85)), 1.0);
	

}
  `
	}
	var uniforms

	var aspect = window.innerWidth / window.innerHeight

	// var aspect = canvasWidth / canvasHeight

	var zoom = 5.5

	var offset = new THREE.Vector2(-2.0 * aspect, -2.0)

	let parameters = {
		a: 1.01,
		b: 0.01,
		c: 0.01,
		d: 0.01,
		e: 0.01,
		f: 0.01,
	}

	uniforms = {
		res: {
			type: "vec2",
			value: new THREE.Vector2(window.innerWidth, window.innerHeight),
		},
		aspect: { type: "float", value: aspect },
		zoom: { type: "float", value: zoom },
		offset: { type: "vec2", value: offset },
		pset1: {
			type: "vec3",
			value: new THREE.Vector3(
				parameters["a"],
				parameters["b"],
				parameters["c"]
			),
		},
		pset2: {
			type: "vec3",
			value: new THREE.Vector3(
				parameters["d"],
				parameters["e"],
				parameters["f"]
			),
		},
	}

	// window.addEventListener("resize", windowResize, false)
	document.addEventListener("wheel", scroll)

	// function windowResize() {
	// 	//aspect intentionaly not updated
	// 	aspect = window.innerWidth / window.innerHeight
	// 	camera.aspect = aspect
	// 	camera.updateProjectionMatrix()
	// 	renderer.setSize(window.innerWidth, window.innerHeight - 2)
	// }

	function scroll(event) {
		let zoom_0 = zoom
		if ("wheelDeltaY" in event) {
			// chrome vs. firefox
			zoom *= 1 - event.wheelDeltaY * 0.0003
		} else {
			zoom *= 1 + event.deltaY * 0.01
		}

		let space = zoom - zoom_0
		let mouseX = event.clientX / window.innerWidth
		let mouseY = 1 - event.clientY / window.innerHeight
		offset = offset.add(
			new THREE.Vector2(-mouseX * space * aspect, -mouseY * space)
		)

		uniforms["zoom"]["value"] = zoom
		uniforms["offset"]["value"] = offset
	}

	const CanvasContainer = styled.div`
		grid-row: 3 / 12;
		grid-column: 4 / 12;

		background-color: #191a1b;
		border-radius: 0.5rem;
		canvas {
			/* opacity: 0.87; */
		}
	`

	const Container = styled.div`
		grid-row-start: 3;
		grid-column: 2 / 4;
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

	return (
		<>
			<Container>
				<StyledCheckBox>
					Render Mandelbrot
					<input
						type="checkbox"
						checked={mandelbrot}
						onChange={() => setMandelbrot(!mandelbrot)}
					/>
				</StyledCheckBox>
			</Container>
			<CanvasContainer ref={canvasRef}>
				<Canvas
					gl={{
						powerPreference: "high-performance",
						antialias: false,
					}}
					dpr={[1, 2]}
					camera={{
						// default: 75
						fov: 65,
						near: 0.1,
						far: 1000,
						position: [0, 0, 1],
					}}>
					{mandelbrot ? (
						<mesh>
							<planeBufferGeometry args={[5, 5]} />
							<shaderMaterial
								uniforms={uniforms}
								fragmentShader={fragmentShader()}
							/>
						</mesh>
					) : null}
				</Canvas>
			</CanvasContainer>
		</>
	)
}
export default Visual
