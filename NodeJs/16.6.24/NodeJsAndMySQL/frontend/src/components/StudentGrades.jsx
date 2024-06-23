import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const StudentGrades = () => {

    const {studentId}=useParams()

    const [data, setData]=useState()

    const fetchData=async()=>{
        const response = await axios.get(`http://localhost:4000/students/${studentId}`);

        setData(response.data)
        }

    useEffect(()=>{
        fetchData()
    },[studentId])



    return (
        <div className='frame'>
            {data &&
                <div>
                    <h2>עריכת ציונים ל{data.user[0].firstName} {data.user[0].lastName}</h2>
                    <table>
                    <thead>
                        <tr>
                            <td>ציונים</td>
                            <td>מבחן</td>
                            <td>#</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.grades.map((s, i) => 
                                    <tr key={s.id}>
                                        <td>{s.grade}</td>
                                        <td>{s.name}</td>
                                        <td>{i + 1}</td>

                                    </tr>)}
                </tbody>
                </table>
                </div>
            }
        </div>
    )
}

export default StudentGrades
