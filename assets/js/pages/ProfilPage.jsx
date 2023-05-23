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
  //console.log(tokenPayloadMember);
  const isCoach = getUser().includes("ROLE_COACH");
  const linkToCustomers = isCoach ? '/customers' : '/booking';
  const linkText = isCoach ? 'Voir ses abonnés' : 'Prendre un rdv';
  const [member, setMember] = useState(null);
  const [memberId, setMemberId] = useState("");
  const [age, setAge] = useState(0);
  const [sizeUser, setSizeUser] = useState(0);
  const [weightUser, setWeightUser] = useState(0);
  const [imc, setIMC] = useState(0);
  let memberId2 = tokenPayloadMember.memberId;
  console.log(memberId2);

  const tooltip = (
    <Tooltip id="button-tooltip">
      L'Indice de Masse Corporelle (IMC) est un indicateur de la corpulence d'une personne. Il est calculé en divisant le poids en kilogrammes par la taille en mètres carrés. Un IMC de 18,5 à 24,9 est considéré comme normal.
    </Tooltip>
  );

  // Permet de calculer l'imc
  const calculateIMC = (weightUser, sizeUser) => {
    const imc = weightUser / Math.pow(sizeUser / 100, 2);
    return imc.toFixed(2);
  }
  useEffect(() => {
    const newIMC = calculateIMC(weightUser, sizeUser);
    setIMC(newIMC);
  }, [weightUser, sizeUser]);
  useEffect(() => {
    if (member && memberId) {
      const memberId = memberId;
    
      console.log("ID du membre :", memberId);
      setMemberId(memberId);
    }
  }, [member]);
  useEffect(() => {

    if (memberId2) {
      const fetchMember = async () => {
        const response = await axios.get(
          `http://localhost:8000/api/members/${memberId2}`
        );
        console.log(response.data);
        setAge(response.data.userAge);
        setSizeUser(response.data.sizeUser);
        setWeightUser(response.data.weightUser);


      };
      fetchMember();


    }
  }, [memberId2]);
  console.log(age);
  const handleChangeAge = (event, newValue) => {
    setAge(newValue);
  };
  const handleChangeSizeUser = (event, newValue) => {
    setSizeUser(newValue);
    
  };

  const handleChangeWeightUser = (event, newValue) => {
    setWeightUser(newValue);
    
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

  // Utilisez authenticateProfile ici
  useEffect(() => {
    authenticateProfile().then(profile => {
      setMember(profile);
    });
  }, []);
  
  let authToken = window.localStorage.getItem("authToken");
  let tokenPayload = jwtDecode(authToken);

   const onSave = (age, sizeUser, weightUser, imc) => {
    console.log("Enregistrement des données du profil...");
    console.log(`Age: ${age}, Taille: ${sizeUser}, Poids: ${weightUser}, IMC: ${imc}`);
    // Ici, mettez le code pour enregistrer les données du profil
    const profilData = { userAge: age, sizeUser, weightUser, imc };

    return axios.put(`http://localhost:8000/api/members/${memberId2}`, profilData)
        .then(response => {
          console.log('Profil enregistré avec succès!', response.data);
        })
        .catch(error => {
          console.error('Erreur lors de l\'enregistrement du profil', error);
          throw error; // Renvoyer l'erreur pour la traiter ultérieurement
        });
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
      <SaveButtonProfil onSave={onSave} age={age} sizeUser={sizeUser} weightUser={weightUser} imc={imc} />
    </>
  );
};
export default Welcome;

