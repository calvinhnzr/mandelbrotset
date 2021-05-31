import styled from "styled-components"
import MyMath from "../components/math/MyMath"

const Text = styled.p`
	grid-column: 2 / 12;
	grid-row-start: 3;
	font-size: 1.4rem;
	line-height: 1.2;
	@media only screen and (min-width: 960px) {
		font-size: 1.5rem;
	}
`

const Container = styled.div`
	grid-column: 2 / 12;
	grid-row-start: 4;

	@media only screen and (min-width: 960px) {
		width: fit-content;
	}
`

const List = styled.ul`
	list-style: none;
	& > li {
		/* outline: 1px solid white; */
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
		&::after {
			float: right;
			/* outline: 1px solid white; */
			content: " nicht lösbar!";
			font-weight: 100;
			@media only screen and (min-width: 960px) {
				margin-left: 3rem;
			}
		}
	}
	& > :last-of-type {
		margin-top: 3rem;
		color: #ea5b89;
		&::after {
			display: none;
		}
	}
`

const ComplexNumbersIntro = () => {
	return (
		<>
			<Text>Schulmathematik sagt unlösbar, was sagt die Uni?</Text>
			<Container>
				<List>
					<li>
						<MyMath>{"\\mathbb{N}:"}</MyMath>
						<span> </span>
						<MyMath>{"x+5=2"}</MyMath>
					</li>
					<li>
						<MyMath>{"\\mathbb{Z}:"}</MyMath>
						<span> </span>
						<MyMath>{"5*x=2"}</MyMath>
					</li>
					<li>
						<MyMath>{"\\mathbb{Q}:"}</MyMath>
						<span> </span>
						<MyMath>{"x*x=2"}</MyMath>
					</li>
					<li>
						<MyMath>{"\\mathbb{R}:"}</MyMath>
						<span> </span>
						<MyMath>{"x*x=-1"}</MyMath>
					</li>
					<li>
						<MyMath>{"\\mathbb{C}:"}</MyMath>
						<span> </span>
						<MyMath>{"i^2=-1"}</MyMath>
					</li>
				</List>
			</Container>
		</>
	)
}
export default ComplexNumbersIntro
