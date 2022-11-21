// Firebase 9
import Axios from "axios";
import React, { useState, Fragment, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import authAPI from "../services/authAPI";

import Quiz from "./Quiz/Quiz";

//  let userSession = authAPI.setup();

const Welcome = (props) => {
  const getAllUsers = () => {
    console.log(Axios.get("http://localhost:8000/api/users"));
    
  };
  

  

  const getUser = (uid) => {
    return Axios.get("users/" + uid);
  };

 

  const [userData, setUserData] = useState("Adrien");
  return (
    <div className="container">
      {/* <Logout /> */}
      <Quiz userData={userData} />
    </div>
  );
};

export default Welcome;
