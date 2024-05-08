import React, { useContext, useEffect, useState } from 'react'
import themeContext from '../../../Contexts/ThemeContext'


const ThemedButtonHookSetter = () => {

    const [theme, setTheme] = useContext(themeContext);

  

    return (
        <div>
            <button style={{ backgroundColor: theme }}
                onClick={() => setTheme(theme===`darkgrey`? `white`: `darkgrey`)}>Click Me</button>
        </div>
    )
}

export default ThemedButtonHookSetter
