import React from 'react'
import useRandomizer from '../../../hooks/useRandomizer'

const RandomNumber = () => {

    const [randomList, addRandomNumber]=useRandomizer()

    return (
        <div>
            <table>
                <thead>
                    <tr>
                            {randomList.map(number=>(
                                <td key={number}>-{number}-</td>
                            ))}
                        </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button onClick={addRandomNumber}>Add Number</button>
                            </td>
                        </tr>
                    </tbody>
            </table>
        </div>
    )
}

export default RandomNumber
