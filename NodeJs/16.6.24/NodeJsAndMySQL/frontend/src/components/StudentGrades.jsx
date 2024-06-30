import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GeneralContext } from '../App'

export const duplicateObject=(object)=>{
    return JSON.parse(JSON.stringify(object))
}

const StudentGrades = () => {

    const {studentId}=useParams()

    const [data, setData]=useState()
    const [initialData, setInitialData]=useState()
    const {setIsLoading} = useContext(GeneralContext)

    const fetchData=async()=>{
        try {
            setIsLoading(true)
            const response = await axios.get(`http://localhost:4000/students/${studentId}`);

            setData(response.data)
            setInitialData(duplicateObject(response.data))
        } catch (error) {
            
        }finally{
            setIsLoading(false)
        }
    }

    const gradeChange=(ev,i)=>{
        const {value}=ev.target
        data.grades[i].grade=value;
        setData({...data})
    }

    const save= async()=>{
        const difference=data.grades.filter(g=>initialData.grades.find(x=>x.id===g.id).grade !==g.grade);
        try {
            setIsLoading(true)
            const response=await axios.put(`http://localhost:4000/students/${studentId}`,difference)
            setInitialData(duplicateObject(data))
        } catch (error) {
            
        }finally{
            setIsLoading(false)
        }
        
    }

    useEffect(()=>{
        fetchData()
    },[studentId])



    return (
        <div className='frame'>
            {data &&
                <div>
                    <header className='student'>
                        <h2>עריכת ציונים ל{data.user[0].firstName} {data.user[0].lastName}</h2>
                        <button
                            onClick={save}
                            className='save'
                        >שמור</button>
                    </header>
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
                                        <td>
                                            <input 
                                                className='grade'
                                                type="number" 
                                                onChange={(ev)=>gradeChange(ev,i)}
                                                value={s.grade}
                                            />    
                                        </td>
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
