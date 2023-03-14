import React, {Component} from "react";
import UpdatedComponent from './withCounter'
class ClickCounter extends Component {

    render(){
        const {count,incr}=this.props
        return(
            <div>
                <button onClick={incr}>Click  {count} Times </button>
            </div>
        )
    }  
}

export default UpdatedComponent(ClickCounter)