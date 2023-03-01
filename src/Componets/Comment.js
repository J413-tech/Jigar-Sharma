import { Component } from "react";
class Sub extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            msg:'Please Comment'
        }
    }
    Comment()
    {
        this.setState({
                    msg:'Commented'
        })
    }
    render()
    {
        return(
            <div>
            <h1> {this.state.msg}</h1>
            <div> <button onClick={ ()=>this.Comment()}>Comment</button></div>
            </div>
        )
    
    }
}
export default Sub