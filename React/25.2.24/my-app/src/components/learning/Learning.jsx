import React from 'react'
import Clock from './Clock'
import PersonalDetails from './PersonalDetails'
import PersonalDetailsProps from './PersonalDetailsProps'
import PersonalDetailsPropsObject from './PersonalDetailsPropsObject'


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
        </div>
    )
}

export default Learning
