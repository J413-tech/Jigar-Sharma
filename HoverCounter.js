import React, { Component } from "react";
import UpdatedComponent from './withCounter'
class HoverCounter extends Component{
    render() {
        const {count,incr}=this.props
        return(
            <div>
            <h2 onMouseOver={incr}> Hovered  {count} Times </h2>
        </div>
        )
    }
}
export default UpdatedComponent(HoverCounter)