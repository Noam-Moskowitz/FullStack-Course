import React, { Component } from 'react'
import "./RandomNumAuto.css"

export default class RandomNumAuto extends Component {
randomNumId=null;
    constructor(){
        super()
this.state={randomNum:Math.floor(Math.random()*10)}
    }

    componentDidMount(){
     
           this.randomNumId= setInterval(()=>{
                this.setState({randomNum:Math.floor(Math.random()*10)})
            },2000)

    }

    componentWillUnmount(){
      clearInterval(this.randomNumId)
    }

  render() {
    return (
      <div>
        <h1>This is the random number generator</h1>
        <div className='randomNum'>{this.state.randomNum}</div>
      </div>
    )
  }
}
