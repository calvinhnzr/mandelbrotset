import { useState, createContext } from "react"

export const Context = createContext()

export const Provider = (props) => {
	const [inputOnFocus, setInputOnFocus] = useState(false)
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
