import React from "react";

const HomePage = (props) => {
  return (
    <div className="container gym-class mb-5">
      <div className="row px-3">
        <div className="col-md-6 p-0">
          <div className="card card-header mb-3 d-flex flex-column align-items-end bg-primary justify-content-center text-right text-white py-5 px-5">
            
              <i className="flaticon-six-pack"></i>
              <h3 className="display-4 mb-2 text-white font-weight-bold">
                Pour les coachs
              </h3>
              <p>
                Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor
                ipsum ut diam sit dolores, dolor sit eos sea sanctus erat lorem
                nonumy sanctus takimata. Kasd amet sit sadipscing at..
              </p>
              <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">
                Nous rejoindre
              </a>
            </div>
          
        </div>
        <div className="col-md-6 p-0">
          <div className="card mb-3 d-flex flex-column align-items-end justify-content-center bg-dark text-right text-white py-5 px-5">
            <i className="flaticon-six-pack"></i>
            <h3 className="display-4 mb-2 text-white font-weight-bold">
              Pour les abonnés
            </h3>
            <p>
              Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum
              ut diam sit dolores, dolor sit eos sea sanctus erat lorem nonumy
              sanctus takimata. Kasd amet sit sadipscing at..
            </p>
            <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">
              Nous rejoindre
            </a>
          </div>
        </div>
      </div>
    </div>
    
    

  );
};

export default HomePage;
