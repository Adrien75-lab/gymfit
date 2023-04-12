import React from 'react';
import { Carousel } from 'react-bootstrap';
import image from "../../img/carousel-1.jpg";
import image1 from "../../img/carousel-2.jpg";

const Caroussel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 caroussel-img"
          src={image}
          alt="Première diapositive"
        />
        <Carousel.Caption>
          <h3>Un accompagnement personnalisé pour chaque adhérent</h3>
          <p>Nos coachs qualifiés vous aideront à élaborer un programme d'entraînement adapté à vos besoins et à votre niveau de forme physique.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caroussel-img"
          src={image1}
          alt="Seconde diapositive"
        />
        <Carousel.Caption>
          <h3>Rejoignez la meilleure salle de sport en ville</h3>
          <p>Profitez d'équipements de qualité, de cours variés et d'un encadrement professionnel pour atteindre vos objectifs de fitness.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Caroussel;