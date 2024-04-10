import { useState, useEffect } from 'react'
import axios from 'axios'

const useApi = (URL) => {
    const [response, setResponse] = useState();
    const [error,setError] = useState();
    const [isLoading, setIsLoading]= useState(false);

        const fetchData= async()=>{
            try {
                setIsLoading(true)
                const response = await axios.get(URL);
                setResponse(response.data)

            } catch (err) {
                setError(err.message)
            } finally{
                setIsLoading(false)
            }
        
        };

        const postData=async(data)=>{
            try {
                setIsLoading(true)
                const response= await axios.post(URL, data);
            } catch (error) {
                setError(error.message)
            }finally{
                setIsLoading(false)
            }
        }

    useEffect(() => {

        fetchData()
    }, [])




    return [response, error, isLoading, fetchData, postData]
}

export default useApi
