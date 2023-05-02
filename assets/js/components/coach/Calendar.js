// Calendar.js
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import Axios from "axios";
import moment from 'moment';
import ModalInformationUsers from '../../ModalInformationUsers';

const Calendar = ({ id, selectedSubscriber }) => {
  const [bookings, setBookings] = useState([]);
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [booking, setBooking] = useState('');
  
  // Logique existante pour gérer les événements, les requêtes API, etc.
  const handleEventClick = (eventClickInfo) => {
    const reservationId = eventClickInfo.event.id;


    // Appeler l'API pour récupérer les informations de la réservation sélectionnée
    Axios.get(`http://localhost:8000/api/bookings/${reservationId}`)
      .then((response) => {
        const reservation = response.data;
        const userUrl = reservation.user;
        // Appeler l'API pour récupérer les informations de l'utilisateur
        Axios.get(userUrl)
          .then((response) => {
            const user = response.data;
            console.log('Informations de l utilisateur:', user);
            setBooking(user);
            setModalIsOpen(true);
          })
      })
      .catch((error) => {
        console.log(error);
      });
    setModalIsOpen(true);
  };
  const moment = require('moment');
  
  useEffect(() => {
    Axios.get(`http://localhost:8000/api/bookings/?coach=${id}`)
      .then((response) => {
        const bookings = response.data["hydra:member"];


        const events = bookings.map((booking) => {
          // Extrait la date de création de la réservation
          const createdAt = moment(booking.startRDV);
          const createdAtDate = createdAt.startOf('day');
          const formattedDate = createdAtDate.format('YYYY-MM-DD');
          // Extrait l'heure de début du rendez-vous
          const startRDV = moment.parseZone(booking.startRDV, 'YYYY-MM-DDTHH:mm:ssZ');
          //console.log(startRDV.format('HH:mm'));
          const end = moment(booking.endRDV, 'HH:mm:ss');
          // Crée une nouvelle date en utilisant la date de création et l'heure de début du rendez-vous
          // Crée une nouvelle date en utilisant la date de création et l'heure de début du rendez-vous
          const start = moment(createdAt).add(startRDV.hours(), 'hours').add(startRDV.minutes(), 'minutes').toDate();



          const title = `Réservation ${booking.id}`;



          let color = '#e0e0e0'; // Couleur par défaut
          console.log(booking.stateRDV);
          if (booking.stateRDV === 'CONFIRMED') {
            color = '#28a745'; // Couleur verte pour les RDV confirmés

          } else if (booking.stateRDV === 'PENDING') {
            color = '#ffc107'; // Couleur jaune pour les RDV en attente

          } else if (booking.stateRDV === 'CANCELLED') {
            color = '#dc3545'; // Couleur rouge pour les RDV annulés
          }
          // Nouvelle requête Axios pour récupérer les informations de l'utilisateur
          Axios.get(booking.user)
            .then((response) => {
              const user = response.data;

              const event = {
                id: booking.id,
                title: `RDV avec 
                              - ${user.firstName} `,
                start: start,
                end: end,
                state: booking.stateRDV,
                backgroundColor: color,
              };

              setEvents((events) => [...events, event]);
              setMembers(user);
            })
            .catch((error) => {
              console.log(error);
            });

          return null; // On retourne null car la fonction map attend un tableau en retour
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);




  return (
    <>
      <div className="calendarCoach">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          buttonText={{
            today: "Aujourd'hui",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Liste"
          }}
          dayNamesShort={["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]}
          monthNamesShort={["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          eventClick={handleEventClick}
          // eventClassNames={eventClassNames}
          // slotDuration="00:30:00"
          events={events}
          locale="fr"
        />
        {modalIsOpen && (
          <ModalInformationUsers modalIsOpen={modalIsOpen} setIsOpen={setModalIsOpen} informationUser={booking} />
        )}
      </div>
    </>
  );
};

export default Calendar;