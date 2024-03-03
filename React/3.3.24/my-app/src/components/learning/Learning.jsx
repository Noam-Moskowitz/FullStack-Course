import React from 'react'
import Clock from './clocks/Clock'
import PersonalDetails from './PersonalDetails'
import PersonalDetailsProps from './PersonalDetailsProps'
import PersonalDetailsPropsObject from './PersonalDetailsPropsObject'
import RandomNumAuto from './RandomNumAuto'
import ClockFC from './clocks/ClockFC'
import PersonalDetailsPropsFC from './PersonalDetailsPropsFC'
import PersonalDetailsPropsObjectFC from './PersonalDetailsPropsObjectFC'
import ThreeClocks from './clocks/ThreeClocks'
import EventHandling from './EventHandling'
import EventHandlingCC from './EventHandlingCC'


function Learning() {
const details={
    name:'Noam Moskowitz',
    number: '0546107337',
    email:'noammz101@gmail.com'
}

    return (
        <div>
            <h3>Learning</h3>
            <Clock date={new Date()}/>
            <PersonalDetails />
            <PersonalDetailsProps fullName="Noam Moskowitz" />
            <PersonalDetailsPropsObject details = {details}/>
            <RandomNumAuto/>
            <ClockFC date = {new Date()}/>
            <PersonalDetailsPropsFC fullName='Noam Moskowitz' />
            <PersonalDetailsPropsObjectFC person={{fullName:`Noam Moskowitz`, phone:`0546107337`, email:`noammz101@gmail.com`}} />
            <ThreeClocks/>
            <EventHandling />
            <EventHandlingCC/>
        </div>
    )
}

export default Learning
