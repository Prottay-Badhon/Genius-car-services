import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
const {id,name,price,description,img}= props.service;
const navigate=useNavigate();
const handleNavigate=(id)=>{
   navigate("/service-detail/"+id);
}
    return (
        <div className='service' style={{width: "18rem"}}>
            <img src={img} alt="" className='w-100'/>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button className='btn btn-primary my-4' onClick={()=>handleNavigate(id)}>{name}</button>
        </div>
    );
};

export default Service;