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
              Exercises keep you strong. {id} {` `}
              is one of the best exercises to target your {id}. It will help you
              improve your mood and gain energy.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
