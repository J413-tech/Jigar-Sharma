import { Component } from "react";
class Sub extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            msg:'Please Subscribed'
        }
    }
    Subscribe()
    {
        this.setState({
                    msg:'Subscribed'
        })
    }
    render()
    {
        return(
            <div>
            <h1> {this.state.msg}</h1>
            <div> <button onClick={ ()=>this.Subscribe()}>Subscribe</button></div>
            </div>
        )
    
    }
}
export default Sub