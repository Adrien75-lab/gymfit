import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Features from "./Features";

const HomePage = (props) => {
  return (
    <Fragment>
      <div className="container gym-class mb-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 p-0">
            <div className="card mb-3 d-flex flex-column align-items-end bg-primary justify-content-center text-right text-white py-5 px-5">
              <i className="flaticon-six-pack"></i>
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
          <div className="col-sm-12 col-md-6 p-0">
            <div className="card mb-3 d-flex flex-column align-items-end justify-content-center bg-secondary text-right text-white py-5 px-5">
              <i className="flaticon-six-pack"></i>
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
        <div className="container pt-3">
          <About />
        </div>
      </div>
      <div className="">
        <Features />
      </div>
    </Fragment>
  );
};

export default HomePage;
