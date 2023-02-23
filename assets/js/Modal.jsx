// @src/components/Modal.jsx

import React from "react";

import { RiCloseLine } from "react-icons/ri";
import ExerciseDetail from "./pages/ExerciseDetail";
import { useParams } from "react-router-dom";
import { exerciseOptions } from "./utils/fetchData";
import { Typography } from "@mui/material";

const Modal = ({ setIsOpen, id }) => {
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
            <Typography variant="h6">
              Ici, vous pouvez sauvegarder cet exercice pour votre future séance . <br />
              Des séances aléatoires vous sont également proposées.
              
              <div className="form-actions mt-2">
                <button  type="submit" className="btn btn-primary first-button">Sauvegarder</button>
                <button  type="button" onClick={() => setIsOpen(false)} className="btn btn-danger second-button">Revenir aux exercises</button>
              </div>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
