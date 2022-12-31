import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function Login(){

    const [user , setUser] = useState("");
    const [password , setPassword] = useState("");
    const [useErr, setUseErr] = useState(false);
    const [ passErr, setPassErr] = useState(false);

    const navigate =  useNavigate(); 

    function submitFun(e){
        if((user.length>2 && password.length>2)){
            localStorage.setItem('user',user)
            //alert("type correct value");
            console.log(user);
            navigate("/nav");
        }
        else{
            //alert("all good :)")
            console.log(user,password);
        }
     e.preventDefault();
    }

    function userfun(e){
   let item = e.target.value;
   if(!item.includes("@")){
    setUseErr(true);
   }
   else{
    setUseErr(false)
   }
   setUser(item)
    }

    function passfun(e){
        let item = e.target.value;
        if(item.length<3){
            setPassErr(true);
        }
        else{
            setPassErr(false);
        }
        setPassword(item)
    }

    return(
        <div>
            <form onSubmit={submitFun} style={{ margin: "50px", display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
            <h1>form validation</h1>
            <label  className="form-label" htmlFor="form2Example1">User Id: </label>
            <input type="email" className="form-control" placeholder="Enter user id" onChange={userfun}/>{useErr?<span style={{color:"red"}}>user type invalid</span>:""}<br/><br/>
            <label className="form-label" htmlFor="form2Example2">password: </label>
            <input type="password" className="form-control" placeholder="Enter user password" onChange={passfun}/>{passErr?<span style={{color:"red"}}>invalid password</span>:""}<br/><br/>
            <button type="submit" className="btn btn-primary btn-block mb-4">login</button>
            </form>
        </div>
    )
}




