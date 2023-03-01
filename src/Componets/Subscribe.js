import { Component } from "react";
class Subject extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            msg:'Welcome'
        }
    }
    subscribe()
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
            <div> <button onClick={ ()=>this.subscribe()}>Subscribe</button></div>
            </div>
        )
    
    }
}
export default Subject