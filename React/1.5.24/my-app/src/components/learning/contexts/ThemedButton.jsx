import React from 'react'
import themeContext from '../../../Contexts/ThemeContext'


const ThemedButton = () => {
    return (
        <div>
            <themeContext.Consumer>
                {theme => (
                    <div>
                        The ThemeContext Value is {theme}
                    </div>
                )}
            </themeContext.Consumer>
        </div>
    )
}

export default ThemedButton
