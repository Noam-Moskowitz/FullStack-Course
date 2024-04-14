import React,{useState} from 'react'

export default function PersonalDetailsPropsFC(props) {
const [fullName, setFullName]= useState(props.fullName)

  return (
    <div>
        <h1>Personal Details - Props FC</h1>
      {fullName}
    </div>
  )
}
