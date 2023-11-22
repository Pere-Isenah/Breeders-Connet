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
          <div className="container-fluid py-5 text-center d-flex justify-content-center flex-column align-items-center">
        <h1 className="display-5 fw-bold">Your Starting Point For Furry Friendships!</h1>
        <p className="col-md-8 fs-4">
        Start your journey into the wonderful world of dogs! Whether you're new to the dog world or a seasoned enthusiast,
        our team is here to guide you. Explore our range of premium breeds, expert services, and everything you need to 
        start your heartwarming adventure with a new furry family member."
        </p>
        {/* <button className="btn btn-primary btn-lg" type="button">
          Example button
        </button> */}
      </div>
    </div>
  );
};
