import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export const DogFood = ({foodName,foodImage,size,description,ingredient}) =>{
    return(
        <div className="container">
            {/* <div className="d-flex"> */}
            {/* <img className="imgCard mx-auto" src={foodImage} alt="..."/> */}

            {/* </div> */}
            <div className="card pt-5 pb-5">
                <img className="imgCard mx-auto" src={foodImage} alt="..."/>
                <div className="card-body">
                  <h4 className="card-title mb-5 mt-2"> 
                    {foodName}
                  </h4>
                  <h5>Size</h5>
                  <p className="card-text">
                    {size} 
                  </p>
                  <h5>Description</h5>
                  <p className="card-text">
                    {description} 
                  </p>
                  <h5>Ingredient</h5>
                  <p className="card-text">
                    {ingredient} 
                  </p>
                  <a href="#" className="btn btn-secondary">
                    Buy Now
                  </a>
                </div>
            </div>
        </div>
    )
}