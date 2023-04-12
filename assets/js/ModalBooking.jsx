import React, { useEffect, useState } from "react";

import { RiCloseLine } from "react-icons/ri";
import ExerciseDetail from "./pages/ExerciseDetail";
import { useParams } from "react-router-dom";
import { exerciseOptions } from "./utils/fetchData";
import { Typography } from "@mui/material";
import Axios from "axios";
import jwtDecode from "jwt-decode";
import { useLocation } from "react-router-dom";
import FullCalendar, { formatDate, formatRange } from "@fullcalendar/react";
import { Card, CardHeader, CardContent, CardActions, Button, Grid } from "@mui/material";
import frLocale from '@fullcalendar/core/locales/fr'; // import de la bibliothèque pour les dates en français
import { INITIAL_EVENTS } from "./components/event-utils";
import axios from "axios";

const ModalBooking = ({ modalIsOpen, setIsOpen, coachFirstName, coachId, memberId, newEvent }) => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState(new Date(newEvent.start));
    console.log("Selected date: ", newEvent);
    const isSameDay = (date1, date2) =>
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();

    const handleSlotSelect = (availability) => {
        setSelectedSlot(availability);
    };
    const [availableSlotsCoach, setAvailableSlotsCoach] = useState([]);
    useEffect(() => {
        const fetchAvailableSlots = async () => {
            try {
                const response = await Axios.get(`http://localhost:8000/api/availabilities?coach=${coachId}`);
                const availableSlots = response.data['hydra:member'];

                // Filter available slots by selected date
                const filteredSlots = availableSlots.filter(slot =>
                    selectedDate ? isSameDay(new Date(slot.startRDV), selectedDate) : true
                );

                setAvailableSlotsCoach(filteredSlots);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAvailableSlots();
    }, [coachId, selectedDate]);







    const handleSave = () => {
        console.log("handleSave called");
        if (selectedSlot) {

            const data = {
                coach: `/api/coaches/${coachId}`,
                user: `/api/members/${memberId.Id}`,
                stateRDV: "En attente",
                startRDV: selectedSlot.startRDV,
                endRDV: selectedSlot.endRDV,
                duration: "1 hours",
                createdAt: new Date(),
            };

            axios.post(`http://localhost:8000/api/bookings/${coachId}/booking`, data, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .then(response => {
                    console.log(response);
                    const bookings = response.data;
                })
                .catch(error => {
                    // handle error
                    console.error(error);
                });
            setSelectedSlot(selectedSlot);
            setIsOpen(false);
        }
    };
    const handleNextStep = () => {
        setStep(step + 1);
    };
    const handleModalClose = () => {
        setSelectedSlot(null);
        setIsOpen(false);
    };

    // const availableSlots = [
    //     { start: new Date("2023-03-10T10:00:00Z"), end: new Date("2023-03-10T11:00:00Z"), booked: false },
    //     { start: new Date("2023-03-10T11:00:00Z"), end: new Date("2023-03-10T12:00:00Z"), booked: true },
    //     { start: new Date("2023-03-10T14:00:00Z"), end: new Date("2023-03-10T15:00:00Z"), booked: false },
    //     { start: new Date("2023-03-10T15:00:00Z"), end: new Date("2023-03-10T16:00:00Z"), booked: false },
    //     { start: new Date("2023-03-10T16:00:00Z"), end: new Date("2023-03-10T17:00:00Z"), booked: true },
    // ]
    console.log(selectedSlot);
    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />

            <div className="centered">
                <div className="modalBooking">
                    <button className="closeBtn" onClick={() => handleModalClose()}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className="modalContent">

                        {step === 1 && (
                            <>
                                <h2>Choisissez un créneau horaire avec {coachFirstName}</h2>
                                <Grid container spacing={2}>
                                    {availableSlotsCoach.map((availability) => (
                                        <Grid item xs={12} md={6} lg={4} key={availability.id}>
                                            <Card
                                                sx={{
                                                    backgroundColor:
                                                        selectedSlot === availability
                                                            ? "#4caf50"
                                                            : availability.isBooked
                                                                ? "#f44336"
                                                                : "#fff",
                                                    color: selectedSlot === availability ? "#fff" : "#000",
                                                    cursor: availability.isBooked ? "default" : "pointer",
                                                }}
                                                onClick={() => !availability.isBooked && handleSlotSelect(availability)}
                                            >
                                                <CardHeader
                                                    title={`${formatDate(availability.startRDV, {
                                                        locale: frLocale,
                                                        timeZone: "UTC",
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                    })} - ${formatDate(availability.endRDV, {
                                                        locale: frLocale,
                                                        timeZone: "UTC",
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                    })}`}
                                                    subheader={availability.isBooked ? "Réservé" : "Disponible"}
                                                />
                                                <CardContent>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {availability.isBooked
                                                            ? "Ce créneau horaire a déjà été réservé"
                                                            : "Choisissez ce créneau horaire pour votre rendez-vous"}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button
                                                        disabled={availability.isBooked}
                                                        size="small"
                                                    >
                                                        {availability.isBooked ? "Réservé" : "Sélectionner"}
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                                <div className="buttonContainer mt-2">
                                    <button
                                        className="btn btn-primary"
                                        disabled={!selectedSlot}
                                        onClick={() => setStep(2)}
                                    >
                                        Suivant
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={handleModalClose}
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </>
                        )}




                        {step === 2 && (
                            <>
                                <h2>Récapitulatif du rendez-vous</h2>

                                <div className="appointmentSummary">
                                    <p>Coach : {coachFirstName} </p>
                                    {/* <div>
                                        <Typography variant="h6">Récapitulatif:</Typography>
                                        <Typography>Date et heure: {selectedSlot && `${selectedSlot.startRDV.toLocaleString()} - ${selectedSlot.endRDV.toLocaleString()}`}</Typography>
                                    </div> */}
                                    <p>Date : {formatDate(selectedSlot.startRDV, {
                                        locale: frLocale,
                                        timeZone: "UTC",
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</p>
                                    <p>Heure : {formatDate(selectedSlot.startRDV, {
                                        locale: frLocale,
                                        timeZone: "UTC",
                                        hour: "numeric",
                                        minute: "numeric",
                                    })} - {formatDate(selectedSlot.endRDV, {
                                        locale: frLocale,
                                        timeZone: "UTC",
                                        hour: "numeric",
                                        minute: "numeric",
                                    })}</p>
                                </div>
                                <div className="buttonContainer mt-2">
                                    <button
                                        className="btn btn-primary"
                                        disabled={!selectedSlot}
                                        onClick={() => handleSave()}
                                    >
                                        Confirmer
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={handleModalClose}
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalBooking;