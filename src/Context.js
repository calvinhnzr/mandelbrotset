import { useState, createContext } from "react"

export const Context = createContext()

export const Provider = (props) => {
	// checks if an input element is used, disable keydown eventlistener
	const [inputOnFocus, setInputOnFocus] = useState(false)
	// display current page
	const [currentPage, setCurrentPage] = useState(0)

	return (
		<Context.Provider
			value={{
				inputOnFocus,
				setInputOnFocus,
				currentPage,
				setCurrentPage,
			}}>
			{props.children}
		</Context.Provider>
	)
}
