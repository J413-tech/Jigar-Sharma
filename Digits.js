import { Component } from "react";
class Digits extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            count:-1
        }
    }
    increament()
    {
        this.setState({ count:this.state.count+1
        },
        
        () => {console.log('Value of Count',this.state.count)}
        )
    }
    
    
    render()
    {
        return(
            <div>
                <h1> Count: {this.state.count}</h1>
            <div><button onClick={ ()=>this.increament()}>Increament</button></div>
            <div><button onClick={ ()=>this.decreament()}>Decreament</button></div>
            </div>  
        )
    }
        decreament()
    {
        this.setState({count:this.state.count-1}
            ,() => {console.log('Value of Count',this.state.count)}
            )
    }
}
export default Digits