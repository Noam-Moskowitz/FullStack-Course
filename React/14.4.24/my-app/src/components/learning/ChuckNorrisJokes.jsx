/* import React, { useEffect } from 'react'
import useApi from '../../hooks/useApi'

const ChuckNorrisJokes = () => {
    const [response, error, fetchData] = useApi()

    useEffect(()=>{
        fetchData(`https://api.chucknorris.io/jokes/random`);
    },[])


    return (
        <div>
            
            <div>{response && response.value}</div>
            <div><button onClick={() => fetchData(`https://api.chucknorris.io/jokes/random`)}>Generate New Joke</button></div>
        </div>
    )
}

export default ChuckNorrisJokes
 */