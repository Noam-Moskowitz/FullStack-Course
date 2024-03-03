import React, { Component } from 'react'

export default class EventHandlingCC extends Component {

    name = `Noam Moskowitz` 


    handleClick(newName){
        alert(newName)
    }

    render() {
        return (
            <div>
            <button onClick={()=>this.handleClick(`Jonathan Bartholemu III`)}>Click Me (CC)</button>
            {/* <button onClick={this.handleClick.bind(this)}>Click Me</button> */}
            </div>
        )
    }
}
