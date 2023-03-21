import React from 'react';
import { Link } from 'react-router-dom';

const NavbarMembers = ({ linkToCustomers, linkText, tokenPayload }) => {
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
                Créer une séance
              </Link>
            </div>
            <div class="col-md-3">
              <Link
                to="/VoirSonPlanning"
                className="btn btn-primary"
                role="button"
                data-bs-toggle="button"
                aria-pressed="true"
              >
                Voir son planning
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
                Voir ses réservations
              </Link>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default NavbarMembers;