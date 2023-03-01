import React,{ Component } from 'react'

class Greetingsjsx extends Component
{
    render()
    {
       
        this.setstate={ isLoggedIn: true  }
        let message
        if(this.state.isLoggedIn)
            {  
        message=<div>Welcom Pruthu</div>
        
     }
     else 
         {   
            message=<div> Welcom Guest</div>
         }
     return<div>{message}</div>
         
}

}
export default Greetingsjsx
