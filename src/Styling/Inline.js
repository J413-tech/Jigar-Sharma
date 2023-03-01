import React from "react"
import '../appStyles.css'

const heading={
    fontSize:'62px',
    color:'blue'
}
function Inline(){
    return(
        <div>
            <h1 style={heading}>Inline CSS always here for me</h1>
            <h1 className='error'>error</h1>
             {/* <h1 className={Styles.succes}>Success</h1> */}
        </div>
    )
}
export default Inline