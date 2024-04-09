import { useState } from 'react'
import axios from 'axios'

const useChuckNorrisApi = () => {
    const [joke, setJoke] = useState();


    const fetchData = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');

        setJoke(response.data.value);
    }



    return [joke, fetchData]
}

export default useChuckNorrisApi
