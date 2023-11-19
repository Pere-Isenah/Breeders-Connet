import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import DogVideo from "./mixkit-smiling-dog-1552-medium.mp4";

export const Hero = () => {
  return (
    <div className="p-5 mb-4 d-flex justify-content-center h-100 w-100 text-light align-items-center rounded-3">
        <video autoPlay muted loop>
          <source src={DogVideo} type="video/mp4" />
        </video>
          <div className="container-fluid py-5 d-flex justify-content-center flex-column align-items-center">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>
  );
};
