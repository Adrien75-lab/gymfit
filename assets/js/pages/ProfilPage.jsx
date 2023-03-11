// Firebase 9
import Axios from "axios";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import authAPI from "../services/authAPI";
import ModalProfile from "../ModalProfile";
import TextField from '@mui/material/TextField';
import { Button, Slider } from "@mui/material";


// // let token = window.localStorage.getItem("authToken");
// let tokenPayload = jwtDecode(token);

const Welcome = ({ getUser }) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(getUser());
  const user = getUser().includes("ROLE_USER");
  const isCoach = getUser().includes("ROLE_COACH");
  const linkToCustomers = isCoach ? '/customers' : '/booking';
  console.log(isCoach);
  const linkText = isCoach ? 'Voir ses abonnés' : 'Prendre un rdv';

  

  const [isOpen, setIsOpen] = useState(false);
  const { id = "new" } = useParams();
  if (id !== "new") {
  }

  const [coach, setCoach] = useState({
    firstName: "",
    lastName: "",
  });


  const updateCoach = (newCoach) => {
    // console.log(newCoach);
    setCoach(newCoach);
    localStorage.setItem('coach', JSON.stringify(newCoach));
  };


  const [editing, setEditing] = useState(false);

  const fetchCoach = async (id) => {
    try {
      const data = await Axios.get(
        "http://localhost:8000/api/users/" + id
      ).then((response) => response.data);
      const { firstName, lastName, age, weight, calories } = data;
      console.log(data);
      setCoach({ firstName, lastName, age, weight, calories });
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      fetchCoach(id);
      const { firstName, lastName, age, weight, calories } = data;
      // console.log(data); // Destructure the firstName and lastName variables from the data object
      setCoach({ firstName, lastName, age, weight, calories }); // Update the coach state variable with the new values
    } else {
      const coachData = localStorage.getItem('coach');

      if (coachData) {
        setCoach(JSON.parse(coachData));
        //console.log(coachData)
      }
    }
  }, [id]);





  // Declare a new state variable called "selectedImageDataUrl" and initialize it to an empty string
  const [selectedImageDataUrl, setSelectedImageDataUrl] = useState("");
  // Declare a new state variable called "errorMessage" and initialize it to an empty string
  const [errorMessage, setErrorMessage] = useState("");
  // Declare a new state variable called "successMessage" and initialize it to an empty string
  const [successMessage, setSuccessMessage] = useState("");
  // Use the useHistory hook to get access to the history object
  const history = useHistory();
  // Créez une fonction pour gérer la soumission du formulaire de mise à jour des informations de l'utilisateur
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await Axios.put(
  //       "http://localhost:8000/api/coaches/" + id,
  //       coach
  //     );
  //     // Todo : Flasl de notification de succés
  //     console.log(response.data);

  //   } catch (error) {
  //     console.error(error);
  //   }
  //   // TODO : Flash de notification de succés
  //   // history.replace("/profil");
  // };
  useEffect(() => {
    const imageData = localStorage.getItem("selectedImage");

    if (imageData) {
      setSelectedImageDataUrl(imageData);
    }
  }, []);
  // useEffect(() => {
  //   // console.log("selectedImageDataUrl:", selectedImageDataUrl);
  // }, [selectedImageDataUrl]);

  function authenticateProfile() {
    // Check if the authToken item is present in the local storage
    let authToken = window.localStorage.getItem("authToken");
    let tokenPayload = jwtDecode(authToken);
    console.log(tokenPayload.age);

    if (!authToken) {
      // If the authToken is not present, redirect the user to the login page
      window.localStorage.setItem("authToken", token);
      return;
    }
  }
  window.addEventListener("load", authenticateProfile);
  let authToken = window.localStorage.getItem("authToken");
  let tokenPayload = jwtDecode(authToken);
  const handleSave = () => {
    if (!selectedImageDataUrl) {
      // Update the errorMessage state variable with a message indicating that no image was selected
      setErrorMessage("Please select an image to save.");
      return;
    }

    localStorage.setItem("selectedImage", selectedImageDataUrl);
  };
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCoach({ ...coach, [name]: value });
  };
  const handleFileChange = (event) => {
    // Get the selected file
    const file = event.target.files[0];
    // Check the file size and type
    if (file.size > 1024 * 1024) {
      // Update the errorMessage state variable with a message indicating that the file is too large
      setErrorMessage(
        "The selected file is too large. Please select a file that is 1MB or smaller."
      );
      return;
    }
    if (!file.type.startsWith("image/")) {
      // Update the errorMessage state variable with a message indicating that the file is not an image
      setErrorMessage(
        "The selected file is not an image. Please select an image file."
      );
      return;
    }
    // Read the selected file as a data URL
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result;
      // Update the selectedImageDataUrl state variable with the data URL
      setSelectedImageDataUrl(dataUrl);
      // Store the data URL in local storage
      localStorage.setItem("selectedImage", dataUrl);
    };
    reader.readAsDataURL(file);
  };
  const [age, setAge] = useState(18);
  const [weight, setWeight] = useState(0);
  const [objectifs, setObjectifs] = useState(0);
  const [calories, setCalories] = useState(0);

  const handleChangeAge = (event, newValue) => {
    setAge(newValue);

  };



  const handleChangeWeight = (event, newValue) => {
    setWeight(newValue);
  };
  const handleChangeObjectifs = (event, newValue) => {
    setObjectifs(newValue);
  };
  const handleChangeCalories = (event, newValue) => {
    setCalories(newValue);
  };


  return (
    <>

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

      {/* {(!editing && <h2 className="text-center my-3">Tableau de bord</h2>) || (
        <h2 className="text-center my-3">Editez votre profil</h2>
      )} */}

      {/* <div className="mt-5" style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "50px" }}>
        <h1>Tableau de bord</h1>
      </div> */}
      <div className="mt-5" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 className="my-component-title">Bienvenue {tokenPayload.firstName}, ici tu peux configurer ton profil pour tes prochaines séances. </h1>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="tile-container">

              <div className="image-container">
                <img src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_150,h_150,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FrKHwzU5y7IDSLkW4XHwB%2Fpub%2Ftk2uAzm2Ma1ThpdaaB6e.png" className="sc-bqyKva XCdxT sc-dWrNqi kURnQM" draggable="false" />
              </div>
              <div className="tile-overlay">
                <div className="tile-corner-container"></div>
                <div className="tile-corner-container"></div>
              </div>

              <div className="tile-text-container">
                <div className="tile-title" data-test="tile-item-title">Age</div>
                <Slider value={age} onChange={handleChangeAge} aria-labelledby="continuous-slider" />
                <div className="tile-subtitle" data-test="tile-item-title">{age} ans</div>
                <Button variant="contained" color="primary" onClick={handleChangeAge}>
                  Enregistrer
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="tile-container">
              <div className="image-container">
                <img src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_150,h_150,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FrKHwzU5y7IDSLkW4XHwB%2Fpub%2FuZ4LV1XDHWKKXQ7kriGT.png" className="sc-bqyKva XCdxT sc-dWrNqi kURnQM" />
                <div className="tile-overlay">
                  <div className="tile-corner-container"></div>
                  <div className="tile-corner-container"></div>
                </div>
              </div>
              <div className="tile-text-container">
                <div className="tile-title" data-test="tile-item-title">Poids</div>
                <Slider value={weight} onChange={handleChangeWeight} aria-labelledby="continuous-slider" max={200} />
                <div className="tile-subtitle" data-test="tile-item-title"> {weight}/kg</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="tile-container">
              <div className="image-container">
                <img src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_150,h_150,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FrKHwzU5y7IDSLkW4XHwB%2Fpub%2F5gJBFJd5uMnQkTJ1Rll7.png" />
                <div className="tile-overlay">
                  <div className="tile-corner-container"></div>
                  <div className="tile-corner-container"></div>
                </div>
              </div>
              <div className="tile-text-container">
                <div className="tile-title" data-test="tile-item-title">Objectifs</div>
                <Slider value={objectifs} onChange={handleChangeObjectifs} aria-labelledby="continuous-slider" max={7} />
                <div className="tile-subtitle" data-test="tile-item-title"> {objectifs}/7 jours</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="tile-container">
              <div className="image-container">
                <img src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_150,h_150,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FrKHwzU5y7IDSLkW4XHwB%2Fpub%2FLt0K4kXVF0TUtFUSjFFW.png" />
                <div className="tile-overlay">
                  <div className="tile-corner-container"></div>
                  <div className="tile-corner-container"></div>
                </div>
              </div>
              <div className="tile-text-container">
                <div className="tile-title" data-test="tile-item-title">Calories</div>
                <Slider value={calories} onChange={handleChangeCalories} aria-labelledby="continuous-slider" max={3000} />
                <div className="tile-subtitle" data-test="tile-item-title"> {calories} /kcal</div>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* <div className="container w-50"> */}


      {/* 
      <div className="mt-5" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

        <div class="form-group" >
          <label for="formFile" class="form-label">Choisis ta photo de profil :</label>
          <input class="form-control" onChange={handleFileChange} type="file" id="formFile" accept="image/*" />
        </div>
      </div> */}
      {/* <div> */}
      {/* <label htmlFor="lastName">Choose your picture :</label>
            <input type="file" onChange={handleFileChange} accept="image/*" />

          <div style={{ position: "absolute", top: 150, left: 10 }}>
            {selectedImageDataUrl && (
              <div>
                <img
                  alt="selected image"
                  src={selectedImageDataUrl}
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <div style={{ position: "absolute", top: 210, left: 10 }}>
                  <button onClick={() => setSelectedImageDataUrl("")}>
                    Remove
                  </button>
                  <button onClick={handleSave}>Save image</button>
                </div>
              </div>
            )}
          </div>
        {/* </div> */}
      {/* <div>

        </div>
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )} */}
      {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div style={{ marginRight: "1rem" }}>
              <h3>Prénom</h3>
              <p>{coach.firstName}</p>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <h3>Nom</h3>
              <p>{coach.lastName}</p>
            </div>
          </div>
        </div> */}
      {/* <div className="mt-5" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button type="button" onClick={() => setIsOpen(true)} class="btn btn-success">Update your profile</button>
        </div> */}
      {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}></div>
        {isOpen && <ModalProfile id={tokenPayload.id} firstName={tokenPayload.firstName} lastName={tokenPayload.lastName} updateCoach={updateCoach} setIsOpen={setIsOpen} />} */}
      {/* </div> */}
      {/* Affichez un message d'erreur s'il y en a un */}
      {/* {errorMessage && <p className="error">{errorMessage}</p>} */}
      {/* Affichez un message de réussite s'il y en a un */}
      {/* {successMessage && <p className="success">{successMessage}</p>} */}
      {/* <div className="container w-50">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Prénom :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={coach.firstName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="lastName">Nom de famille :</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={coach.lastName}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Mettre à jour</button>
        </form>
      </div> */}

    </>
  );
};

// const Welcome = (props) => {
//   return (
//     <div className="container">
//       {/* <Logout /> */}
//       {/* <Quiz userData={userData} /> */}
//     </div>
//   );
// };

export default Welcome;

