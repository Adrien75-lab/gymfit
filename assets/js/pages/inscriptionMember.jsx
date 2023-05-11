import Axios from "axios";
import React, { useState, Component } from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import { toast } from "react-toastify";
import FacebookLogin from 'react-facebook-login';
import authAPI from '../services/authAPI';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import sanitizeHtml from 'sanitize-html';
import zxcvbn from 'zxcvbn';



const inscriptionMember = ({ history }) => {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const checkPasswordStrength = (password) => {
    // Vérifie que le mot de passe contient au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };
  const [showPassword, setShowPassword] = useState(false); // État pour masquer / afficher le mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [isLoading, setIsLoading] = useState(false); // État pour suivre l'état de chargement
  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const strength = zxcvbn(password).score; // Calculer la force du mot de passe
    setPasswordStrength(strength); // Stocker la force du mot de passe dans l'état
    handleChange(event); // Appeler la fonction handleChange pour mettre à jour l'état de l'utilisateur
  };
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    roles: ["ROLE_USER"]
  });
  const [userData, setUserData] = useState({});


  const [error, setError] = useState("");

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (user.password !== user.confirmPassword) {
      setError("Les mots de passes ne correspondent pas");
      return;
    }

    if (!checkPasswordStrength(user.password)) {
      setError(
        "Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial"
      );
      return;
    }
    // Nettoyage des données grâce à la fonction sanitizeHtml

    const cleanUserData = {
      firstName: sanitizeHtml(user.firstName),
      lastName: sanitizeHtml(user.lastName),
      email: sanitizeHtml(user.email),
      password: sanitizeHtml(user.password),
      confirmPassword: sanitizeHtml(user.confirmPassword),
      siret: sanitizeHtml(user.siret),
      roles: ["ROLE_USER"]
    };



    setIsLoading(true); // Activer le loader de chargement

    try {
      const response = await Axios.post(
        "http://localhost:8000/api/users",
        user
      );
      console.log(response);

      history.push("/email-confirmation");
      toast.success("Bienvenue a toi " + user.firstName);

    } catch (error) {
      const { violations } = error.response.data;
      if (violations) {
        violations.forEach((violation) => {
          apiErrors[violation.propertyPath] = violation.message;
        });
        setErrors(apiErrors);
      }
    }

  };

  return (
    <>
      <div className="container w-50">
        <h2 className="text-center my-3">Inscription</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <label htmlFor="firstName">Prenom</label>
            <input
              name="firstName"
              onChange={handleChange}
              value={user.firstName}
              type="text"
              className="form-control mt-2"
              placeholder="Entrez votre Prénom"
              autoComplete="off"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="lastName">Nom</label>
            <input
              onChange={handleChange}
              value={user.lastName}
              type="text"
              className="form-control mt-2"
              name="lastName"
              placeholder="Entrez votre nom"
              autoComplete="off"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="exampleInputEmail1 " />
            Adresse mail
            <input
              onChange={handleChange}
              value={user.email}
              type="email"
              className="form-control mt-2"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Entrez votre email"
              autoComplete="off"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="exampleInputEmail1">Mot de passe</label>
            <div className="input-group">
              <input
                onChange={handlePasswordChange}
                value={user.password}
                type={showPassword ? "text" : "password"}
                className={"form-control " + (error && "is-invalid")}
                id="password"
                name="password"
                placeholder="Entrez votre mot de passe"
                autoComplete="off"
              />
              <div className="input-group-append">
                <div className="input-group-text" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            {error && <div className="invalid-feedback">{error}</div>}
            <div className="progress mt-2">
              <div
                className={`progress-bar ${checkPasswordStrength(user.password) ? 'bg-success' : passwordStrength >= 2 ? 'bg-warning' : 'bg-danger'}`}
                role="progressbar"
                style={{ width: `${(passwordStrength + 1) * 25}%` }}
                aria-valuenow={passwordStrength + 1}
                aria-valuemin="0"
                aria-valuemax="4"
              />
            </div>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="confirmPassword" />
            Confirmez votre Mot de passe
            <input
              onChange={handleChange}
              value={user.confirmPassword}
              type="password"
              className={"form-control mt-2" + (error && " is-invalid")}
              name="confirmPassword"
              placeholder="Confirmez votre mot de passe"
              autoComplete="off"
            />
            {error && <p className="invalid-feedback">{error}</p>}
          </div>
          {isLoading && (
            <div className="text-center mt-3">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          <div className="d-flex justify-content-between mt-2"></div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-primary mt-2" disabled={isLoading}>
              {isLoading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                'Inscription'
              )}
            </button>
          </div>
        </form>


      </div>
    </>
  );
};

export default inscriptionMember;