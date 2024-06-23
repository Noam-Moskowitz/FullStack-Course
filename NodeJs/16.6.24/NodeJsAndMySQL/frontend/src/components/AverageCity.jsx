import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css'

const AverageCity = () => {
    const [data, setData]=useState([])
    const [lowest,setLowest]=useState();
    const [highest,setHighest]=useState();

    const getData = async () => {
        const response=await axios.get(`http://localhost:4000/students/city/average`)

        setData(response.data)
    };

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        const numbers= data.map(d=>+d.average)

        setLowest(Math.min(...numbers))
        setHighest(Math.max(...numbers))

    },[data])


    return (
        <div>
                <table
                    style={{textAlign:`center`}}
                >
                    <thead>
                        <tr>
                            <td>ממוצע</td>
                            <td>עיר</td>
                            <td>#</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((s,i)=>(
                            <tr key={i}>
                                <td
                                    className={s.average==highest?`max`:s.average==lowest?`min`:``}
                                >{s.average}</td>
                                <td>{s.city}</td>
                                <td>{i+1}</td>
                            </tr>
                        ))}
                </tbody>
                </table>
        </div>
    )
}

export default AverageCity
