import { useState, useEffect } from 'react'
import axios from 'axios'



const useApi = () => {
    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const [URL, setURL] = useState()
    const [method, setMethod] = useState()
    const [payload, setPayload] = useState();
    const [isCallAPI, setIsCallAPI] = useState(false);



    const apiCall = async () => {
        try {
            setIsLoading(true)
            let responseData;

            // eslint-disable-next-line default-case
            switch (method) {
                case METHOD.GET_ALL:
                    responseData = await axios.get(URL);
                    break;

                case METHOD.GET_ONE:
                    responseData = await axios.get(URL + payload.id);
                    break;

                case METHOD.CREATE:
                    responseData = await axios.post(URL, payload);
                    break;

                case METHOD.UPDATE:
                    responseData = await axios.put(URL + payload.id, payload);
                    break;

                case METHOD.DELETE:
                    responseData = await axios.delete(URL + payload.id);
                    break;
            }

            setResponse(responseData.data)

        } catch (error) {

            setError(error.message)

        } finally {

            setIsLoading(false)

            setIsCallAPI(false)

        }
    }




    useEffect(() => {
        if (isCallAPI) {
            apiCall()
        }
    }, [isCallAPI])

    const callAPI = (URL, method, inputPayload) => {
        setURL(URL);
        setMethod(method)
        setPayload(inputPayload);
        setIsCallAPI(true);
    }


    return {response, error, isLoading, callAPI, method}
}

export const METHOD = {
    GET_ONE: `GET_ONE`,
    GET_ALL: `GET_ALL`,
    CREATE: `CREATE`,
    UPDATE: `UPDATE`,
    DELETE: `DELETE`
}

export default useApi
