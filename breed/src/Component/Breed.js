import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";

export const Breed = ({name,image,dogName}) => {
    return (
    <div className="card ">
      <img className="imgCard mx-auto" src={image} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">
          {name}
        </h5>
        <p className="card-text">
          {dogName} 
        </p>
        <a href="#" className="btn btn-secondary">
          know more
        </a>
      </div>
    </div>
)
};