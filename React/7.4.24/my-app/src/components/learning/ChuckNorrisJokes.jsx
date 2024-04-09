import React from 'react'
import useChuckNorrisApi from '../../hooks/useChuckNorrisApi'

const ChuckNorrisJokes = () => {
    const [joke, fetchData] = useChuckNorrisApi()




    return (
        <div>
            <div>{joke ? <p>{joke}</p> : <p>Click the button to generate a joke</p>}</div>
            <div><button onClick={fetchData}>Generate New Joke</button></div>
        </div>
    )
}

export default ChuckNorrisJokes
