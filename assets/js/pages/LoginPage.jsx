import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import authAPI from "../services/authAPI";

const LoginPage = ({ onLogin, history }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [userRole, setUserRole] = useState("");


  // Ajouter une nouvelle variable d'état pour gérer si l'utilisateur est un coach
  const [isCoach, setIsCoach] = useState(false);

  // Ajouter une nouvelle variable d'état pour gérer le numéro d'identification du coach
  const [coachId, setCoachId] = useState("12345");

  // Gestion de l'entrée du coach et du changement de coachId
  const handleCoachChange = ({ currentTarget }) => {
    setIsCoach(currentTarget.checked);
  };

  const handleCoachIdChange = ({ currentTarget }) => {
    setCoachId(currentTarget.value);
  };

  // Gestion des champs
  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const tokenPayload = await authAPI.authenticate(credentials); // Obtenir le payload après l'authentification réussie

      const userRole = tokenPayload.roles; // Obtenir le rôle de l'utilisateur
      // Vérifier si l'utilisateur a coché "Je suis un coach" mais n'a pas le rôle de coach
      if (isCoach && !userRole.includes("ROLE_COACH")) {
        setError("Vous n'êtes pas autorisé à vous connecter en tant que coach.");
        return;
      }

      setError("");
      setUserRole(userRole); // Stocker le rôle de l'utilisateur
      onLogin(true);
      toast.success("vous êtes maintenant connecté !");
    } catch (error) {
      setError(
        "Aucun compte ne possède cette adresse mail ou alors les informations ne correspondent pas"
      );
    }
    console.log(credentials);
  };
  useEffect(() => {
    if (userRole) {
      if (userRole.includes("ROLE_COACH")) {
        history.replace("/profilCoach");
      } else {
        history.replace("/profil");
      }
    }
  }, [userRole, history]);
  return (
    <>
      <h2 className="text-center my-3">Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="container w-50">
          <div className="form-group mt-2">
            <label htmlFor="username">Adresse email</label>
            <input
              value={credentials.username}
              onChange={handleChange}
              type="email"
              placeholder="Adresse email de connexion"
              name="username"
              id="username"
              className="form-control mt-2"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="password">Mot de passe</label>
            <input
              value={credentials.password}
              onChange={handleChange}
              type="password"
              placeholder="Mot de passe"
              name="password"
              id="password"
              className={"form-control mt-2" + (error && " is-invalid")}
            />
            {error && <p className="invalid-feedback">{error}</p>}
          </div>


          {isCoach && (
            <div className="form-group mt-2">
              <label htmlFor="coachId">Numéro d'identification</label>
              <input
                type="password"
                id="coachId"
                name="coachId"
                value={coachId}
                onChange={handleCoachIdChange}
                className="form-control mt-2"
                placeholder="Entrez votre numéro d'identification"
              />
            </div>
          )}

          <div className="form-group mt-2">
            <label htmlFor="isCoach">Je suis un coach</label>
            <input
              type="checkbox"
              id="isCoach"
              name="isCoach"
              checked={isCoach}
              onChange={handleCoachChange}
              className="ml-2"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mt-2">
              Connexion
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginPage;