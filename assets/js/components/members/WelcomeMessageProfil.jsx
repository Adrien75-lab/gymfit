import React from 'react';

const WelcomeMessageProfil = ({ firstName }) => {
  return (
    <div className="mt-5" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1 className="my-component-title">Bienvenue {firstName}, ici tu peux configurer ton profil pour tes prochaines séances. </h1>
    </div>
  );
};

export default WelcomeMessageProfil;