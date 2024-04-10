import React from 'react'
import useClock from '../../hooks/useClock'

const ClockHook = () => {
    /* America/New_York */
    /* Asia/Jerusalem */
    /* America/Phoenix */
    const time = useClock(`America/New_York`);
    return (
        <div>
            <h2>Clock Using Hook</h2>
            <div>{time}</div>
        </div>
    )
}

export default ClockHook
