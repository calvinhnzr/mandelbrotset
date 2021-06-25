import { useState, useEffect } from "react"
import styled from "styled-components"
import { BiFullscreen } from "react-icons/bi"
import { ImGithub, ImTwitter } from "react-icons/im"

const Social = styled.div`
	/* position: absolute;
	bottom: 3rem;
	left: 3rem; */

	cursor: pointer;
	display: flex;
	svg {
		transition: 0.2s ease-in-out;
		height: 2.5rem;
		width: 2.5rem;
		color: white;
		opacity: 0.2;
		:hover {
			opacity: 1;
		}
		:first-of-type {
			margin-right: 1rem;
		}
	}
`

const FullScreen = styled.label`
	height: 3rem;
	width: 3rem;
	cursor: pointer;
	svg {
		height: 100%;
		width: 100%;
		color: #65d677;
	}
	input {
		display: none;
	}
`

const Row = styled.div`
	/* outline: 1px solid white; */
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 3rem;
	right: 3rem;
	left: 3rem;
	width: auto;
	justify-content: space-between;
	p {
		margin-right: 2rem;
		font-weight: 100;
		letter-spacing: 1px;
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.7);
	}
`

const Keys = () => {
	const [toggleFullScreen, settoggleFullScreen] = useState(false)
	var elem = document.documentElement

	function openFullscreen() {
		settoggleFullScreen(true)
		if (elem.requestFullscreen) {
			elem.requestFullscreen()
		} else if (elem.webkitRequestFullscreen) {
			/* Safari */
			elem.webkitRequestFullscreen()
		} else if (elem.msRequestFullscreen) {
			/* IE11 */
			elem.msRequestFullscreen()
		}
	}

	function closeFullscreen() {
		settoggleFullScreen(false)
		if (document.exitFullscreen) {
			document.exitFullscreen()
		} else if (document.webkitExitFullscreen) {
			/* Safari */
			document.webkitExitFullscreen()
		} else if (document.msExitFullscreen) {
			/* IE11 */
			document.msExitFullscreen()
		}
	}

	return (
		<>
			<Row>
				<Social>
					<a
						href="https://github.com/calvinhnzr"
						target="_blank"
						rel="noopener noreferrer">
						<ImGithub />
					</a>
					<a
						href="https://twitter.com/calvinhnzr"
						target="_blank"
						rel="noopener noreferrer">
						<ImTwitter />
					</a>
				</Social>
				<p>Benutze die linke oder rechte Pfeiltaste zum Navigieren.</p>
				<FullScreen>
					<BiFullscreen />
					<input
						type="button"
						onClick={() =>
							toggleFullScreen
								? closeFullscreen()
								: openFullscreen()
						}
					/>
				</FullScreen>
			</Row>
		</>
	)
}

export default Keys
