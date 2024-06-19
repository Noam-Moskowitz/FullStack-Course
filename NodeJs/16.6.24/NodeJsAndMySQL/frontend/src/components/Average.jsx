import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'

const Average = () => {
    const [data, setData]=useState([])

    const getData = async () => {
        const response=await axios.get(`http://localhost:4000/students/average`)

        setData(response.data)
    };

    useEffect(()=>{
        getData()
    },[])


    return (
        <div>
                <table
                    style={{textAlign:`center`}}
                >
                    <thead>
                        <tr>
                            <td>ממוצע</td>
                            <td>שם משפחה</td>
                            <td>שם פרטי</td>
                            <td>#</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((s,i)=>(
                            <tr key={i}>
                                <td>{s.average}</td>
                                <td>{s.lastName}</td>
                                <td>{s.firstName}</td>
                                <td>{i+1}</td>
                            </tr>
                        ))}
                </tbody>
                </table>
        </div>
    )
}

export default Average
