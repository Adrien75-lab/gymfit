import { Avatar, TextField } from '@mui/material'
import Axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ListCoach = () => {

  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/api/users')
      .then((response) => {
        const coaches = response.data["hydra:member"].filter(user => user.roles.includes('ROLE_COACH'));
        
        setCoaches(coaches);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(coaches);
  


  return (
    <>
      <h1>Liste des coachs disponible dans ta salle</h1>
      <div className="form-group">
        <TextField type="text" placeholder="Rechercher ..." className="form-control" />

      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>

            <th>Coach</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

          {coaches.map((member) => (

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
                <button className="btn btn-sm btn-success"><i class="bi bi-clock-history"></i> Voir les séances passées</button>
              </td>
              <td>
                <Link
                  to={`/planningWorkout/${member.id}`}
                  className="btn btn-sm btn-primary"
                >
                  <i class="bi bi-calendar3"></i> Prendre un rdv
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
     


    </>
  )
}

export default ListCoach