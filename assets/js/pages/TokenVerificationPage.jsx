import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import authAPI from "../services/authAPI";

const TokenVerificationPage = () => {
  const { token } = useParams();
  const history = useHistory();
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await authAPI.verifyToken(token);
        setVerificationStatus("success");
      } catch (error) {
        setVerificationStatus("error");
      }
    };

    verifyToken();
  }, [token]);

  const handleGoHome = () => {
    history.push("/#");
  };

  if (verificationStatus === null) {
    return <div>Chargement...</div>;
  } else if (verificationStatus === "success") {
    return <div>Compte confirmé !</div>;
  } else {
    return <div>Erreur lors de la vérification du jeton.</div>;
  }
};

export default TokenVerificationPage;