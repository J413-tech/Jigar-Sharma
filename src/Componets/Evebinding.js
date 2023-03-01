import React, { Component } from "react";

class Evebinding extends Component
{constructor(props){
    super(props)
    this.state={msg:'hello'}
    this.clickhandler=this.clickhandler.bind(this)
}
clickhandler()
{
    this.setState({
        msg:'goodbye'
    })
}
render(){
    return(
        <div>

        <div> {this.state.msg}</div>
        {/* <button onClick={this.clickhandler.bind(this)}>click</button>
        <button onClick={ ()=>this.clickhandler()}>click</button> */}

        <button onClick={this.clickhandler}>Click</button>
        </div>)
    }
}
export default Evebinding
