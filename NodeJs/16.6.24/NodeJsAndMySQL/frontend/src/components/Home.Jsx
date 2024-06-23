import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    const [data, setData]=useState([])

    const getData = async () => {
        const response=await axios.get(`http://localhost:4000/students`)

        setData(response.data)
    };

    useEffect(()=>{
        getData()
    },[])


    return (
        <div>
            <h1 className='frame'>home</h1>
            <ul>
            {data && data.map(s=>(
                <li key={s.id}>{s.firsName}</li>
            ))}
            </ul>
        </div>
    )
}

export default Home
