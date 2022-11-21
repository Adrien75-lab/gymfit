import React from "react";
import { NavLink } from "react-router-dom";
import authAPI from "../services/authAPI";

const Navbar = ({ isAuthenticated, onLogout, history }) => {
  const handleLogout = () => {
    authAPI.logout();
    onLogout(false);
    history.push("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          GymFit !
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/exercises">
                Exercises
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {(!isAuthenticated && (
              <>
                <li className="nav-item btn btn-secondary">
                  <NavLink className="nav-link" to="/inscriptionMember">
                    Inscription
                  </NavLink>
                </li>
                <li className="nav-item btn btn-success">
                  <NavLink className="nav-link" to="/login">
                    Connexion
                  </NavLink>
                </li>
              </>
            )) || (
              <li className="nav-item ">
                <button onClick={handleLogout} className="btn btn-danger">
                  Déconnexion
                </button>
              </li>
            )}
            <></>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
