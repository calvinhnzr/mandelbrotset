import { MathJaxContext, MathJax } from "better-react-mathjax"

export default function MyMath(props) {
	const config = {
		showMathMenu: false,
		tex2jax: {
			inlineMath: [
				["$", "$"],
				["\\(", "\\)"],
			],
			displayMath: [["$$", "$$"]],
			// TeX: { Macros: { phi: "\\varphi" } },
		},
		TeX: {
			noErrors: { disabled: true }, // Show error messages
			MAXBUFFER: 25 * 1024, // Set size of buffer in bytes
		},
		imageFont: null,
		skipStartupTypeset: true,
		showProcessingMessages: true,
	}

	return (
		<MathJaxContext config={config} version={2}>
			<MathJax inline>{`$${props.children}$`}</MathJax>
		</MathJaxContext>
	)
}
