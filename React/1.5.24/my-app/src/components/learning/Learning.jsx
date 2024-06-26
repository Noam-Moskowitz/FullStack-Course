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
import Counter from './Counter'
import RandomNumber from './RandomNumber/RandomNumber'
import AccountingUsingHook from './accountingUsingHook/AccountingUsingHook'
import ClockHook from './ClockHook'
import ProductListApi from './API/ProductListApi'
import ThemedButton from './contexts/ThemedButton'
import ThemedButtonHook from './contexts/ThemedButtonHook'
import ThemedButtonHookSetter from './contexts/ThemedButtonHookSetter'
import ToDos from './ToDo\'s/ToDos'
import AddTodo from './ToDo\'s/AddTodo'


function Learning() {
    const details = {
        name: 'Noam Moskowitz',
        number: '0546107337',
        email: 'noammz101@gmail.com'
    }

    return (
        <div>
            <h3>Learning</h3>
            <h4>Add A Tod</h4>
            <AddTodo/>
            <ToDos/>
            <ThemedButton />
            <ThemedButtonHook />
            <ThemedButtonHookSetter />
            <ProductListApi />
            <ClockHook />
            <AccountingUsingHook />
            <RandomNumber />
            <Clock date={new Date()} />
            <PersonalDetails />
            <PersonalDetailsProps fullName="Noam Moskowitz" />
            <PersonalDetailsPropsObject details={details} />
            <RandomNumAuto />
            <ClockFC date={new Date()} />
            <PersonalDetailsPropsFC fullName='Noam Moskowitz' />
            <PersonalDetailsPropsObjectFC person={{ fullName: `Noam Moskowitz`, phone: `0546107337`, email: `noammz101@gmail.com` }} />
            <ThreeClocks />
            <EventHandling />
            <EventHandlingCC />
            <Counter />
        </div>
    )
}

export default Learning
