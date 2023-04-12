import React, { Fragment } from "react";
import Pricing from "../components/Pricing";
import About from "./About";
import Features from "./Features";
import Caroussel from "../components/Caroussel";
import "animate.css";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <Fragment>
      <div className="container gym-class mb-5 mt-3">
        <div className="row">
          <div className="col-sm-12 col-md-6 p-0 animate__animated animate__rotateInDownLeft animate__delay-1s">
            <div className="card mb-3 d-flex flex-column align-items-end bg-primary justify-content-center text-right text-white py-5 px-5">
              <h3 className="display-4 mb-2 text-white font-weight-bold">
                Pour les coachs
              </h3>
              <p>
                Suivi personnalisé de vos élèves, statistiques et progression de leur
                d'entraînement. Des prises de rdv seront également disponible.
              </p>
              <Link
                to="/inscriptionCoach"
                className="btn btn-lg btn-outline-light mt-4 px-4"
              >
                Nous rejoindre
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 p-0 animate__animated animate__rotateInDownRight animate__delay-2s">
            <div className="card mb-3 d-flex flex-column align-items-end justify-content-center bg-secondary text-right text-white py-5 px-5">
              <h3 className="display-4 mb-2 text-white font-weight-bold">
                Pour les abonnés
              </h3>
              <p>
                Prise de rendez-vous avec un coach, vous pouvez également
                télécharger l'application pour faire votre séance. Vous pouvez également faire des séances aléatoires.
              </p>
              <Link
                to="/inscriptionMember"
                className="btn btn-lg btn-outline-light mt-4 px-4"
              >
                Nous rejoindre
              </Link>
            </div>
          </div>
        </div>
        <div className="container pt-3 animate__animated animate__fadeInUp animate__delay-3s">
          <Pricing />
        </div>
      </div>
      <div className=" animate__animated aanimate__animated animate__fadeInUp animate__delay-5s">
        <Features />
      </div>



    </Fragment>
  );
};

export default HomePage;