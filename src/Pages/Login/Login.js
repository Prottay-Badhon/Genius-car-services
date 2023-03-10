import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const handleSubmit=(event)=>{
        event.preventDefault();
        const email= emailRef.current.value;
        const password= passwordRef.current.value;
    }
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate("/register")
    }
  return (
    <div className="container  my-5 w-50 mx-auto">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p>New to genius car?<span> <Link to="/register" onClick={handleNavigate} className='text-decoration-none fw-bold'>Please Register</Link></span></p>
    </div>
  );
};

export default Login;
