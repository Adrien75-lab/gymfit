import React, { useState } from "react";

const inscriptionCoach = () => {
  const data = {
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const {pseudo, email, password, confirmPassword } = loginData;

  return (
    <>
      <div className="container w-50">
        <h2 className="text-center my-3">Inscription</h2>
        <form>
          <div className="form-group mt-2">
            <label htmlFor="pseudo" />
            Nom
            <input
              onChange={handleChange}
              value={pseudo}
              type="text"
              className="form-control mt-2"
              id="pseudo"
              aria-describedby="emailHelp"
              placeholder="Entrez votre nom"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="exampleInputEmail1 " />
            Adresse mail
            <input
              onChange={handleChange}
              value={email}
              type="email"
              className="form-control mt-2"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="exampleInputEmail1" />
            Mot de passe
            <input
              onChange={handleChange}
              value={password}
              type="password"
              className="form-control mt-2"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="exampleInputEmail1" />
            Confirmez votre mot de passe
            <input
              onChange={handleChange}
              value={confirmPassword}
              type="password"
              className="form-control mt-2"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="button" className="btn btn-primary mt-2">
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
};

export default inscriptionCoach;
