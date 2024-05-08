import { useState } from "react";

export const useCounter=(initalValue=0)=>{
        const [count, setCount]= useState(initalValue);

        const increment = ()=> setCount(count+1);
        const decrement = ()=> setCount(count-1);
        const restart = ()=> setCount(0)

        return[count, increment, decrement, restart]
    };