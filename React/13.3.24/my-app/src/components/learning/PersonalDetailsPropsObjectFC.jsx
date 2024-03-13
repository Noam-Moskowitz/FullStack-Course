import React,{useState} from 'react'

export default function PersonalDetailsPropsObjectFC(props) {
    const[person, setPerson]= useState(props.person);
    return (
        <div>
            <h1>Personal Details - Props Object FC</h1>
            <div>
            <div>{person.fullName}</div>
            <div>{person.phone}</div>
            <div>{person.email}</div>
            </div>
        </div>
    )
}
