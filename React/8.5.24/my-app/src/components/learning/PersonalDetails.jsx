import React, { Component } from 'react'
import "./PersonalDetails.css"


export class PersonalDetails extends Component {


  render() {
    return (
      <div className='divider'>
        <div className='details'>Noam Moskowitz</div>
        <div className='details'>0546107337</div>
        <div className='details'>noammz101@gmail.com</div>
      </div>
    )
  }
}

export default PersonalDetails
