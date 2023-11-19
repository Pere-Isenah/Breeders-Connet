import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


export const Nav = () =>{
  return (
	<nav className="navbar navbar-expand" data-bs-theme="dark">
	<div class="container-fluid  text-light">
	  <a class="navbar-brand" href="#">Navbar</a>
	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
		  <li class="nav-item">
			<a class="nav-link active" aria-current="page" href="#">Home</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Features</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Pricing</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link disabled" aria-disabled="true">Disabled</a>
		  </li>
		</ul>
	  </div>
	</div>
  </nav>
    )
};