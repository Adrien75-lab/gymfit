import React from 'react';
import { Link } from 'react-router-dom';

const NavbarMembers = ({ linkToCustomers, linkText, tokenPayload,linkText2 }) => {
  return (
    <div className="container w-50" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

        <nav class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <Link
                to="/programmerSeance"
                className="btn btn-primary active"
                role="button"
                data-bs-toggle="button"
                aria-pressed="true"
              >
                Rechercher sa salle
              </Link>
            </div>
            <div class="col-md-3">
              <Link
                to={linkToCustomers}
                class="btn btn-primary"
                aria-disabled="true"
                role="button"
                data-bs-toggle="button"
              >
                {linkText2}
              </Link>
            </div>
            <div class="col-md-3">
              <Link
                to={linkToCustomers}
                class="btn btn-primary"
                aria-disabled="true"
                role="button"
                data-bs-toggle="button"
              >
                {linkText}
              </Link>
            </div>
            <div class="col-md-3">
              <Link
                to={`/listbooking/${tokenPayload.Id}`}
                class="btn btn-primary"
                aria-disabled="true"
                role="button"
                data-bs-toggle="button"
              >
                 Voir ses reservations
              </Link>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default NavbarMembers;