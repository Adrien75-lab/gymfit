import Axios from "axios";
import React, { useState, Component } from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import { toast } from "react-toastify";


const inscriptionMember = () => {
  //   const data = {
  //     pseudo: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   };
  //   const [loginData, setLoginData] = useState(data);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

    try {
      const response = await Axios.post(
        "http://localhost:8000/api/members",
        user
      );
      console.log(response);
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
            <label htmlFor="exampleInputEmail1" />
            Mot de passe
            <input
              onChange={handleChange}
              value={user.password}
              type="password"
              className={"form-control mt-2" + (error && " is-invalid")}
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              autoComplete="off"
            />
            {error && <p className="invalid-feedback">{error}</p>}
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
          <button type="submit" className="btn btn-primary mt-2">
            Inscription
          </button>
        </form>
      </div>
    </>
  );
};

export default inscriptionMember;