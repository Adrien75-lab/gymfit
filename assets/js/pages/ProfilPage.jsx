// Firebase 9
import Axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useState, Fragment, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import authAPI from "../services/authAPI";

import Quiz from "./Quiz/Quiz";

const Welcome = (props) => {
  return (
    <div className="container">
      {/* <Logout /> */}
      {/* <Quiz userData={userData} /> */}
    </div>
  );
};

export default Welcome;
