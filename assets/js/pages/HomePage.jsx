import React, { Fragment, useState, useEffect } from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import Pricing from "../components/Pricing";
import Features from "./Features";
import ComingSoonBanner from "../components/ComingSoonBanner";


const HomePage = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <>

      <div className="container mb-5 mt-3">
        <div className="row">
        <div className={`col-12 col-sm-12 col-md-12 p-0 animate__animated ${inView1 ? 'animate__bounceInDown' : ''}`} ref={ref1}>
            <ComingSoonBanner />
          </div>
        </div>
        <div className="row" style={{ marginTop: '20px' }}>

          
        <div className={`col-12 col-sm-12 col-md-6 p-0 animate__animated animate__delay-1s ${inView2 ? 'animate__rotateInDownLeft' : ''}`} ref={ref2}>
            <div className="card mb-3 d-flex flex-column align-items-end bg-primary justify-content-center text-right text-white py-5 px-5 h-100">
              <h3 className="display-4 mb-2 text-white font-weight-bold">
                Pour les coachs
              </h3>
              <p>
                Suivi personnalisé de vos élèves, statistiques et progression de leur
                d'entraînement. Des prises de rdv seront également disponibles.
              </p>
              <Link
                to="/inscriptionCoach"
                className="btn btn-lg btn-outline-light mt-4 px-4"
              >
                Nous rejoindre
              </Link>
            </div>
          </div>
          <div className={`col-12 col-sm-12 col-md-6 p-0 animate__animated ${inView3 ? 'animate__rotateInDownRight' : ''}`} ref={ref3}>
            <div className="card mb-3 d-flex flex-column align-items-end bg-secondary justify-content-center text-right text-white py-5 px-5 h-100">
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
        <div className={`container pt-3 animate__animated ${inView4 ? 'animate__fadeInUp' : ''}`} ref={ref4}>
          <Pricing />
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp animate__delay-5s">
        <Features />
      </div>

    </>

  );
};

export default HomePage;