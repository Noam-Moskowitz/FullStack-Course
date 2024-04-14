import { useState, useEffect } from 'react'
import axios from 'axios'



const useApi = (URL,method=METHOD.GET_ALL, propsPayload=null, isOnMount=true) => {
    const [response, setResponse] = useState();
    const [error,setError] = useState();
    const [isLoading, setIsLoading]= useState(false);

    const [payload, setPayload]= useState(propsPayload);
    const [isCallAPI, setIsCallAPI]=useState(false);



        const apiCall=async()=>{
            try {
                setIsLoading(true)
                let responseData;

                // eslint-disable-next-line default-case
                switch (method) {
                    case METHOD.GET_ALL:
                        responseData = await axios.get(URL);
                        break;
                    
                    case METHOD.GET_ONE:
                        responseData = await axios.get(URL+payload.id);
                        break;

                    case METHOD.CREATE:
                        responseData = await axios.post(URL+payload);
                        break;

                    case METHOD.UPDATE:

                        break;

                    case METHOD.DELETE:

                        break;
                }

                setResponse(responseData.data)

            } catch (error) {

                setError(error.message)

            } finally {

                setIsLoading(false)

            }
        }


    useEffect(() => {
        if (isOnMount) {
        apiCall()
        }
    }, [])

    useEffect(()=>{
        if (!isOnMount) {
            apiCall()
        }
    },[isCallAPI])

    const callAPI = (inputPayload)=>{
        setPayload(inputPayload);
        setIsCallAPI(true);
    }


    return [response, error, isLoading, callAPI]
}

    export const METHOD={
        GET_ONE:`GET_ONE`,
        GET_ALL:`GET_ALL`,
        CREATE:`CREATE`,
        UPDATE:`UPDATE`,
        DELETE:`DELETE`
    }

export default useApi
