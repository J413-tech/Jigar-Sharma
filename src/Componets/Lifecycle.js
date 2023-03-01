import React, { Component } from 'react';
import Lifecycle2 from './Lifecycle2'
class Lifecycle extends Component{
    constructor(props){
        super(props)
        this.state={name:'Pruthu'}
        console.log('Lifecycle constuructor from Constructor')
    }
    static getDericedStateFromProps(props,status)
    {   
        console.log("lifecycle Method From getDericedStateFromProps")
        return null
    }
    shouldComponentUpdate()
    {
        console.log("lifecycle Method From ShouldCompnent Update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("lifecycle Method From getSnapshotBeforeUpdate")
        return null
    }
    static componentDidMount()
    {
            setTimeout(()=>{this.setstate({name:'Pruthu'});},2000);
            console.log("lifecycle Method From ComponentDidMount")
    }
    componentDidUpdate()
    {
        console.log('lifecycle Method From ComponentDidUpdate')
    }
    changeState =() =>
    {
        this.setState({name:'Coding'})
    }
    render(){
        console.log("lifecycle Method From render method")
        return (
            <div>
                <center>
                <h2>Lifecycle from render method</h2>
                <button onClick={this.changeState}>change State</button>
                <Lifecycle2/>
                </center>
            </div>
        )
    }
    
    
}
export default Lifecycle
