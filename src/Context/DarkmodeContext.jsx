import React, { createContext, useState, useEffect } from 'react'

const DarkModeContext = createContext()

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode')
        return savedDarkMode ? JSON.parse(savedDarkMode) : [];
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>{children}</DarkModeContext.Provider>
    )
}

export default DarkModeContext;