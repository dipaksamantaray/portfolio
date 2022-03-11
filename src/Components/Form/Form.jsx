import React,{useState} from "react"

import "./Form.css";

const Form = ()=>{
 
      const[enteredName,setEnteredName]= useState("")
      const[enteredEmail,setEnteredEmail]= useState("")
      const[enteredMessage,setEnteredMessage]= useState("")

     const submitHandler = (e)=>{

        e.preventDeault()
        console.log("submitted")
     }



    return(
<div>
    <form onSubmit={submitHandler}>
        <div className="form_input">
            <input tupe="text" placeholder="Your Name" value={enteredName} onChange={e=>
            setEnteredName(e.target.value)}/>
            </div>

            <div className="form_input">
            <input tupe="email" placeholder="Your Email" value={enteredEmail} onChange={e=>
            setEnteredEmail(e.target.value)}/>
            </div>
            

            <div className="form_input">
           <textarea placeholder="Write Message" value={enteredMessage} onChange={e=>
            setEnteredMessage(e.target.value)}></textarea>
            </div>
            <button className="submit_btn" type="submit"> 
                 Submit
            </button>
        </form>
    </div>
    );
};
export default Form;
