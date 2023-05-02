import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Axios from "axios";
import TextField from "@mui/material/TextField";

const AbonnesList = () => {
  const [members, setMembers] = useState([]);

  let authToken = window.localStorage.getItem("authToken");
  let tokenPayload = jwtDecode(authToken);
  let tokenPayloadId = tokenPayload.Id;

  const fetchCoach = async (tokenPayloadId) => {
    Axios.get(`http://localhost:8000/api/users?user=${tokenPayload.Id}`)
      .then((response) => response.data["hydra:member"])
      .then((data) => setMembers(data))
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    if (tokenPayloadId !== "new") {
      fetchCoach(tokenPayloadId);
    }
  }, [tokenPayloadId]);

  return (
    <div className="abonnes-list-container"> {/* Ajout de la classe CSS */}
    <TextField
      select
      label="Sélectionner un abonné"
      SelectProps={{
        native: true,
        className: "abonnes-list-select" // Ajoutez la classe ici
      }}
    >
      {members.map((member) => (
        <option className="abonnesList__option" key={member.id} value={member.id}> {/* Ajout de la classe CSS */}
          {member.firstName} {member.lastName}
        </option>
      ))}
    </TextField>
  </div>
  );
};

export default AbonnesList;