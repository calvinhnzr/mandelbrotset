import { useState, createContext } from "react"

export const Context = createContext()

export const Provider = (props) => {
	// checks if an input element is used, disable keydown eventlistener
	const [inputOnFocus, setInputOnFocus] = useState(false)
	// display current page
	const [currentPage, setCurrentPage] = useState(0)
	const [hasTouch, setHasTouch] = useState(false)

	return (
		<Context.Provider
			value={{
				inputOnFocus,
				setInputOnFocus,
				currentPage,
				setCurrentPage,
				hasTouch,
				setHasTouch,
			}}>
			{props.children}
		</Context.Provider>
	)
}
