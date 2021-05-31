import { MathJaxContext, MathJax } from "better-react-mathjax"

export default function MyMath(props) {
	const config = {
		tex2jax: {
			inlineMath: [["$", "$"]],
			displayMath: [["$$", "$$"]],
			TeX: { Macros: { phi: "\\varphi" } },
		},
	}

	const equation = "$z=a+i*b$"
	// const equation = "$z=r*(cos(phi)+i*sin(phi))$"

	return (
		<MathJaxContext config={config} version={2}>
			<MathJax inline>{`$${props.value}$`}</MathJax>
		</MathJaxContext>
	)
}
