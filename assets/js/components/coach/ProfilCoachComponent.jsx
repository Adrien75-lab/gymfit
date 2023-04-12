import React from 'react'
import jwtDecode from "jwt-decode";
import NavbarMembers from '../members/NavbarMembers';
import SaveButtonProfil from '../members/saveButtonProfil';

const ProfilCoachComponent = ({ getUser, props }) => {
  let authTokenMember = window.localStorage.getItem("authToken");
  let tokenPayloadMember = jwtDecode(authTokenMember);


  const isCoach = getUser().includes("ROLE_COACH");
  const linkToCustomers = isCoach ? '/customers' : '/booking';
  const linkText = isCoach ? 'Voir ses abonnés' : 'Prendre un rdv';
  return (
    <>
    <NavbarMembers linkToCustomers={linkToCustomers} linkText={linkText} tokenPayload={tokenPayloadMember} />
    
    <SaveButtonProfil />
  </>
  )
}

export default ProfilCoachComponent