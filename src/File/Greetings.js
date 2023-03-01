import React,{Component} from "react"

class Greetings extends Component 
    {
        constructor(props)
        {
            super(props) 
            this.state={ isLoggedIn: true  }
        }
        render()
        {
            if(this.state.isLoggedIn)
                {
                return(<div><h1>Welcom Pruthu</h1></div>)
                }
            else
             {
                    return(<div><h1>Welcome Guest</h1></div>)
             }
            
        }

    
    }
    export default Greetings

    
    
    
    
    
    
    
    
