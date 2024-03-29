import Axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useRef, useState, useContext } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

function logout() {
  window.localStorage.removeItem("authToken");
  delete Axios.defaults.headers["Authorization"];
}

// Générer un CSRF token (on peut l'utiliser à n'importe quelle méthode pour générer un token aléatoire)
function generateCSRFToken() {
  return Math.random().toString(36).substring(2);
}

// Stocker le CSRF token dans un cookie et le retourner
function setCSRFToken() {
  const csrfToken = generateCSRFToken();
  document.cookie = `csrfToken=${csrfToken}; path=/`;
  return csrfToken;
}
// Récupérer le CSRF token du cookie
function getCSRFToken() {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === 'csrfToken') {
      return cookie[1];
    }
  }
  return null;
}

const verifyToken = async (token) => {
  try {

    const response = await fetch(`http://localhost:8000/api/verify-token/${token}`, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // Handle success, e.g., show a success message or redirect the user
    } else {
      const errorData = await response.json();
      console.error(errorData);
      // Handle error, e.g., show an error message
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle network errors, e.g., show an error message
  }
};
const confirmAccount = async (token) => {
  try {
    const response = await fetch(`http://localhost:8000/api/confirm-account/${token}`, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // Handle success, e.g., show a success message or redirect the user
    } else {
      const errorData = await response.json();
      console.error(errorData);
      // Handle error, e.g., show an error message
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle network errors, e.g., show an error message
  }
};

function authenticate(credentials) {

  const csrfToken = setCSRFToken();
  return Axios.post("http://localhost:8000/api/login_check", { ...credentials, csrfToken }, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      const token = response.data.token;
      const tokenPayload = jwtDecode(token);

      return { token, tokenPayload }; // Renvoyer le token et le payload
    })
    .then(({ token, tokenPayload }) => {
      // Je stock le token dans mon localStorage
      window.localStorage.setItem("authToken", token);

      // On prévient Axios qu'on a maintenant un header par défaut sur toutes nos futures requetes HTTP
      setAxiosToken(token);

      return tokenPayload; // Renvoyer le payload (contenant les informations utilisateur)
    });
}

const updateUser = (id, credentials) => {
  return Axios.put(`http://localhost:8000/api/users/${id}`, credentials, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
function getInformationUser() {
  const token = window.localStorage.getItem("authToken");
  const tokenPayload = jwtDecode(token);
  console.log(tokenPayload);
  return tokenPayload;
}
function authenticateProfile() {
  return new Promise((resolve, reject) => {
    const authToken = window.localStorage.getItem("authToken");

    if (!authToken) {
      reject("No authentication token found");
      return;
    }

    try {
      const tokenPayload = jwtDecode(authToken);
      resolve(tokenPayload);
    } catch (error) {
      reject(error);
    }
  });
}
function setAxiosToken(token) {
  Axios.defaults.headers["Authorization"] = "Bearer " + token;
  setInterval(token, 600000);
}
function getBodyPart() {
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("http://localhost:8000/bodypart");

      const data = bodyPartsData.map((part) => part.partie);

      setBodyParts(["tous", ...data]);
    };

    fetchExercisesData();
  }, []);
  return bodyParts;
}

function setup() {
  // Vérifiez si le token est valide lors du démarrage de l'application
  const verifyToken = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      let decodedData = decode(storedToken, { header: true });
      let expirationDate = decodedData.exp;
      const currentTime = Date.now().valueOf() / 1000;
      if (expirationDate < currentTime) {
        localStorage.removeItem("token");
      }
    }
  };

  // Exécute la vérification du token au démarrage de l'application
  verifyToken();

  // Exécute la vérification du token toutes les 5 minutes (300000 ms)
  setInterval(verifyToken, 300000);
}


function authenticateGoogle(credential) {
  return Axios.post("http://localhost:8000/api/google_login", { credential }, {
    headers: {
      "Referrer-Policy": "no-referrer-when-downgrade",
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  })
    .then((response) => response.data.token)
    .then((token) => {
      // Je stocke le token dans mon localStorage
      window.localStorage.setItem("authToken", token);

      // On prévient Axios qu'on a maintenant un header par défaut sur toutes nos futures requetes HTTP
      setAxiosToken(token);

      return true;
    });
}

function isAuthenticated() {
  const token = window.localStorage.getItem("authToken");
  if (token) {
    const { exp: expiration } = jwtDecode(token);

    if ((expiration * 1000, new Date().getTime())) {
      return true;
    }
    return false;
  }
  return false;
}

export default {
  authenticate,
  isAuthenticated,
  logout,
  setup,
  updateUser,
  getBodyPart,
  authenticateProfile,
  authenticateGoogle,
  verifyToken,
  generateCSRFToken,
  setCSRFToken,
  getCSRFToken
};
