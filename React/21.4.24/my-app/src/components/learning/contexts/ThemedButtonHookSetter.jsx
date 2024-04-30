import React, { useContext } from 'react'
import themeContext from '../../../Contexts/ThemeContext'


const ThemedButtonHookSetter = () => {

    const [theme, setTheme] = useContext(themeContext);

    return (
        <div>
            <button style={{ backgroundColor: theme }}
                onClick={() => setTheme(`black`)}>Click Me</button>
        </div>
    )
}

export default ThemedButtonHookSetter
