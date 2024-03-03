import React, {useState, useEffect} from 'react'

export default function ClockFC(props) {
    const [ date , setDate ] = useState(props.date);


    useEffect(()=>{
    const timerID = setInterval(()=>{
            setDate(new Date())
        },1000);

        return ()=>{
        clearInterval(timerID)
        }
        
    },[])

    return (
        <div>
            { date.toString() }
        </div>
    )
}
