import { CubicBezierLine } from "@react-three/drei"

let num = (4 * (Math.sqrt(2) - 1)) / 3
let x = 1
const z = -0.1
const myColor = "#363738"
// multiply factor
num *= 1
x *= 1

const Ring = () => {
	return (
		<>
			<CubicBezierLine
				// x y z
				start={[0, x, z]}
				midA={[num, x, z]}
				midB={[x, num, z]}
				end={[x, 0, z]}
				lineWidth={3}
				color={myColor}
				dashed={true}
				dashSize={1}
				dashScale={10}
			/>
			<CubicBezierLine
				// x y z
				start={[x, 0, z]}
				midA={[x, -num, z]}
				midB={[num, -x, z]}
				end={[0, -x, z]}
				lineWidth={3}
				color={myColor}
				dashed={true}
				dashSize={1}
				dashScale={10}
			/>
			<CubicBezierLine
				// x y z
				start={[0, -x, z]}
				midA={[-num, -x, z]}
				midB={[-x, -num, z]}
				end={[-x, 0, z]}
				lineWidth={3}
				color={myColor}
				dashed={true}
				dashSize={1}
				dashScale={10}
			/>
			<CubicBezierLine
				// x y z
				start={[-x, 0, z]}
				midA={[-x, num, z]}
				midB={[-num, x, z]}
				end={[0, x, z]}
				lineWidth={3}
				color={myColor}
				dashed={true}
				dashSize={1}
				dashScale={10}
			/>
		</>
	)
}

export default Ring
