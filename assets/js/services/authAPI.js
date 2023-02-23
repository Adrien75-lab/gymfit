import Axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useRef, useState, useContext } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

function logout() {
  window.localStorage.removeItem("authToken");
  delete Axios.defaults.headers["Authorization"];
}

function authenticate(credentials) {
  return Axios.post("http://localhost:8000/api/login_check", credentials, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.data.token)
    .then((token) => {
      // Je stock le token dans mon localStorage
      window.localStorage.setItem("authToken", token);

      // On prévient Axios qu'on a maintenant un header par défaut sur toutes nos futures requetes HTTP
      setAxiosToken(token);
      console.log(credentials);
      getInformationUser();
      return true;
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
  // 1 voir si on a un token ?

  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    let decodedData = decode(storedToken, { header: true });
    let expirationDate = decodedData.exp;
    const currentTime = Date.now().valueOf() / 1000;
    if (expirationDate < currentTime) {
      localStorage.removeItem("token");
    }
  }
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
  
};
