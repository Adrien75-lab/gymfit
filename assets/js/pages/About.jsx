import React from "react";
import image from "../../img/about.jpg"

const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
        <img src={image}/>
        </div>
        <div className="col-lg-6">
          <h2 className="display-4 font-weight-bold mb-4">
            10 Years Experience
          </h2>
          <p>
            Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore
            dolore takima ipsum lorem rebum
          </p>
          <div className="row py-2">
            <div className="col-sm-6">
              <i className="flaticon-barbell display-2 text-primary"></i>
              <h4 className="font-weight-bold">Certified GYM Center</h4>
              <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
            </div>
            <div className="col-sm-6">
              <i className="flaticon-medal display-2 text-primary"></i>
              <h4 className="font-weight-bold">Award Winning</h4>
              <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
            </div>
          </div>
          <a href="" className="btn btn-lg px-4 btn-outline-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
