import { useState } from 'react'
import axios from 'axios'

const useApi = () => {
    const [response, setResponse] = useState();


    const fetchData = async (URL) => {
        const response = await axios.get(URL);

        setResponse(response.data);
    }



    return [response, fetchData]
}

export default useApi
