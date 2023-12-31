import React from 'react';
import ReactDOM from 'react-dom/client';
import {Hero} from './Component/Hero';
import {Nav} from './Component/Nav';
import "./Dog.css";
import {dogNameCard} from './Component/Content';
import {Breed} from './Component/Breed';
import {DogTraits} from './Component/DogTraits';
import reportWebVitals from './reportWebVitals';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div id="con">
    <Nav />
    <div className="Hero-con">
      <Hero />
    </div>
  </div>
  <div id ="breeds" className="container-fluid bg-light">
  
    <div className="row card-con2">
    <p className="h2 text-center">Our Breeds</p>
          {dogNameCard.map(breeds => ( 
            <div className="col-md-4 text-center">
              <Breed key={breeds.name}
                  name={breeds.name}
                  image={breeds.image}
                  dogName ={breeds.dogName}/>
            </div>
          ))}
    </div>
  </div>
  <div className='dogTrait-con'>
    <DogTraits />
  </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
