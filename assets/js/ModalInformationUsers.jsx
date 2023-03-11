import React, { useEffect, useState } from "react";

import { RiCloseLine } from "react-icons/ri";

import { Typography } from "@mui/material";

import { Card, CardHeader, CardContent, CardActions, Button, Grid } from "@mui/material";

import axios from "axios";

const ModalInformationUsers = ({ modalIsOpen, setIsOpen, informationUser }) => {
    console.log(informationUser);

    const handleModalClose = () => {

        setIsOpen(false);
    };


    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />

            <div className="centered">
                <div className="modalBooking">
                    <button className="closeBtn" onClick={() => handleModalClose()} >
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className="modalContent">

                        <>
                            <h2>Fiche de l'utilisateur</h2>
                            <div className="profileInfo">
                                <h2>{informationUser.firstName} {informationUser.lastName}</h2>
                                <p>Email : {informationUser.email}</p>
                                <p>Téléphone : {informationUser.phoneNumber}</p>
                                <p>Taille : {informationUser.sizeUser} cm</p>
                                <p>Poids : {informationUser.weightUser} kg</p>
                                <p>Âge : {informationUser.userAge} ans</p>
                            </div>

                            <div className="buttonContainer mt-2">
                                <button
                                    className="btn btn-primary"

                                >
                                    Créer une séance
                                </button>
                                <button
                                    className="btn btn-danger"

                                >
                                    Annuler
                                </button>
                            </div>
                        </>



                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalInformationUsers;