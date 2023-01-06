import React from "react";
import "./Expert.css";
const Expert = ({expert}) => {
    const {name,image}=expert
  return (
    <div className="g-4 col-lg-4 col-md-6 col-sm-12">
        <div className="card" style={{width: "18rem"}}>
      <img src={image} className="card-img-top w-100" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
       
        <button className="btn btn-success">Details</button>
      </div>
    </div>
    </div>
  );
};

export default Expert;
