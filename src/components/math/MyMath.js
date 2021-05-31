import { MathJaxContext, MathJax } from "better-react-mathjax"

export default function MyMath(props) {
	const config = {
		showMathMenu: false,
		tex2jax: {
			inlineMath: [["$", "$"]],
			displayMath: [["$$", "$$"]],
			// TeX: { Macros: { phi: "\\varphi" } },
		},
	}

	return (
		<MathJaxContext config={config} version={2}>
			<MathJax inline>{`$${props.children}$`}</MathJax>
		</MathJaxContext>
	)
}
