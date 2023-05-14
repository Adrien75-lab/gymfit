import React from 'react';
import { Link } from 'react-router-dom';

const NavbarMembers = ({ linkToCustomers, linkText, tokenPayload, linkText2 }) => {
  return (
    <div className="container w-50" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

      <nav class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <Link
              to="/programmerSeance"
              className="btn btn-primary btn-fixed-width"
              role="button"
              data-bs-toggle="button"
            >
              Rechercher sa salle
            </Link>
          </div>
          <div class="col-md-3">
            <Link
              to={`/listbooking/${tokenPayload.Id}`}
              className="btn btn-primary btn-fixed-width"
              role="button"
              data-bs-toggle="button"
            >
              Voir ses rdv
            </Link>
          </div>
          <div class="col-md-3">
            <Link
              to={linkToCustomers}
              className="btn btn-primary btn-fixed-width"
              role="button"
              data-bs-toggle="button"
            >
              {linkText}                 
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMembers;