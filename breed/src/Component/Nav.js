import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';


export const Nav = () =>{
  return (
	<nav className="navbar navbar-expand-lg  dark-theme navbar-dark" >
	<div className="container-fluid ">
	  <a className="navbar-brand fs-2 h1" href="#"><FontAwesomeIcon icon={faDog} size="sm" className="me-1" style={{color: "#ffffff",}}/>Doggie Den</a>
	  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	  </button>
	  <div className="collapse navbar-collapse" id="navbarNav">
		<ul className="navbar-nav">
		  <li className="nav-item me-3">
			<a className="nav-link active" aria-current="page" href="#">Home</a>
		  </li>
		  <li className="nav-item me-3">
			<a className="nav-link" href="#">Breeds</a>
		  </li>
		  <li className="nav-item me-3">
			<a className="nav-link" href="#">Services</a>
		  </li>
		  <li className="nav-item me-3">
			<a className="nav-link" href="#">About Us</a>
		  </li>
		  <li className="nav-item me-3">
			<a className="nav-link" href="#">Contact Us</a>
		  </li>
		</ul>
	  </div>
	</div>
  </nav>
    )
};