import { Component } from "react";
class Sub extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            msg:'Please Share'
        }
    }
    Share()
    {
        this.setState({
                    msg:'Shared'
        })
    }
    render()
    {
        return(
            <div>
            <h1> {this.state.msg}</h1>
            <div> <button onClick={ ()=>this.Share()}>Share</button></div>
            </div>
        )
    
    }
}
export default Sub