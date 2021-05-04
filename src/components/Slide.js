import Title from "./Title"
import SubTitle from "./SubTitle"
import Headline from "./Headline"

import ExponentSequence from "./math/ExponentSequence"
import NumberLine from "./math/NumberLine"
import MyCanvas from "./threejs/MyCanvas"

import styled from "styled-components"
import MyMesh from "./threejs/MyMesh"
import MyAnimatedMesh from "./threejs/MyAnimatedMesh"

const StyledSlide = styled.section`
	width: 100%;
	height: 100%;
	flex: 0 0 auto;

	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;

	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(6, 1fr);
	gap: 1rem;
`

const Slide = (props) => {
	const item = props.item

	return (
		<StyledSlide>
			{item.title ? <Title title={item.title} /> : null}
			{item.subTitle ? <SubTitle subTitle={item.subTitle} /> : null}

			{item.num === 2 ? <ExponentSequence /> : null}
			{item.num === 3 ? <NumberLine /> : null}

			{item.num === 5 ? (
				<MyCanvas>
					<MyAnimatedMesh />
					<MyMesh position={[0, 0, 0]} />
					<MyMesh position={[-2, 0, 0]} />
				</MyCanvas>
			) : null}

			{item.headline ? <Headline headline={item.headline} /> : null}
		</StyledSlide>
	)
}

export default Slide
