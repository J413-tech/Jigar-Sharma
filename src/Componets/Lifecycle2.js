import React, { Component } from 'react';
class Lifecycle2 extends Component{
    constructor(props){
        super(props)
        this.state={name:'Pruthu'}
        console.log('Lifecycle 2 constuructor from Constructor')
    }
    static getDericedStateFromProps(props,status)
    {   
        console.log("lifecycle 2 Method From getDericedStateFromProps")
        return null
    }
    shouldComponentUpdate()
    {
        console.log("lifecycle 2 Method From ShouldCompnent Update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("lifecycle 2 Method From getSnapshotBeforeUpdate")
        return null
    }
    static componentDidMount()
    {
            // setTimeout(()=>{this.setstate({name:'Pruthu'});},2000);
            console.log("lifecycle 2 Method From ComponentDidMount")
    }
    componentDidUpdate()
    {
        console.log('lifecycle 2 Method From ComponentDidUpdate')
    }
    render(){
        console.log("lifecycle 2 Method From render Method")
        return(
            <div>
                <h2>lifecycle 2 Method From render method</h2>
            </div>
        )
    }
        
}
export default Lifecycle2