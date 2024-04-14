import { useState } from "react"

const useRandomizer=(initalValue=[])=>{
    const [randomList,setRandomList]=useState(initalValue);

    const addRandomNumber = ()=> setRandomList([...randomList, Math.floor(Math.random()*1000)]);

    return [ randomList, addRandomNumber]
}

export default useRandomizer