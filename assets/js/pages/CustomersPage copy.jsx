import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const CustomersPage = () => {
  const [members, setMembers] = useState([]);
  const { id } = useParams();
  const [coachId, setCoachId] = useState("");
  const fetchCoach = async (id) => {
    try {
      await Axios.get(`http://localhost:8000/api/coaches/${id}/members`).then(
        (response) => response.data
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (id !== "new") {
      fetchCoach(id);
    }
  }, [id]);

  return (
    <>
      <h1>Liste des membres</h1>
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
                <button className="btn btn-sm btn-danger">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomersPage;
