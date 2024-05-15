import React, { useState } from "react";

const themeContext = React.createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(`light`)

    return (
        <themeContext.Provider value={[theme, setTheme]}>
            {children}
        </themeContext.Provider>
    )
}

export default themeContext;