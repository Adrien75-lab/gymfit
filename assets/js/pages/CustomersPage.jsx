import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar, Box, Button, Stack, TextField, Typography } from "@mui/material";
import jwtDecode from "jwt-decode";
// import Modal from "../Modal";
import Modal from "../ModalMembers";
import ModalMembers from "../ModalMembers";
import 'bootstrap-icons/font/bootstrap-icons.css';

import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CustomersPage = ({ }) => {
  const [memberIdToDelete, setMemberIdToDelete] = useState(null);
  // const { id } = useParams(); // Access the id parameter from the route
  // console.log(id);
  let authToken = window.localStorage.getItem("authToken");
  let tokenPayload = jwtDecode(authToken);
  let tokenPayloadId = tokenPayload.Id;
  const [search, setSearch] = useState("");
  const { id } = useParams();
  const coachId = useParams(); // ID du coach
  const [selectedImageDataUrl, setSelectedImageDataUrl] = React.useState("");
  useEffect(() => {
    const imageData = localStorage.getItem("selectedImage");

    if (imageData) {
      setSelectedImageDataUrl(imageData);
    }
  }, []);


  const [members, setMembers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const updateMembers = (newMembers) => {
    setMembers(newMembers);

  };

  const fetchCoach = async (tokenPayloadId) => {

    Axios.get(`http://localhost:8000/api/users?user=${tokenPayload.Id}`)
      .then((response) => response.data["hydra:member"])
      .then((data) => setMembers(data))
      .catch((error) => console.log(error.response));
  };


  const handleSearch = event => {

    const value = event.currentTarget.value;
    const filteredCustomers = members.filter(m => m.firstName.toLowerCase().includes(search.toLowerCase()) || m.lastName.toLowerCase().includes(search.toLowerCase()));

    setSearch(value);
    setMembers(filteredCustomers);
  }


  useEffect(() => {
    if (tokenPayloadId !== "new") {
      fetchCoach(tokenPayloadId);

    }
  }, [tokenPayloadId]);

  const handleDelete = memberId => {
    setIsOpen(true);
    setMemberIdToDelete(memberId);
  }




  return (
    <>
      <h1>Liste des membres</h1>
      <div className="form-group">
        <TextField type="text" onChange={handleSearch} value={search} placeholder="Rechercher ..." className="form-control" />

      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>

            <th>Membre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

          {members.map((member) => (

            <tr key={member.id}>
              <td data-label="Job Title">
                <Avatar
                  alt={`${member.firstName} ${member.lastName}`}
                  src={`https://avatars.dicebear.com/api/human/${member.id}.svg`}
                />
              </td>
              <td>
                <a href="#"></a>
                {member.firstName} {member.lastName}
              </td>
              <td>{member.email}</td>
              <td>
                <button onClick={() => handleDelete(member.id)} className="btn btn-sm btn-danger"><i class="bi bi-trash"></i>Supprimer</button>
              </td>

              <td>
                <button className="btn btn-sm btn-success"><i class="bi bi-clock-history"></i> Voir les séances passées</button>
              </td>
              <td>
                <Link
                  to={`/planningCoach`}
                  className="btn btn-sm btn-primary"
                >
                  <i class="bi bi-calendar3"></i> Voir les futurs rdv
                </Link>
              </td>
              <td>
                <button className="btn btn-sm btn-secondary">
                  <i className="bi bi-graph-up"></i> Progression
                </button>
              </td>

            </tr>

          ))}

        </tbody>


      </table>
      {isOpen && <ModalMembers id={tokenPayload.Id}
        memberIdToDelete={memberIdToDelete}
        setIsOpen={setIsOpen}
        members={members} updateMembers={updateMembers} />}


    </>
  );
};

export default CustomersPage;
