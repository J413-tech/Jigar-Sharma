import { Component } from "react";
class Sub extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            msg:'Please Like'
        }
    }
    Like()
    {
        this.setState({
                    msg:'Liked'
        })
    }
    render()
    {
        return(
            <div>
            <h1> {this.state.msg}</h1>
            <div> <button onClick={ ()=>this.Like()}>Like</button></div>
            </div>
        )
    
    }
}
export default Sub