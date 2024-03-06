import React, { useState, useEffect } from 'react';
import './counter.css';

const CounterBox = (props) => {
    const [propsNum, setPropsNum] = useState(props.num);
    const [num, setNum] = useState(props.num);

    // 1. After component was successfully mounted
    useEffect(() => {
        console.log('Mounted');
    }, []);

    // 2. Listening to changes to a variable data
    useEffect(() => {
        setPropsNum(props.num); // --> 'num' will be updated
    }, [props.num]);

    useEffect(() => {
        if (propsNum) {
            setNum(propsNum);
        }
    }, [propsNum]);

    useEffect(() => {
        props.callback(num);
        setPropsNum(null);
    }, [num]);

    // 3. After every render
    useEffect(() => {
        console.log('After Rendered')
    });

    const handleClick = () => {
        setNum(Math.floor(Math.random() * 1000000 + 1)); // Async call
    }

    return (
        <div className='box'>
            Number: {num}<br/>
            <button onClick={handleClick}>Generate Child Random Number</button>
        </div>
    )
}

export default CounterBox