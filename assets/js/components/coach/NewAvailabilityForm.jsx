import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
import { Typography, Grid } from '@material-ui/core';
import { FaSpinner } from 'react-icons/fa';
import { CircularProgress } from '@material-ui/core';
import { fr } from 'date-fns/locale';


function NewAvailabilityForm({ onSubmit, calendarEvents }) {
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const filterPassedDates = (date) => {
    const currentDate = new Date();
    return date >= currentDate;
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Date: ${startDate}`);
    console.log(`End Date: ${endDate}`);


    // Vérifier si le créneau existe déjà
    const isOverlapping = calendarEvents.some(event =>
      (startDate >= event.start && startDate < event.end) ||
      (endDate > event.start && endDate <= event.end) ||
      (startDate <= event.start && endDate >= event.end)
    );

    if (isOverlapping) {
      alert("Un créneau existe déjà dans cette plage horaire.");
      return;
    }

    setIsLoading(true); // Activer le chargement

    await onSubmit(startDate, endDate);

    // Attendez 2 secondes avant de désactiver le chargement
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false); // Désactiver le chargement
  };



  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Début de la disponibilité</Typography>
          <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          minTime={new Date().setHours(9, 30)}
          maxTime={new Date().setHours(18, 0)}
          dateFormat="dd/MM/yyyy HH:mm"
          locale={fr}
          filterDate={filterPassedDates} // Ajoutez cette ligne pour filtrer les dates passées
        />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Fin de la disponibilité</Typography>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showTimeSelect
            minTime={new Date().setHours(9, 30)}
            maxTime={new Date().setHours(18, 0)}
            dateFormat="dd/MM/yyyy HH:mm"
            locale={fr}
            filterDate={filterPassedDates} // Ajoutez cette ligne pour filtrer les dates passées
          />
        </Grid>
      </Grid>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary mt-2"
          disabled={isLoading}
          style={{ minWidth: '200px' }}  // Ajoutez cette ligne
        >
          {isLoading ? (
            <CircularProgress size={20} />
          ) : (
            "AJOUTER LA DISPONIBILITE"
          )}
        </button>
      </div>
    </form>
  );
}

export default NewAvailabilityForm;