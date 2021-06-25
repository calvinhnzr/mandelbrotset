import Card from "./components/Card"

import Title from "./components/Title"
import SubTitle from "./components/SubTitle"
import Headline from "./components/Headline"

import MyMath from "./components/math/MyMath"

// templates
import SquareNumbers from "./templates/SquareNumbers"
import OnNumberLine from "./templates/OnNumberLine"
import ComplexNumbersIntro from "./templates/ComplexNumbersIntro"
import Gauss from "./templates/Gauss"
import Form from "./templates/Form"
// import Calculation from "./templates/Calculation"
import Portrait from "./templates/Portrait"
import Mandelbrot from "./templates/Mandelbrot"
import Fractal from "./templates/Fractal"
import Visual from "./templates/Visual"
import Zoom from "./templates/Zoom"
import Juliaset from "./templates/Juliaset"
import RealUse from "./templates/RealUse"
import Look from "./templates/Look"
import EndCard from "./templates/EndCard"

import Info from "./components/Info"
import Keys from "./components/Keys"

import fractalAntenna from "./images/realuse/fraktalantennen.jpg"
import lenna from "./images/realuse/lenna.jpg"

const NewData = (props) => {
	return (
		<>
			<Card>
				<Title value="Mandelbrotmenge" />
				<SubTitle value="„Wenn Mathematik mal&nbsp;schön&nbsp;ist.“" />
				<Keys />
			</Card>
			<Card>
				<Headline value="Zahlen Quadrieren" />
				<SquareNumbers color="#437EF1" />
				<Info>
					<h1>Zahlen Quadrieren</h1>
					<p>
						Zu Beginn veranschaulichen wir wie drastisch das
						exponentielle Wachstum beim Quadrieren von Zahlen aus
						der Menge <MyMath>{"\\mathbb{N}_0"}</MyMath> ist (aus
						Darstellungszwecken nur im Intervall von [0,9]).
					</p>
					<p>
						Je größer der initiale Wert, umso schneller streben die
						folgenden quadrierten Werte gegen Unendlich.
					</p>
					<p>
						Dadurch lässt sich eine Besonderheit der Mandelbrotmenge
						deutlicher herausstellen - innerhalb dieser speziellen
						Menge in den komplexen Zahlen tritt genau jener Effekt
						beim Quadrieren nicht auf.
					</p>
				</Info>
			</Card>
			<Card>
				<Headline value="Am Zahlenstrahl" />
				<OnNumberLine color="#437EF1" />
				<Info>
					<h1>Am Zahlenstrahl</h1>
					<p>
						Mit dieser Folie wird aufgezeigt, dass in den reellen
						Zahlen ein Intervall [-1,1] existiert, bei dem die
						quadrierten Werte egal bei welcher Anzahl an Iterationen
						des Quadrierens nicht gegen Unendlich streben
					</p>
					<p>
						Man spricht von einem 'stabilen' oder 'stable' Bereich,
						die Werte konvergieren schon nach wenigen Iterationen
						deutlich hin zur 0. Der Bereich außerhalb dieses
						Intervalls wird als 'unstable' oder 'instabil'
						bezeichnet, hier streben genau wie in{" "}
						<MyMath>{"\\mathbb{N}_0"}</MyMath> im vorherigen
						Beispiel alle Werte schnell gegen Unendlich, die
						Quadrate der Ursprungszahlen sind also wieder divergent.
					</p>
					<p>
						Dies lässt sich in dem von uns implementierten
						interaktiven Tool gut erkennen, der blaue Punkt stellt
						den Startwert dar, die grünen Punkte zeigen die Werte
						nach wenigen Iterationen.
					</p>
				</Info>
			</Card>
			<Card>
				<Headline value="Komplexe Zahlen" />
				<ComplexNumbersIntro />
				<Info>
					<h1>Komplexe Zahlen</h1>
					<p>
						In der Geschichte der Mathematik war es oft notwendig,
						den bestehenden Zahlenraum zu erweitern, da es immer
						wieder Probleme gab, die ohne eine solche Erweiterung
						nicht lösbar waren.
					</p>
					<p>
						Um die komplexen Zahlen einzuführen, greifen wir hier
						zum Einstieg auf ein Beispiel zurück, dass jedem aus der
						Schulzeit bekannt ist – eine Lösung quadratischer
						Gleichungen die ein negatives Argument in der Wurzel
						hat.
					</p>
					<p>
						Um diese Gleichung lösen zu können war es notwendig den
						reellen Zahlenraum erneut zu erweitern, in diesem Fall
						hin zu den komplexen Zahlen durch die Einführung von
						‚i‘, der Quadratwurzel von -1.
					</p>
					<p>
						In unserem Vortrag werden wir Zahlenmenge für
						Zahlenmenge mit einem jeweilig in dieser Menge nicht
						lösbaren Problem aufdecken, dazu steht die bewegliche,
						im Screenshot schwarz erkennbare Karte zur Verfügung.
						Das mit einer Zahlenmenge aufgeführte Problem kann
						jeweils durch die Einführung der in der nächsten Zeile
						aufgeführten Zahlenmenge gelöst werden.
					</p>
					<div>
						<a
							href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Komplexe_Zahlen:_Einleitung_und_Motivation"
							target="_blank"
							rel="noopener noreferrer">
							Komplexe Zahlen: Einleitung und Motivation - Serlo
							"Mathe für Nicht-Freaks"
						</a>
					</div>
				</Info>
			</Card>
			<Card>
				<Headline value="Komplexe Zahlenebene" />
				<Gauss />
				<Info>
					<h1>Komplexe Zahlenebene</h1>
					<p>
						Bisher haben wir mit der Menge der reellen Zahlen
						gearbeitet, Elemente dieser können als Punkte auf einem
						Zahlenstrahl visualisiert werden.{" "}
						<span>(Bild 1 / 4)</span>
					</p>
					<p>
						Da i keine reelle Zahl ist, lässt sich diese nicht auf
						dem reellen Zahlenstrahl darstellen. Um eine visuelle
						Darstellung für i herzuleiten, betrachten wir zunächst
						die Multiplikation einer beliebigen reellen Zahl mit -1.
						<span>(Bild 2 / 4)</span>
					</p>
					<p>
						Diese Operation kann man als Spiegelung von x an der 0
						interpretieren, was in diesem Fall gleichbedeutend mit
						einer Drehung von 180° um den Nullpunkt ist.{" "}
						<span>Bild 3 von 4.</span> Also
						<br /> (<MyMath>{"x*(-1) \\widehat{=} 180°-"}</MyMath>
						Drehung).
					</p>
					<p>
						Mit <MyMath>{"i^2=-1"}</MyMath> kann man die
						obenstehende Operation auch als{" "}
						<MyMath>{"i *(i*x)"}</MyMath> darstellen. Setzt man dies
						in die vorherige 'Gleichung' ein
						<MyMath>
							{"((x*(-1) \\widehat{=} 180°- Drehung)"}
						</MyMath>{" "}
						wird klar, dass die Multiplikation von i mit x eine
						90°-Drehung um den Nullpunkt bedeutet. Um damit die
						Position von i zu bestimmen, betrachtet man die
						Gleichung <MyMath>{"i=i*1"}</MyMath>. Mit Hilfe dieser
						Überlegungen wird deutlich, dass i sich durch eine 90°-
						Drehung der reellen Zahl 1 darstellen lässt. Also
						befindet sich die imaginäre Zahl auf einer Geraden
						orthogonal zum reellen Zahlenstrahl durch die 0 im
						Abstand von 1.
					</p>
					<div>
						<a
							href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Komplexe_Zahlen:_Einleitung_und_Motivation"
							target="_blank"
							rel="noopener noreferrer">
							Komplexe Zahlen: Einleitung und Motivation - Serlo
							"Mathe für Nicht-Freaks"
						</a>
						<br />
						<a
							href="http://www.gm.fh-koeln.de/~konen/Mathe2-SS/ZD2-Kap11.pdf"
							target="_blank"
							rel="noopener noreferrer">
							Mathematik II Skript von Professor Konen, TH Köln
						</a>
					</div>
				</Info>
			</Card>
			<Card>
				<Headline value="Form" />
				<Form />
			</Card>
			{/* <Card>
				<Headline value="Umrechnung" />
				<Calculation />
			</Card> */}
			<Card>
				<Portrait />
				<Info>
					<h1>Geschichte</h1>
					<p>
						Schon im Jahre 1967 hatte Mandelbrot die inzwischen
						berühmte Frage aufgeworfen, wie lang die Küste
						Großbritanniens ist. Sie klingt zunächst sehr simpel,
						lasst sich jedoch keinesfalls leicht beantworten. Es
						hängt davon ab, wie genau man hinschaut und wie klein
						die Einbuchtungen und Abweichungen von einer gedachten
						geraden Linie sein dürfen, mit der man die Küstenlange
						ermitteln mochte.
					</p>
					<p>
						Auch Küstenlinien sind demnach Fraktale und ebenso wenig
						glatt wie ein Blumenkohl. Benoît Mandelbrot machte es
						sich somit zur Aufgabe in rauen und komplexen Gebilden
						mathematische Regelmäßigkeiten zu finden.
					</p>
					<p>
						und Unerforschtes zu finden, doch er fand zunächst
						nichts. Mit Hilfe des Computers gelang ihm der
						Durchbruch. Er stellte die Gaußsche Ebene im Computer
						dar und iterierte anstatt mit reellen Zahlen, komplexen
						Zahlen, und konnte so die Iterationsverhalten von
						Funktionen darstellen. Dabei fand er die
						Mandelbrotmenge.
					</p>
					<div>
						<a
							href="https://mandelbrot.de/mandelbrot"
							target="_blank"
							rel="noopener noreferrer">
							mandelbrot.de/mandelbrot
						</a>
						<br />
						<a
							href="https://fineartamerica.com/featured/benoit-mandelbrot-emilio-segre-visual-archivesamerican-institute-of-physicsscience-photo-library.html"
							target="_blank"
							rel="noopener noreferrer">
							Bildnachweis
						</a>
					</div>
				</Info>
			</Card>
			<Card>
				<Headline value="Mandelbrotmenge" />
				<Mandelbrot />
				<Info>
					<h1>Mandelbrotmenge</h1>
					<p>
						Um den Bogen zurück zum Anfang unserer Präsentation zu
						spannen, demonstrieren wir hier wie sich komplexe Zahlen
						verhalten, wenn diese quadriert werden. Es wird
						deutlich, dass es hier, wie im reellen Zahlenraum, einen
						stabilen Bereich gibt: Innerhalb eines Radius von 1
						beziehungsweise i konvergieren die komplexen Zahlen
						bereits nach wenigen Iterationen gegen 0.
					</p>
					<p>
						Außerhalb dieses Radius divergieren die Werte nach
						wenigen Iterationsschritten stark, auch hier streben die
						Beträge gegen Unendlich oder minus Unendlich.
					</p>
					<p>
						Im nächsten Schritt wird ein fixer Startwert z
						definiert, dazu wird eine Konstante c addiert. Diese
						Konstante wird bei jedem Iterationsschritt, also bei
						jedem Quadrieren erneut addiert.
					</p>
					<p>
						Die Werte der folgenden Iterationen ergeben Muster.
						Anhand dieser Muster ist eine Verschiebung des stabilen
						Bereichs erkennbar. Der stabile Bereich befindet sich
						nun nicht mehr innerhalb des Radius von 1.
					</p>
					<p>
						Abschließend wird z=0 gesetzt. Erneut lässt sich eine
						Verschiebung des stabilen Bereichs beobachten. Dieser
						stabile Bereich entspricht nun der Mandelbrotmenge.
					</p>
					<p>
						Sowohl z als auch c können in dem von uns
						implementierten interaktiven Tool verändert werden, z
						wird durch den blauen Punkt dargestellt, c wiederum
						durch den orangenen. Die grünen Punkte stellen einige
						Iterationen dar.
					</p>
					<div>
						<a
							href="https://www.youtube.com/watch?v=FFftmWSzgmk"
							target="_blank"
							rel="noopener noreferrer">
							What's so special about the Mandelbrot Set? -
							Numberphile
						</a>
					</div>
				</Info>
			</Card>
			<Card>
				<Headline value="Was ist ein Fraktal?" />
				<Info>
					<h1>Was sind Fraktale?</h1>
					<p>
						Hier wollen wir auf die Fragestellung zurückkommen, die
						wir zu Beginn unserer Präsentation aufgeworfen hatten.
					</p>
					<p>
						Mit entsprechendem mathematischem Vorwissen lassen sich
						beide Objekte schnell als Fraktale erkennen, für unser
						noch fachfremdes Publikum wollen wir anhand dieser
						Beispiele den Begriff des Fraktals erstmals erläutern.
					</p>
					<p>
						Fraktale sind unendliche, selbstähnliche Muster. Bricht
						man beispielsweise ein Stück des Romanescos ab, so wird
						dieses abgebrochene Stück immer dem gesamten Romanesco
						ähneln, bloß kleiner. Dies kann man beliebig oft
						wiederholen, bis das kleinste Romanescostück für das
						menschliche Auge nicht mehr erkennbar ist.
					</p>
					<p>
						Mathematisch präziser formuliert sind Fraktale
						ausgedehnte Objekte, denen man eine fraktale Dimension
						zuordnen kann. Um eine bildliche Vorstellung davon zu
						entwickeln, stellt man sich einen beliebigen Punkt in
						der dreidimensionalen Ebene vor. Um diesen bildet man
						eine Kugel mit beliebig gewähltem Radius. Ändert man den
						gewählten Radius, so ändert sich das von der Kugel
						eingeschlossene Volumen um <MyMath>{"r^3"}</MyMath>.
					</p>
					<p>
						Würde man den gleichen Prozess mit einem Fraktal
						wiederholen, so würde sich das Volumen um r^d ändern,
						wobei d einen nicht ganzzahligen Wert annehmen kann.
					</p>
					<div>
						<a
							href="https://www.youtube.com/watch?v=mw4bJr-3s4E"
							target="_blank"
							rel="noopener noreferrer">
							Verblüffende Erkenntnis: Die Welt ist fraktal! -
							Edition Zukunft Rowohlt
						</a>
						<br />
						<a
							href="https://www.weltderphysik.de/thema/chaos-und-ordnung/fraktale"
							target="_blank"
							rel="noopener noreferrer">
							Welt der Physik - Fraktale Welt
						</a>
						<br />
						<br />
						<a
							href="https://unsplash.com/photos/r4lNn_FDWW8"
							target="_blank"
							rel="noopener noreferrer">
							Bildnachweis Baum
						</a>
						<br />
						<a
							href="https://unsplash.com/photos/K-Iog-Bqf8E"
							target="_blank"
							rel="noopener noreferrer">
							Bildnachweis Wolke
						</a>
						<br />
						<a
							href="https://www.weltderphysik.de/thema/chaos-und-ordnung/fraktale"
							target="_blank"
							rel="noopener noreferrer">
							Bildnachweis Romanesco
						</a>
						<br />
						<a
							href="https://www.weltderphysik.de/thema/chaos-und-ordnung/fraktale"
							target="_blank"
							rel="noopener noreferrer">
							Bildnachweis Romanesco
						</a>
						<br />
						<a
							href="https://commons.wikimedia.org/wiki/File:Von_Koch_curve.gif"
							target="_blank"
							rel="noopener noreferrer">
							Bildnachweis Koch Flocke
						</a>
						<br />
						<a
							href="https://commons.wikimedia.org/wiki/File:SierpinskiTriangle-ani-0-7.gif"
							target="_blank"
							rel="noopener noreferrer">
							Bildnachweis Sierpinski Dreieck
						</a>
					</div>
				</Info>
				<Fractal />
			</Card>
			<Card>
				{/* <Headline value="Visualisierung und Implementierung" /> */}
				<Visual current={props.current} />
				<Info>
					<h1>Implementierung und Visualisierung</h1>
					<p>
						Wir haben uns bei der Darstellung der Mandelbrotmenge
						für die Programmiersprache JavaScript entschieden. Im
						Folgenden gehen wir auf eine Implementationsmöglichkeit
						ein und erklären diese in den Kommentaren im Quellcode.
					</p>
					<a
						href="http://slicker.me/fractals/fractals.htm"
						target="_blank"
						rel="noopener noreferrer">
						Quellcode
					</a>
				</Info>
			</Card>
			<Card>
				<Headline value="Eine Reise in die Mandelbrotmenge" />
				<Zoom current={props.current} />
				<Info>
					<h1>Eine Reise in die Mandelbrotmenge</h1>
					<p>
						Verschiedene Darstellungen der Mandelbrotmenge greifen
						auf verschiedene Farbgebungen zurück, die einzige
						Eigenschaft die fast alle Visualisierungen teilen ist
						die Einfärbung des stabilen Bereichs in schwarz. Die
						Gestaltung der restlichen Grafik hängt von einem
						sogenannten ‚Farbindex‘ ab, welcher individuell für die
						jeweilige Visualisierung festgelegt wird.
					</p>
					<p>
						Jeder Farbe wird eine Zahl zugeordnet. Anhand der
						Iterationsschritte, die für die entsprechende Koordinate
						durchlaufen werden müssen, bis der Wert divergiert, wird
						das zugehörige Pixel mittels des Farbindex eingefärbt.
						Aus Performancegründen wird fast immer, wie auch im
						obigen Beispiel, eine Grenze für die maximalen
						Iterationen pro Pixel festgelegt.
					</p>
					<div>
						<a
							href="https://www.informatik.uni-leipzig.de/~meiler/Schuelerseiten.dir/DPlotzki/html/mndlbrt.htm"
							target="_blank"
							rel="noopener noreferrer">
							Mandelbrot-Menge - Uni Leipzig
						</a>
						<br />
						<a
							href="https://staff.fim.uni-passau.de/~zumbraegel/fractals/fracfarb.html"
							target="_blank"
							rel="noopener noreferrer">
							Jens Zumbrägel's Website - Farbdarstellungen
							komplexer Fraktale
						</a>
					</div>
				</Info>
			</Card>
			<Card>
				<Headline value="Julia-Menge" />

				<Juliaset />
				<Info>
					<h1>Julia-Menge</h1>
					<p>
						Diese wurde als erstes von Gaston Maurice Julia und
						Pierre Fatou beschrieben. Zu jedem Punkt der
						Mandelbrotmenge kann man die Julia-Menge berechnen
						lassen.
					</p>
					<p>
						Die Gemeinsamkeit zwischen Julia- und Mandelbrot Menge
						sind die stabilen und instabilen Bereiche. Ist der Punkt
						bei der Mandelbrotmenge stabil, so ist die Julia-Menge
						auch stabil. Ist der Punkt bei der Mandelbrotmenge
						unstabil, so ist dieser auch bei der Julia-Menge
						unstabil.
					</p>
					<p>
						Jedoch sticht bei der Visualisierung der Julia-Menge die
						Punktsymmetrie zum Ursprung heraus, zudem behält sie
						ihre Form, egal wie weit man in die Menge hineinzoomt.
					</p>
					<p>
						Die Grundgleichung der Julia-Menge innerhalb der
						Mandelbrotmenge lautet z = z^2 + c. Die Berechnung
						erfolgt genauso wie bei der Mandelbrotmenge, jedoch
						haben die Variablen teilweise andere Bedeutungen. Für c
						wird die Koordinate des Punktes eingesetzt, an der die
						Julia- Menge berechnet werden soll. z hängt von den
						Pixelkoordinaten ab, an denen die Julia- Menge
						gezeichnet werden soll.
					</p>
					<div>
						<a
							href="https://www.michael-holzapfel.de/themen/julia-mandelbrot/julia-mandelbrot-menge.html"
							target="_blank"
							rel="noopener noreferrer">
							michael-holzapfel.de - Julia- und Mandelbrot-Mengen
						</a>
						<br />
						<a
							href="https://www.youtube.com/watch?v=lkrARpExZkc"
							target="_blank"
							rel="noopener noreferrer">
							Wenn Mathe am schönsten ist (Juliamenge einfach
							erklärt) - Schnellgedacht
						</a>
					</div>
				</Info>
			</Card>
			<Card>
				<Headline value="Realanwendungen" />
				<RealUse />
				<Info>
					<h1>Realanwendungen</h1>
					<h2>Mandelbrot- und Julia-Menge Schlüsselaustausch</h2>
					<p>
						Durch die vielen gemeinsamen Merkmale der Mandelbrot-
						und Julia-Menge ist ein Verschlüsselungsalgorithmus auf
						Basis des Diffie-Hellman-Schlüsselaustauschs möglich,
						welcher schwieriger zu dechiffrieren ist als die
						Variante von Diffie-Hellman ohne die Erweiterung durch
						die beiden Mengen.
					</p>
					<p>
						Der Mandelbrot- und Julia-Menge Schlüsselaustausch
						verfügt über mehr Keyspace als Diffie-Hellman bei der
						gleichen Schlüsselgröße. Das heißt, der konstruierte
						Schlüssel vom Mandelbrot- und Julia-Menge
						Schlüsselaustausch hat trotz gleicher Schlüsselgröße
						mehr Möglichkeiten, wie der Schlüssel aussehen kann.
					</p>
					<p>
						Dies liegt unter anderem daran, dass die Mandelbrot- und
						Julia-Menge in ihrer Grundgleichung von einem iterativen
						n und einer Konstante c abhängt, welche als privat
						übermittelte Werte unbekannt für die Öffentlichkeit
						sind. Damit steigen die möglichen Kombinationen
						schneller ins Unendliche und sind unwahrscheinlicher zu
						brechen.
					</p>
					<div>
						<a
							href="http://paper.ijcsns.org/07_book/200702/200702B17.pdf"
							target="_blank"
							rel="noopener noreferrer">
							New Key Exchange Protocol Based on Mandelbrot and
							Julia Fractal Sets
						</a>
					</div>
					<h2>Fraktale Bildkompression</h2>
					<p>
						Es werden wiederkehrende Strukturen gesucht, dabei sind
						Transformationen wie Kontrast- und Helligkeitsanpassung,
						Rotation und Skalierung nicht problematisch. Die Suche
						nach einem bestimmten Merkmal des Bildes wird immer
						erfolgreich sein, auch wenn das Merkmal größer, heller,
						gedreht oder gestaucht ist. Dieser Vorgang wird so lange
						wiederholt, bis keine weiteren identischen Bereiche
						gefunden werden können.
					</p>
					<p>
						Durch ein iteriertes Funktionensystem wird die
						Rekonstruktion des Originalbildes schnell erreicht.
					</p>
					<p>
						Dieses Verfahren war als Konkurrent zum heute üblichen
						jpeg-Standard angetreten, dieser hatte sich allerdings
						schnell als technisch überlegen herausgestellt.
					</p>
					<img
						src={lenna}
						alt="Fraktale Bildkompression Beispiel Lenna"
					/>
					<div>
						<a
							href="http://www.sbeyer.homepage.t-online.de/anwendung/compress.html"
							target="_blank"
							rel="noopener noreferrer">
							Sbeyer - Fraktale Bildkompression
						</a>
						<a
							href="http://einstein.informatik.uni-oldenburg.de/rechnernetze/fraktal.htm"
							target="_blank"
							rel="noopener noreferrer">
							Fractal Image Compression
						</a>
					</div>
					<h2>Fraktalantenne</h2>
					<p>
						Durch die Verwendung fraktaler Strukturen, meistens
						Koch-Kurven oder Sierpinski-Dreiecke, erreichen
						Fraktalantennen eine breitbandige Sende- und
						Empfangsqualität. Diese finden gerne Anwendung in
						Smartphones, da viele Funktechnologien (Bluetooth, WLAN,
						GSM, GPS, Glonass usw.) nebeneinander arbeiten und wenig
						Platz für verschiedene Bauteile zur Verfügung steht.
						Eine Fraktalantenne erspart den Einsatz vieler anderer
						kleiner Antennen dank ihrer selbstähnlichen, fraktalen
						Struktur, welche viele Wellenlängen mit gutem
						Wirkungsgrad senden und empfangen kann.
					</p>
					<img src={fractalAntenna} alt="Fraktalantenne" />
					<div>
						<a
							href="https://www.epo.org/news-events/events/european-inventor/finalists/2014/puente_de.html"
							target="_blank"
							rel="noopener noreferrer">
							Europäisches Patentamt - Fraktalantenne
						</a>
					</div>
				</Info>
			</Card>
			<Card>
				<Headline value="Ausblick" />
				<Look />
			</Card>
			<Card>
				<Title value="Vielen Dank für Ihre Aufmerksamkeit!" />
				<SubTitle value="Fragen?" />
			</Card>
			{/* <Card>
				<EndCard />
			</Card> */}
		</>
	)
}

export default NewData
