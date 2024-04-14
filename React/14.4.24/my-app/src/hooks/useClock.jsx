import { useState, useEffect } from "react";

const useClock = (timeZone = `Asia/Jerusalem`) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [time])

    return [time.toLocaleString(`en-US`, { timeZone: timeZone, })]
}

export default useClock