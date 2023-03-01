import React,{ File } from "react"

class UserGreeting extends File
{

constructor(props){
    super(props)

    this.state = {
        isloggedIn: true
    }
}

render() {
    /////////////////////////////////////////////////////////Using if else approach
    if (this.state.isloggedIn)
    {
        return(
            <div>Welocome Jigar</div>
        )

    }
    else{
        return(
            <div>Welocome Guest</div>
        )
    }

// //////////////////////////////////////////////////////////////////////// using jsx variable
// let message
// if(this.state.isloggerIn)
// {
//     meassage=<div>Welcome Jigar</div>
// }
// else
// {
//     meassage=<div>Welcome Guest</div>
// }

// return <div>{message}</div>

// /////////////////////////////////////////////////////////////////////// ternary operator

// return(
//     this.state.isLoggedIn ? (<div>Welcome Jigar</div>):(<div>Welcome Guest</div>)
//     )
//////////////////////////////////////////////////////////// Short circularer oprator
// return this.state.isLoggedIn && <div>Welcome Jigar</div>
}
}

 export default UserGreeting