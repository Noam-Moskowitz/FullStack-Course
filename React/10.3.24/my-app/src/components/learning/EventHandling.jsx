import React from 'react'

export default function EventHandling() {

    const handleClick=(newName)=>{
        alert(newName);
    }

    return (
        <div>
            <button onClick={()=>handleClick(`Blud Wellingston`)}>Click Me(FC)</button>
        </div>
    )
}
