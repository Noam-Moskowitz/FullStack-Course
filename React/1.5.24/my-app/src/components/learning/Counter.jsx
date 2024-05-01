import React from 'react'
import { useState, useEffect } from 'react'
import CounterBox from './CounterBox';
import './counter.css';
import { useCounter } from '../../hooks/useCounter';

export default function Counter() {

        const [count, increment, decrement, restart]= useCounter(0);
    const [randomNum,setRandomNum]=useState(Math.floor(Math.random()*100+1))
    
    const handleGeneratedRandomNumber= (boxRandNum)=>{
        setRandomNum(boxRandNum)
    }
    



    return (
        <div>
            <h1>Counter</h1>
            <div className='counterDisplay'>
                <div>{count}</div>
                <div>{randomNum}</div>
                <div className='btn-row'>
                    <button onClick={increment} >+</button>
                    <button onClick={decrement} >-</button>
                    <button onClick={restart}>לאפס</button>
                    <button onClick={()=>setRandomNum(Math.floor(Math.random()*100)+1)}>Randomize</button>
                </div>
                
            </div>
            <div className='counterBox'>
                <CounterBox number={randomNum} callback={handleGeneratedRandomNumber} />
            </div>
        </div>
    )
}
