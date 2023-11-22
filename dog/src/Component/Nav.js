import React from "react";

export const Nav = () =>{
  return (
    	<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<div class="container">
			<a class="navbar-brand" href="#"><span>Doc</span>lab</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" href="#">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">department</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">doctors</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">blog</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Contact</a>
					</li>
					<li class="nav-item">
						<a class="appbtn" href="index.html">Appointment</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
    )
};