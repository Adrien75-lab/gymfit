import React, { useState } from "react";
import { toast } from "react-toastify";
import authAPI from "../services/authAPI";

const LoginPage = ({ onLogin, history }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Gestion des champs
  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;

    setCredentials({ ...credentials, [name]: value });
  };

  // Gestion du submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authAPI.authenticate(credentials);

      setError("");
      onLogin(true);
      history.replace("/profil");
      toast.success("vous êtes maintenant connecté !");
    } catch (error) {
      setError(
        "Aucun compte ne possède cette adresse mail ou alors les informations ne correspondent pas"
      );
    }
    console.log(credentials);
  };
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