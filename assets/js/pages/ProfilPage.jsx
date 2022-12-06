// Firebase 9
import Axios from "axios";
import jwtDecode from "jwt-decode";
import React, {useState} from "react";

let token = window.localStorage.getItem("authToken");
let tokenPayload = jwtDecode(token);

const Welcome = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  
  return (
    <>
      <h2 className="text-center my-3">Votre profil</h2>
      <div className="container w-50">
        <div className="col-lg-6 m-5">
          <div>
            <h1>Choisissez votre avatar</h1>
            {selectedImage && (
              <div>
                <img
                  alt="not fount"
                  width={"250px"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
                <button onClick={() => setSelectedImage(null)}>Supprimer</button>
              </div>
            )}
          </div>
          <div>
            <input
              type="file"
              multiple
              accept="/image/*"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
              className="form-control mt-2"
            />
          </div>
          <div>
            <h2>Nom</h2>
            <p>{tokenPayload.lastName}</p>
          </div>
          <div>
            <h2>Prenom</h2>
            <p>{tokenPayload.firstName}</p>
          </div>
         </div>
      </div>
    </>
  );
};

export default Welcome;
