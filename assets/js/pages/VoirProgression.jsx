import React from "react";
import { Link } from "react-router-dom";


const VoirProgression = () => {
  return (
    <>
      <div className="container w-50">
        <Link
          to="/programmerSeance"
          class="btn btn-primary"
          role="button"
          data-bs-toggle="button"
          aria-current="page"
        >
          Programmer une séance
        </Link>

        <Link
          to="/VoirSonPlanning"
          class="btn btn-primary "
          role="button"
          data-bs-toggle="button"
          aria-pressed="true"
        >
          Voir son planning
        </Link>
        <Link
          to="/VoirProgression"
          class="btn btn-primary active"
          aria-disabled="true"
          role="button"
          data-bs-toggle="button"
        >
          Voir sa progression
        </Link>
      </div>
      <div>
        <h2 className="text-center my-3">Voir sa progression</h2>
      </div>
    </>
  );
};

export default VoirProgression;
