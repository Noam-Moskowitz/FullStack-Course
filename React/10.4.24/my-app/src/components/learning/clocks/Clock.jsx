import React, { Component } from 'react';

class Clock extends Component{
    //Model
    timerID=null;

    //Contrller
    //initialize the `state` object
constructor(props){
    super(props);
    this.state={
        date: props.date
    };
}
    
    componentDidMount(){
        this.timerID= setInterval(()=>{
        this.setState({
            date: new Date()
        })
        },1000)
    }


    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    //View
    render(){
        return (
        <div>
            <div>Clock</div>
            <div>{this.state.date.toLocaleTimeString()}</div>
        </div>
        )
    }
}

export default Clock