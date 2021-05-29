import Image from "../components/Image"
import Quote from "../components/Quote"
import Note from "../components/Note"

import mandelbrotPortrait from "../images/mandelbrotPortrait.jpg"

const Portrait = (props) => {
	return (
		<>
			<Image
				src={mandelbrotPortrait}
				alt="Portät von Benoît Mandelbrot"
			/>
			<Quote>
				„Wolken sind keine Kugeln, Berge keine Kegel, Küstenlinien keine
				Kreise. Die Rinde ist nicht glatt und auch der Blitz bahnt sich
				seinen Weg nicht gerade.“
				<p> - Benoît Mandelbrot</p>
			</Quote>
			<Note>
				* 20. November 1924 in Warschau; <br />† 14. Oktober 2010 in
				Cambridge
			</Note>
		</>
	)
}

export default Portrait
