import Axios from "axios";
import jwtDecode from "jwt-decode";
import jwt from "jwt-decode"; // import dependency

function logout() {
  window.localStorage.removeItem("authToken");
  delete Axios.defaults.headers["Authorization"];
}

function authenticate(credentials) {
  return Axios.post("http://localhost:8000/api/login_check", credentials)
    .then((response) => response.data.token)
    .then((token) => {
      // Je stock le token dans mon localStorage
      window.localStorage.setItem("authToken", token);

      // On prévient Axios qu'on a maintenant un header par défaut sur toutes nos futures requetes HTTP
      setAxiosToken(token);
      console.log(credentials);
      return true;
    });
}

function setAxiosToken(token,) {
  Axios.defaults.headers["Authorization"] = "Bearer " + token;
}

function setup() {
  // 1 voir si on a un token ?

  const token = window.localStorage.getItem("authToken");
  console.log(token);

  // 2 Si le token est encore valide
  if (token) {
    const { exp: expiration } = jwtDecode(token);

    if (expiration * 1000 > new Date().getTime()) {
      setAxiosToken(token);
      console.log("Connexion établie avec axios");
      const tokenPayload = jwtDecode(token);
      console.log(tokenPayload);
    }
  }
}

export default {
  authenticate,
  logout,
  setup,
};
