// @src/components/Modal.jsx

import React, { useEffect, useState } from "react";

import { RiCloseLine } from "react-icons/ri";
import ExerciseDetail from "./pages/ExerciseDetail";
import { useParams } from "react-router-dom";
import { exerciseOptions } from "./utils/fetchData";
import { Typography } from "@mui/material";
import Axios from "axios";
import jwtDecode from "jwt-decode";
import { useLocation } from "react-router-dom";



const ModalMembers = ({ setIsOpen, members, id, memberIdToDelete, updateMembers }) => {
  console.log(memberIdToDelete);
  const [error, setError] = useState(null);
  

  const handleDelete = async () => {
    try {
      await Axios.delete(`http://localhost:8000/api/users/${memberIdToDelete}`);
      const updatedMembers = members.filter((member) => member.id !== memberIdToDelete);
      console.log(updatedMembers);
      updateMembers(updatedMembers);
      setIsOpen(false);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    console.log(memberIdToDelete);
  }, [memberIdToDelete]);




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
            <h2>Tu es sur de vouloir supprimer ce membre : {memberIdToDelete} ?</h2>
            <div className="buttonContainer">
              <button onClick={() => setIsOpen(false)} className="btn btn-danger">
                Annuler
              </button>
              <button onClick={handleDelete} className="btn btn-primary">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMembers;