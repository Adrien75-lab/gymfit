import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import jwtDecode from "jwt-decode";
// import Modal from "../Modal";
import Modal from "../ModalMembers";
import ModalMembers from "../ModalMembers";

const CustomersPage = ({ member }) => {
  // const { id } = useParams(); // Access the id parameter from the route
  // console.log(id);
  let authToken = window.localStorage.getItem("authToken");
  let tokenPayload = jwtDecode(authToken);
  const [search, setSearch] = useState("");
  const [id, setId] = useState(null);

  // console.log(tokenPayload);
  if (tokenPayload.id !== "new") {
  }

  const coachId = useParams(); // ID du coach
  const [members, setMembers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchCoach = ({ member }) => {
    Axios.get("http://localhost:8000/api/members", {
      params: {
        coach: tokenPayload.id,
      },
    })
      .then((response) => response.data["hydra:member"])
      .then((data) => setMembers(data))
      .catch((error) => console.log(error.response));
  }

  const handleSearch = event => {

    const value = event.currentTarget.value;
    const filteredCustomers = members.filter(m => m.firstName.toLowerCase().includes(search.toLowerCase()) || m.lastName.toLowerCase().includes(search.toLowerCase()));

    setSearch(value);
    setMembers(filteredCustomers);
  }


  useEffect(() => {
    if (tokenPayload.id !== "new") {
      fetchCoach(tokenPayload.id);

    }
  }, [tokenPayload.id]);

  const handleDelete = id => {
    setIsOpen(true);
    setId(id);
    // Axios.delete(`http://localhost:8000/api/members/${id}`).then(response => console.log(response))
  }




  return (
    <>
      <h1>Liste des membres</h1>
      <div className="form-group">
        <TextField type="text" onChange={handleSearch} value={search} placeholder="Looking ..." className="form-control" />

      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id.</th>
            <th>Membre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>
                <a href="#"></a>
                {member.firstName} {member.lastName}
              </td>
              <td>{member.email}</td>
              <td>
                <button onClick={() => handleDelete(member.id)} className="btn btn-sm btn-danger">Supprimer</button>
              </td>

              <td>
                <button className="btn btn-sm btn-success">Créer une séance</button>
              </td>
              <td>
                <button className="btn btn-sm btn-primary">Voir sa progression</button>
              </td>
            </tr>

          ))}

        </tbody>


      </table>
      {isOpen && <Modal id={id} setIsOpen={setIsOpen} />}


    </>
  );
};

export default CustomersPage;
