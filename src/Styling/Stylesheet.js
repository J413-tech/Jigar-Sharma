import React from "react";

function Stylesheet(props){
    let className=props.primary ? 'primary' : ''
    return(
        <div>
            <h1 className={`${className} font-xl`}> This is a way of coding!! </h1>
        </div>
    )
}
export default Stylesheet