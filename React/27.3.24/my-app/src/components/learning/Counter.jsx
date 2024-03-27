import React from 'react'
import { useState, useEffect } from 'react'
import CounterBox from './CounterBox';
import './counter.css';

export default function Counter() {

    const [counter,setCounter]=useState(0);
    const [randomNum,setRandomNum]=useState(Math.floor(Math.random()*100+1))
    
    const handleGeneratedRandomNumber= (boxRandNum)=>{
        setRandomNum(boxRandNum)
    }
    



    return (
        <div>
            <h1>Counter</h1>
            <div className='counterDisplay'>
                <div>{counter}</div>
                <div>{randomNum}</div>
                <div className='btn-row'>
                    <button onClick={()=>setCounter(counter+1)} >+</button>
                    <button onClick={()=>setCounter(counter-1)} >-</button>
                    <button onClick={()=>setCounter(0)}>לאפס</button>
                    <button onClick={()=>setRandomNum(Math.floor(Math.random()*100)+1)}>Randomize</button>
                </div>
                
            </div>
            <div className='counterBox'>
                <CounterBox number={randomNum} callback={handleGeneratedRandomNumber} />
            </div>
        </div>
    )
}
