import React, {Component} from "react";

class Refsdemo extends Component {

    constructor(props) {
      super(props)
    
      this.cdRef=null
      this.setCBRef=element =>{
        this.cdRef=element
      }
      
      }
      componentDidMount()
      {
        if(This.cdRef)
        this.cdRef.focus()
       
      }
      clickHandler = () =>{
        alert(this.inputref.current.value)
      }
      render(){
        return(
            <div>
               <input type="text" ref={this.setCBRef}/>
            </div>
        )
      }
    
    }
export default Refsdemo