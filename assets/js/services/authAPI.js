import Axios from "axios";
import jwtDecode from "jwt-decode";

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
      getInformationUser();
      return true;
    });
}

const updateUser = (id, credentials) => {
  return Axios.put(`http://localhost:8000/api/coaches/${id}`, credentials, {
    headers: {
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

export default {
  authenticate,
  logout,
  setup,
  updateUser,
};
