import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Registration.css";
const Registration = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();

    const navigate= useNavigate();
    const handleNavigate=()=>{
        navigate("/login");
    }
    const handleSubmit=(event)=>{
       const name = event.target.name.value
        const email = event.target.email.value;
       const password = event.target.password.value;
       const confirmPassword = event.target.confirmPassword.value;
    }
    return (
       <div className="register">
         <div className=''>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name' required/>
                <input type="email" name="email" id="" placeholder='Your Email' required/>
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="password" name="confirmPassword" id="" placeholder='Confirm Password' required/>
                <input type="submit" name="" id="" className='btn btn-primary border-0' value="Register" />
            </form>
            <p>Already have an account?<span> <Link to="/login" onClick={handleNavigate} className='text-decoration-none fw-bold'>Please Login</Link></span></p>
            {email}
        </div>
       </div>
    );
};

export default Registration;