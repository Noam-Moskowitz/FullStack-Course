import React, { useContext } from 'react'
import themeContext from '../../../Contexts/ThemeContext'


const ThemedButtonHook = () => {

    const theme = useContext(themeContext);

    return (
        <div>
            <div>
                The ThemeContext Value is {theme}
            </div>
        </div>
    )
}

export default ThemedButtonHook
