import React from 'react'
import useApi from '../../hooks/useApi'

const ChuckNorrisJokes = () => {
    const [response, fetchData] = useApi(`https://api.chucknorris.io/jokes/random`)




    return (
        <div>
            <div>{response ? <p>{response.value}</p> : <p>Click the button to generate a joke</p>}</div>
            <div><button onClick={fetchData}>Generate New Joke</button></div>
        </div>
    )
}

export default ChuckNorrisJokes
