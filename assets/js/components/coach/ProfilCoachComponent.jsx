import React, { useEffect, useState } from 'react';
import jwtDecode from "jwt-decode";
import NavbarMembers from '../members/NavbarMembers';
import { Box, Grid, ThemeProvider } from "@mui/material";
import theme from "./theme";
import NewAvailabilityForm from '../coach/NewAvailabilityForm';
import axios from "axios";
import PlanningWorkout from '../../pages/PlanningWorkout';
import PlanningWorkoutCoach from './PlanningWorkoutCoach';


const ProfilCoachComponent = ({ getUser, props }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  let authTokenMember = window.localStorage.getItem("authToken");
  let tokenPayloadMember = jwtDecode(authTokenMember);
  console.log(tokenPayloadMember);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const isCoach = getUser().includes("ROLE_COACH");
  const linkToCustomers = isCoach ? '/customers' : '/booking';
  const linkText = isCoach ? 'Voir ses abonnés' : 'Prendre un rdv';
  const linkText2 = isCoach ? 'Voir ses disponibilités' : 'Prendre un rdv';

  const id = tokenPayloadMember.coachId;
  useEffect(() => {
    axios
      .get('/api/availabilities', {
        params: {
          coach: `/api/coaches/${id}`,
        },
      })
      .then((response) => {
        const availabilities = response.data['hydra:member'];
        const events = availabilities.map((availability) => {
          const start = new Date(availability.startRDV);
          const end = new Date(availability.endRDV);
          return {
            id: availability.id,
            title: availability.isBooked ? `Réservé` : `Disponible`,
            start: start,
            end: end,
            color: availability.isBooked ? 'red' : 'green',
          };
        });
        setCalendarEvents((calendarEvents) => [...calendarEvents, ...events]);
      });
  }, [id]);

  const handleAvailabilitySubmit = (start, end) => {
    setIsLoading(true); // Activer le chargement
    // Convertir les heures locales en UTC
    const startRDV = new Date(start.getTime() - (start.getTimezoneOffset() * 60000)).toISOString();
    const endRDV = new Date(end.getTime() - (end.getTimezoneOffset() * 60000)).toISOString();

    axios
      .post('/api/availabilities', {
        coach: `/api/coaches/${id}`,
        startRDV: startRDV,
        endRDV: endRDV,
        isBooked: false,
      })
      .then((response) => {
        const newAvailability = response.data;
        const newEvent = {
          id: newAvailability.id,
          title: 'Disponible',
          start: new Date(newAvailability.startRDV),
          end: new Date(newAvailability.endRDV),
          color: 'green',
        };
        setCalendarEvents((prevEvents) => [...prevEvents, newEvent]);
        setIsLoading(false); // Désactiver le chargement
      })
      .catch(() => {
        setErrorMessage('Une erreur est survenue lors de la création de la disponibilité.');
        setIsLoading(false); // Désactiver le chargement en cas d'erreur
      });
  };

  // Supprimez la logique liée au calendrier et aux réservations qui a été déplacée vers le composant Calendar

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavbarMembers linkToCustomers={linkToCustomers} linkText={linkText} linkText2={linkText2} tokenPayload={tokenPayloadMember} />
        <Grid container spacing={6}>
          <Grid item xs={12} md={12} >
            <PlanningWorkoutCoach coachId={id} events={calendarEvents} />
          </Grid>
          <Grid item xs={12}>
            <NewAvailabilityForm
              onSubmit={handleAvailabilitySubmit}
              calendarEvents={calendarEvents}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default ProfilCoachComponent;