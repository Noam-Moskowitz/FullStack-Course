import React from 'react'
import ClockTZ from './ClockTZ'

export default function ThreeClocks() {
  return (
    <div>
        <h1>Three Clocks</h1>
        <ClockTZ timezone='America/New_York'  cityName="New York" />
        <ClockTZ timezone='Australia/Melbourne'  cityName="Melbourne" />
        <ClockTZ timezone='Asia/Jerusalem'  cityName="Tel Aviv" />

    </div>
  )
}
