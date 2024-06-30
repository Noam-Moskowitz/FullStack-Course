import React, { useContext, useEffect, useState } from 'react'
import { GeneralContext } from '../App'

const DashBoard = () => {
    const [data,setData]=useState()
    const {setIsLoading}=useContext(GeneralContext)

    useEffect(()=>{
        const url = `http://localhost:4000/dashboard/`;

        setIsLoading(true)

        Promise.all([
            fetch(`${url}students/amount`).then(res=>res.text()),
            fetch(`${url}tests/avg`).then(res=>res.text()),
            fetch(`${url}cities/amount`).then(res=>res.text()),
            fetch(`${url}cities/amount`).then(res=>res.text()),
            fetch(`${url}students/birthday`).then(res=>res.json()),
            fetch(`${url}cities/grades/highest`).then(res=>res.json()),
            fetch(`${url}stuents/grades/highest`).then(res=>res.json()),
        ]).
        then(result=>{
            setData(result);
        }).
        finally(()=>setIsLoading(false))
    },[])

    return (
    <>
            {
                data &&
                <div className="frame">
                    <div className='Dashboard'>
                        <div className='card'>
                            <header>כמות תלמידים</header>
                            <div>{data[0]}</div>
                        </div>

                        <div className='card'>
                            <header>ממוצע ציונים</header>
                            <div>{data[1]}</div>
                        </div>

                        <div className='card'>
                            <header>כמות ערים</header>
                            <div>{data[2]}</div>
                        </div>

                        <div className='card'>
                            <header>כמות ערים</header>
                            <div>{data[3]}</div>
                        </div>

                        <div className='card'>
                            <header>תלמיד מצטיין</header>
                            <div>
                                {data[6].firstName} {data[6].lastName}
                                <br /><small>({data[6].grade})</small>
                            </div>
                        </div>

                        <div className='card'>
                            <header>עיר מצטיינת</header>
                            <div>
                                {data[5].city}
                                <br /><small>({data[5].grade})</small>
                            </div>
                        </div>

                        <div className='card'>
                            <header>ימי הולדת החודש</header>
                            <ul>
                                {
                                    data[4].map(s => 
                                        <li key={s.id}>{s.firstName} {s.lastName} ({s.age})</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DashBoard
