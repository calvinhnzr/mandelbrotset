import Title from "./Title"
import SubTitle from "./SubTitle"
import Headline from "./Headline"

import MyCanvas from "./threejs/MyCanvas"

import styled from "styled-components"
import MyMesh from "./threejs/MyMesh"

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

			{item.num == 5 ? (
				<MyCanvas>
					<MyMesh position={[-1.5, 0, 2]} />
					<MyMesh position={[0, 0, 1]} />
					<MyMesh position={[1.5, 0, 2]} />
				</MyCanvas>
			) : null}

			{item.headline ? <Headline headline={item.headline} /> : null}
		</StyledSlide>
	)
}

export default Slide
