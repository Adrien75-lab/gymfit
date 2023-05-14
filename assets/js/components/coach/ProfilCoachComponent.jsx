// ProfilCoachComponent.js
import React, { useState } from 'react';
import jwtDecode from "jwt-decode";
import NavbarMembers from '../members/NavbarMembers';
import Calendar from './Calendar'; // Importez le nouveau composant Calendar
import { Box, Grid, ThemeProvider, Typography, Paper } from "@mui/material";
import theme from "./theme";
import AbonnesList from './AbonneList';

const ProfilCoachComponent = ({ getUser, props }) => {
  let authTokenMember = window.localStorage.getItem("authToken");
  let tokenPayloadMember = jwtDecode(authTokenMember);

  const isCoach = getUser().includes("ROLE_COACH");
  const linkToCustomers = isCoach ? '/customers' : '/booking';
  const linkText = isCoach ? 'Voir ses abonnés' : 'Prendre un rdv';
  const linkText2 = isCoach ? 'Voir ses disponibilités' : 'Prendre un rdv';

  const id = tokenPayloadMember.Id;

  // Supprimez la logique liée au calendrier et aux réservations qui a été déplacée vers le composant Calendar

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavbarMembers linkToCustomers={linkToCustomers} linkText={linkText} linkText2={linkText2} tokenPayload={tokenPayloadMember} />
        <Grid container spacing={3}>
          {/* <Grid item xs={12} md={3}>
            <Paper style={{ padding: '1rem' }}>
              <Typography variant="h5">Selectionner un abonné</Typography>
              <AbonnesList />
            </Paper>
          </Grid> */}
          <Grid item xs={12} md={8}>
            <Calendar id={id} /> {/* Incluez le composant Calendar et passez-lui les props nécessaires */}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default ProfilCoachComponent;