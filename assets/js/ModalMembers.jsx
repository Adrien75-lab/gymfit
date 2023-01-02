// @src/components/Modal.jsx

import React, { useEffect, useState } from "react";

import { RiCloseLine } from "react-icons/ri";
import ExerciseDetail from "./pages/ExerciseDetail";
import { useParams } from "react-router-dom";
import { exerciseOptions } from "./utils/fetchData";
import { Typography } from "@mui/material";
import Axios from "axios";

const ModalMembers = ({ setIsOpen, id }) => {
  console.log(id);


  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />

      <div className="centered">
        <div className="modal1">
          Dialog
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <h2>Are you sure to delete {id} ?</h2>
            <button onClick={() => setIsOpen(false)}>Annuler</button>
            <button>Supprimer</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMembers;
