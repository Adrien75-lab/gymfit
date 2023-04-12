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
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import WelcomeMessageProfil from "../components/members/WelcomeMessageProfil";
import SaveButtonProfil from "../components/members/saveButtonProfil";
import NavbarMembers from "../components/members/NavbarMembers";
import ProfilSliderMembers from "../components/members/ProfileSliderMembers";
import ProfilCoachComponent from "../components/coach/ProfilCoachComponent";
const { authenticateProfile } = authAPI;


// // let token = window.localStorage.getItem("authToken");
// let tokenPayload = jwtDecode(token);

const Welcome = ({ getUser, props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const user = getUser().includes("ROLE_USER");
  let authTokenMember = window.localStorage.getItem("authToken");
  let tokenPayloadMember = jwtDecode(authTokenMember);


  const isCoach = getUser().includes("ROLE_COACH");
  const linkToCustomers = isCoach ? '/customers' : '/booking';
  const linkText = isCoach ? 'Voir ses abonnés' : 'Prendre un rdv';
  const [member, setMember] = useState(null);
  const [memberId, setMemberId] = useState("");
  const [age, setAge] = useState(0);
  const [sizeUser, setSizeUser] = useState(0);
  const [weightUser, setWeightUser] = useState(0);
  const [imc, setIMC] = useState(0);

  const tooltip = (
    <Tooltip id="button-tooltip">
      L'Indice de Masse Corporelle (IMC) est un indicateur de la corpulence d'une personne. Il est calculé en divisant le poids en kilogrammes par la taille en mètres carrés. Un IMC de 18,5 à 24,9 est considéré comme normal.
    </Tooltip>
  );

  const calculateIMC = (weightUser, sizeUser) => {
    const imc = weightUser / Math.pow(sizeUser / 100, 2);
    return imc.toFixed(2);
  }
  useEffect(() => {
    const newIMC = calculateIMC(weightUser, sizeUser);
    setIMC(newIMC);
  }, [weightUser, sizeUser]);


  useEffect(() => {
    if (member && member.Id) {
      const memberId = member.Id;
      console.log("ID du membre :", memberId);
      setMemberId(memberId);
    }
  }, [member]);
  useEffect(() => {

    if (memberId) {
      const fetchMember = async () => {
        const response = await axios.get(
          `http://localhost:8000/api/members/${memberId}`
        );
        console.log(response.data);
        setAge(response.data.userAge);
        setSizeUser(response.data.sizeUser);
        setWeightUser(response.data.weightUser);


      };
      fetchMember();


    }
  }, [memberId]);
  console.log(age);
  const handleChangeAge = (event, newValue) => {
    setAge(newValue);
  };
  const handleChangeSizeUser = (event, newValue) => {
    setSizeUser(newValue);
    // const heightMeters = newValue / 100;
    // const imc = calculateIMC(weightUser, heightMeters);
    //setImcUser(imc);
  };

  const handleChangeWeightUser = (event, newValue) => {
    setWeightUser(newValue);
    // const heightMeters = sizeUser / 100;
    // const imc = calculateIMC(newValue, heightMeters);
    // setImcUser(imc);
  };

  const handleChangeImcUser = () => {
    const heightMeters = sizeUser / 100;
    const imc = calculateIMC(weightUser, sizeUser);
    setImcUser(imc);
  };



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

      setCoach({ firstName, lastName });
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(coach);


  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      fetchCoach(id);
      const { firstName, lastName, age, weight, calories } = data;

      console.log(data); // Destructure the firstName and lastName variables from the data object
      setCoach({ firstName, lastName, age, weight, calories }); // Update the coach state variable with the new values
    } else {
      const coachData = localStorage.getItem('coach');

      if (coachData) {
        setCoach(JSON.parse(coachData));

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


  useEffect(() => {
    const imageData = localStorage.getItem("selectedImage");

    if (imageData) {
      setSelectedImageDataUrl(imageData);
    }
  }, []);
  // Utilisez authenticateProfile ici
  useEffect(() => {
    authenticateProfile().then(profile => {
      setMember(profile);
    });
  }, []);


  // function authenticateProfile() {
  //   // Check if the authToken item is present in the local storage
  //   let authToken = window.localStorage.getItem("authToken");
  //   let tokenPayload = jwtDecode(authToken);
  //   console.log(tokenPayload);
  //   setMember(tokenPayload);


  //   if (!authToken) {
  //     // If the authToken is not present, redirect the user to the login page
  //     window.localStorage.setItem("authToken", token);
  //     return;
  //   }
  // }
  // window.addEventListener("load", authenticateProfile);
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

  return (
    <>
      <NavbarMembers linkToCustomers={linkToCustomers} linkText={linkText} tokenPayload={tokenPayload} />
      {isCoach ? (
        <div className="form-group mt-2">
          <ProfilCoachComponent />
        </div>
      ) : (

        <div className="container mt-3">
          <div className="mt-1" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <WelcomeMessageProfil firstName={tokenPayload.firstName} />
          </div>
          <div className="container mt-3">
          <div className="row">
            <div className="col-md-3">
              <ProfilSliderMembers title="Age"
                value={age}
                onChange={handleChangeAge}
                imageUrl="https://res.cloudinary.com/glide/image/fetch/f_auto,w_150,h_150,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FrKHwzU5y7IDSLkW4XHwB%2Fpub%2Ftk2uAzm2Ma1ThpdaaB6e.png"
                unit="ans" />
            </div>
            <div className="col-md-3">
              <div className="tile-container">
                <div className="image-container">
                  <img src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-height-measure-icon-vector-isolated-png-image_4972689.jpg" className="sc-bqyKva XCdxT sc-dWrNqi kURnQM" width="150" height="150" />
                  <div className="tile-overlay">
                    <div className="tile-corner-container"></div>
                    <div className="tile-corner-container"></div>
                  </div>
                </div>
                <div className="tile-text-container">
                  <div className="tile-title" data-test="tile-item-title">Taille</div>
                  <Slider value={sizeUser} onChange={handleChangeSizeUser} aria-labelledby="continuous-slider" max={200} />
                  <div className="tile-subtitle" data-test="tile-item-title"> {sizeUser}  cm</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <ProfilSliderMembers
                title="Poids"
                value={weightUser}
                onChange={handleChangeWeightUser}
                imageUrl="https://res.cloudinary.com/glide/image/fetch/f_auto,w_150,h_150,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FrKHwzU5y7IDSLkW4XHwB%2Fpub%2FuZ4LV1XDHWKKXQ7kriGT.png"
                max={200}
                unit="kg"
              />
            </div>
            <div className="col-md-3">
              <OverlayTrigger placement="top" overlay={tooltip}>
                <div>
                  <ProfilSliderMembers
                    title="IMC"
                    value={imc}
                    onChange={handleChangeImcUser}
                    imageUrl="https://res.cloudinary.com/glide/image/fetch/f_auto,w_150,h_150,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FrKHwzU5y7IDSLkW4XHwB%2Fpub%2FLt0K4kXVF0TUtFUSjFFW.png"
                    min={0}
                    max={50}
                    step={0.1}
                    unit=""
                  />
                </div>
              </OverlayTrigger>
            </div>
          </div>
        </div>
        </div>
      )}
      <SaveButtonProfil />
    </>
  );
};
export default Welcome;

