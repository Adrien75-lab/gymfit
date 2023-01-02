// @src/components/Modal.jsx

import React, { useEffect, useState } from "react";

import { RiCloseLine } from "react-icons/ri";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Axios from "axios";


const ModalProfile = ({ setIsOpen, id, lastName, firstName, updateCoach }) => {

  console.log(id);


  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
  });
  const fetchCoach = async (id) => {
    try {
      const data = await Axios.get(
        "http://localhost:8000/api/coaches/" + id
      ).then((response) => response.data);
      const { lastName, firstName } = data;
      console.log(data);
      setProfile({ firstName, lastName });
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.put(
        "http://localhost:8000/api/coaches/" + id,
        profile
      );
      // Mettre à jour la variable coach avec les nouvelles valeurs de firstName et lastName
      // Update the coach data in the parent component
      updateCoach({ firstName: profile.firstName, lastName: profile.lastName });
      setIsOpen(false);
      

      // Todo : Flasl de notification de succés
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }


  }
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    console.log(name, value);
    setProfile({ ...profile, [name]: value });
  };
  useEffect(() => {
    fetchCoach(id);
  }, [id]);


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
            <div class="modal-header">
              <h5 class="modal-title">Update the profile {id}</h5>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <TextField
                  required
                  id="lastName"
                  label="lastName"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-2">
                <TextField
                  required
                  id="firstName"
                  label="firstName"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}

                />
              </div>

              <div className="form-actions mt-2">
                <button type="submit" className="btn btn-primary">Envoyer</button>
                <button type="button" className="btn btn-danger">Annuler</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProfile;
