import React from 'react';
import { Link } from 'react-router-dom';

const NavbarMembers = ({ linkToCustomers, linkText, tokenPayload, linkText2 }) => {
  return (
    <div className="container w-50" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  
      <nav class="container-fluid">
        <div class="row" style={{ justifyContent: "space-between" }}>
          <Link
            to="/programmerSeance"
            className="btn btn-primary btn-fixed-width"
            role="button"
            data-bs-toggle="button"
          >
            Rechercher sa salle
          </Link>
          <Link
            to={`/listbooking/${tokenPayload.Id}`}
            className="btn btn-primary btn-fixed-width"
            role="button"
            data-bs-toggle="button"
          >
            Voir ses rdv
          </Link>
          <Link
            to={linkToCustomers}
            className="btn btn-primary btn-fixed-width"
            role="button"
            data-bs-toggle="button"
          >
            {linkText}                 
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMembers;