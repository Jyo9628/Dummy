import React from "react";
import { useSelector } from "react-redux";





function Display() {

    let first=useSelector(state=>state.counter.userinput);
    let second=useSelector(state=>state.counter.emailinput);


    return (

        <>
            <p>Name:{first}</p>
            <p>emailid:{second}</p>
 
        </>

    )


}
export default  Display;