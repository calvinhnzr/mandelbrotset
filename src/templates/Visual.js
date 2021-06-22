import * as THREE from "three"
import { useState, useRef } from "react"

import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs"

import styled from "styled-components"

import { Canvas } from "@react-three/fiber"

const Visual = () => {
	const [mandelbrot, setMandelbrot] = useState(false)
	const canvasRef = useRef(null)

	let numberOfIteration = 17

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

	// i < 200
  for(int i=0; i < ${numberOfIteration}; i++){  // i < max iterations
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

		// if(z_0_mag > 12.0){
    if(z_0_mag > 10.0){
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

	if(s<0.3){
    s=.666;
  }
  
	vec3 coord = vec3(s,s,s);
  //gl_FragColor = vec4(pow(coord, vec3(5.38, 6.15, 3.85)), 1.0);
	gl_FragColor = vec4(pow(coord, vec3(5.1, 5.0, 4.87)), 1.0);
	

}
  `
	}
	var uniforms

	var aspect = window.innerWidth / window.innerHeight

	// var aspect = canvasWidth / canvasHeight

	// var zoom = 2.0
	var zoom = 0.1
	// var offset = new THREE.Vector2(-2.0 * aspect, -2.0)
	var offset = new THREE.Vector2((-zoom - 0.2) * aspect, -zoom)

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

	// function windowResize() {
	// 	//aspect intentionaly not updated
	// 	aspect = window.innerWidth / window.innerHeight
	// 	camera.aspect = aspect
	// 	camera.updateProjectionMatrix()
	// 	renderer.setSize(window.innerWidth, window.innerHeight - 2)
	// }

	// check if mouse is on card, useffect
	document.addEventListener("wheel", scroll)

	function scroll(event) {
		let zoom_0 = zoom
		if ("wheelDeltaY" in event) {
			// chrome vs. firefox
			//zoom *= 1 + event.wheelDeltaY * 0.0003
			zoom *= 1 - event.wheelDeltaY * 0.0003
		} else {
			zoom *= 1 + event.deltaY * 0.01
		}

		let space = zoom - zoom_0

		// let mouseX = event.clientX / window.innerWidth
		// let mouseY = 1 - event.clientY / window.innerHeight

		let mouseX = 1
		let mouseY = 1
		offset = offset.add(
			new THREE.Vector2(-mouseX * space * aspect, -mouseY * space)
		)

		uniforms["zoom"]["value"] = zoom
		uniforms["offset"]["value"] = offset
	}

	const CanvasContainer = styled.div`
		grid-row: 1 / 13;
		grid-column: 1 / 13;
		background-color: rgb(32, 33, 35);
		/* border-radius: 0.5rem; */
	`

	const Container = styled.div`
		grid-row: 1 / 13;
		grid-column: 2 / 10;
		/* outline: 1px solid white; */
		display: flex;
		flex-direction: column;
		z-index: 100;
		> pre {
			background: none !important;
			border: none !important;
			opacity: 1;
			&::before {
				display: block;
				content: "";
				height: 6rem;
			}
		}
	`

	const StyledCheckBox = styled.label`
		/* outline: 1px solid white; */
		padding-top: 6rem;
		grid-row: 1 / 4;
		grid-column: 11 / 13;
		display: flex;
		align-items: center;
		width: fit-content;
		height: fit-content;
		z-index: 200;
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

	const codeString = `<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="keywords" content="mandelbrot, react, three" />
		<meta name="author" content="Calvin Hinzer" />
		<meta name="description" content="this took way too long" />
		<title>Mandelbrotmenge</title>
	</head>
	<body>
		<canvas id="myCanvas" width="800" height="800"></canvas>
		<script>
			var canvas = document.getElementById("myCanvas")
			var context = canvas.getContext("2d")

			// Durchlaufe alle Zeilen des zu zeichnenden Bildes
			for (var pixelzeile = 0; pixelzeile < 200; pixelzeile++) {
				// Durchlaufe alle Spalten der jeweiligen Zeile
				for (var pixelspalte = 0; pixelspalte < 200; pixelspalte++) {

					// Zähler für Iterationen für aktuelles Pixel
					var iterationen = 0

					// Berechnung der X-Verschiebung für bessere Darstellung
					var xverschiebung = -2 + pixelzeile / 50

					// Berechnung der Y-Verschiebung für bessere Darstellung
					var yverschiebung = -2 + pixelspalte / 50

					// Anlegen/Nullen der Variable für den Realteil des Punktes über den iteriert wird
					var zx = 0

					// Anlegen/Nullen der Variable für den Imaginärteilteil des Punktes über den iteriert wird
					var zy = 0

					// While-Schleife in der die tatsächliche Iterierung stattfindet. Bruchbedingungen sind maximal 255 Iterationen (aufgrund von Performance) oder das Überschreiten der Grenze 4 (siehe Beweis) durch Quadrierung des Betrags der jeweiligen Iteration
					while (iterationen < 255 && zx * zx + zy * zy < 4) {

						// Temporäre Variable in der Produkt aus Imaginär- und Realteil gespeichert wird
						var xtemp = zx * zy

						// Überschreiben des Realanteils durch Realanteil des Quadrats der komplexen Zahl, ausnutzen von (zx+zy)*(zx+zy)=zx^2-zy^2+2*zx*zy
						zx = zx * zx - zy * zy + xverschiebung

						// Überschreiben des Imaginäranteils durch Imaginäranteil des Quadrats der komplexen Zahl
						zy = 2 * xtemp + yverschiebung

						// Erhöhen des Iterationszählers
						iterationen++
					}

					// Festlegen eines RGB-Werts für jeweiliges Pixel abhängig von Anzahl durchlaufender Iterationen
					var color = iterationen.toString(16)

					// Element für Pixel anlegen
					context.beginPath()

					// Entsprechenden Block füllen
					context.rect(pixelzeile * 4, pixelspalte * 4, 4, 4)

					// Farbe für Block festlegen
					context.fillStyle = "#" + color + color + color

					// Block zeichnen
					context.fill()
				}
			}
		</script>
	</body>
</html>`

	return (
		<>
			<StyledCheckBox>
				Render Mandelbrot
				<input
					type="checkbox"
					checked={mandelbrot}
					onChange={() => setMandelbrot(!mandelbrot)}
				/>
			</StyledCheckBox>
			<Container>
				<SyntaxHighlighter
					language="javascript"
					style={tomorrowNight}
					showLineNumbers
					wrapLongLines
					useInlineStyles={true}
					customStyle={{
						padding: "0 0 100% 1rem",
						lineHeight: "1.6",
						fontSize: "1.3rem",
						color: "white",
						fontFamily: "Roboto",
						letterSpacing: "1px",
						fontWeight: 400,
						textShadow: "0px 0px 25px rgba(0, 0, 0, 0.6)",
					}}>
					{codeString}
				</SyntaxHighlighter>
			</Container>
			<CanvasContainer
				ref={canvasRef}
				style={
					mandelbrot ? { display: "inherit" } : { display: "none" }
				}>
				<Canvas
					gl={{
						powerPreference: "high-performance",
						antialias: false,
					}}
					dpr={[1, 2]}
					camera={{
						// default: 75
						fov: 75,
						near: 0.1,
						far: 1000,
						position: [0, 0, 1],
					}}>
					<mesh>
						<planeBufferGeometry args={[5, 5]} />
						<shaderMaterial
							uniforms={uniforms}
							fragmentShader={fragmentShader()}
						/>
					</mesh>
				</Canvas>
			</CanvasContainer>
		</>
	)
}
export default Visual
