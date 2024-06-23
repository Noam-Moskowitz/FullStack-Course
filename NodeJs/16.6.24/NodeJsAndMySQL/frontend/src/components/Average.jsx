import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

const Average = () => {
    const [data, setData]=useState([])
    const [lowest,setLowest]=useState();
    const [highest,setHighest]=useState();

    const navigate=useNavigate();

    const getData = async () => {
        const response=await axios.get(`http://localhost:4000/students/average`)

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
                            <td></td>
                            <td>ממוצע</td>
                            <td>שם משפחה</td>
                            <td>שם פרטי</td>
                            <td>#</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((s,i)=>(
                            <tr key={s.id}>
                                <td>
                                    <button 
                                        className='edit'
                                        onClick={()=>navigate(`/student/${s.id}/grades`)}
                                    >✏️</button>
                                </td>
                                <td
                                    className={s.average==highest?`max`:s.average==lowest?`min`:``}
                                >{s.average}</td>
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
