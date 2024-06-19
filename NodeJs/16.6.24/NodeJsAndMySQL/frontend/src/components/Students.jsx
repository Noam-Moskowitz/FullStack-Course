import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'

const Students = () => {
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
                <table
                    style={{textAlign:`center`}}
                >
                    <thead>
                        <tr>
                            <td>תאריך לידה</td>
                            <td>עיר</td>
                            <td>מס טלפון</td>
                            <td>שם משפחה</td>
                            <td>שם פרטי</td>
                            <td>#</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((s,i)=>(
                            <tr key={s.id}>
                                <td>{moment(s.birthday).format('DD/MM/YYYY')}</td>
                                <td>{s.city}</td>
                                <td>{s.phone}</td>
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

export default Students
