import React, {Component, PureComponent} from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Jigar'
      }
    }
    componentDidMount()
    {
        setInterval(()=>{this.setState({name:'Jigar'})},2000)
    
    }
    render(){
        console.log('*****Parent Component*****')
    return(
        <div>
        Parent Component
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name}></MemoComp>

        </div>
 )   
    }
}
export default ParentComp
