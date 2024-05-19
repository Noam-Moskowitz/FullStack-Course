import React from 'react'
import { useEffect, useState } from 'react'


export default function ClockTZ({timezone,cityName}) {
    const [currentTime,setCurrentime]=useState(new Date())

    useEffect(()=>{
        const timerID=setInterval(()=>{
            setCurrentime(new Date())
        },1000)
        
        return ()=>{
            clearInterval(timerID)
        }
    },[])

    timezone=timezone||"Asia/Jerusalem";
    cityName=cityName||"Jerusalem";




    return (
        <div>
            <div>{cityName}: {currentTime.toLocaleString(`en-US`,{timeZone:timezone})}</div>
        </div>
    )
}
