// Code Keypad Component Here
import React from "react";

function Keypad (){

const change = function onChange () {
    console.log("Entering password...")
}

    return (
        <div>
            <input type="password" onChange={change}></input>
        </div>
    )
}

export default Keypad;