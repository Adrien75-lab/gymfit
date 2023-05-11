import React from "react";
import { useHistory } from "react-router-dom";

const EmailConfirmationPage = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push("/");
  };

  return (
    <div>
      <h2>Confirmation d'email</h2>
      <p>
        Nous avons envoyé un email de confirmation à votre adresse email.
        Veuillez vérifier votre boîte de réception et cliquer sur le lien pour
        confirmer votre inscription.
      </p>
      <button className="buttonConfirmationMail" onClick={handleGoHome}>
        Retourner à l'accueil
      </button>
    </div>
  );
};

export default EmailConfirmationPage;