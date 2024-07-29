import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setuserinputs, updateemailinput } from "./counterSlice";
import { useNavigate } from "react-router-dom";


function Counter() {
  const regex = /^[A-Za-z]+$/;
  const regex2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regex3 = /^\+?(\d{1,4})?\s?-?\(?\d{1,4}\)?\s?-?\d{1,4}\s?-?\d{1,9}$/;


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userinput, setuserinput] = useState("");
  const [emailinput, setemailinput] = useState("")
  const [mobinput,setmobinput]=useState("")

  const Namehandle = (e) => {
    setuserinput(e.target.value);
  };



  const emailhandle = (e) => {
    setemailinput(e.target.value);

  }


  // const Mobilehandle =(e)=>{
  //     setmobinput(e.target.value);

  // }

  const Submit = () => {
    dispatch(setuserinputs(userinput))
    dispatch(updateemailinput(emailinput))
    // dispatch(updatemobinput(mobinput))

  if (regex.test(userinput)) {
    if (regex2.test(emailinput)) {

      // if(regex3.test(mobinput))

        alert("Submitted successfully");
        navigate("/Display");
      }
     else {
      alert("Invalid name.")
    }
   

  }
  else{
    alert('invalid username')
  }

  


}

  

  return (
    <>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={userinput}
          onChange={(e) => Namehandle(e)}
        />

        <lable>Email ID</lable>
        <input
          type="text"
          placeholder="Enter your Email ID"
          value={emailinput}
          onChange={(e) => emailhandle(e)}

        />

        {/* <lable>Mobile No.</lable>
        <input
          type="text"
          placeholder="Enter your Mobile No."
          value={mobinput}
          onChange={(e)=>Mobilehandle(e)}

        />
           */}




      </div>
      <button onClick={Submit}>Submit</button>
    </>
  );
}

export default Counter;
