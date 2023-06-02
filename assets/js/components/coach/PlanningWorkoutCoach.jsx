import React,{useEffect,useRef,useState} from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Link } from "react-router-dom";
import interactionPlugin from "@fullcalendar/interaction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";
import jwtDecode from "jwt-decode";
import "moment/locale/fr"; // pour la localisation en français
import NewAvailabilityForm from './NewAvailabilityForm';
import axios from "axios";

const PlanningWorkoutCoach = ({ coachId, events, handleAvailabilitySubmit }) => {
  const id = coachId;
  const [coach, setCoach] = useState({
    firstName: "",
    lastName: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  let token = window.localStorage.getItem("authToken");
  let tokenPayload = jwtDecode(token);
  const [calendarEvents, setCalendarEvents] = useState(events);

  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const fetchCoachEvents = async (coachId) => {
    try {
      const response = await Axios.get(`http://localhost:8000/api/availabilities?coach=${coachId}`);
      const availabilities = response.data["hydra:member"];

      const events = availabilities
        .filter((availability) => !availability.isBooked)
        .map((availability) => ({
          id: availability.id,
          title: "Disponible",
          start: availability.startRDV,
          end: availability.endRDV,
        }));

      setCalendarEvents(events);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {

    fetchCoachEvents(id);
  }, [id]);
  console.log(events);


  const calendarRef = useRef(null);

  const renderSidebarEvent = (event) => {
    return (
      <li key={event.id}>
        <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
        <i>{event.title}</i>
      </li>
    );
  };
  const headerToolbar = {
    left: '<div class="fc-prev-button"></div>',
    center: "title",
    right: '<div class="fc-next-button"></div>',
  };



  const renderSidebar = () => {
    const handleDateSelection = (date) => {
      setSelectedDate(date);
    };
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

                  };
                  setCalendarEvents((prevEvents) => [...prevEvents, newEvent]);
                  setIsLoading(false); // Désactiver le chargement
              })
              .catch(() => {
                  setErrorMessage('Une erreur est survenue lors de la création de la disponibilité.');
                  setIsLoading(false); // Désactiver le chargement en cas d'erreur
              });
      };

      return (
          <div style={{ paddingLeft: '20px', marginTop: '80px' }}>
              <div style={{ marginBottom: '120px',width:"300px" }}>
                  <h2>Ajouter une disponibilité</h2>
                  <NewAvailabilityForm
                      onSubmit={handleAvailabilitySubmit}
                      calendarEvents={events}
                  />
              </div>

              <div  style={{ marginBottom: '40px' }}>
                  <label>
                      <input
                          type="checkbox"
                          checked={weekendsVisible}
                          onChange={handleWeekendsToggle}
                      ></input>
                      toggle weekends
                  </label>
              </div>
              <div  style={{ marginBottom: '40px' }}>
                  <h2>Tous les créneaux ({events.length})</h2>
                  <ul>{events.map(renderSidebarEvent)}</ul>
              </div>
          </div>
      );
  };
  return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <h1>Vos disponibilités</h1>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '600px' }}>
              {renderSidebar()}
            </div>
            <div style={{ flexGrow: 1 }}>
              <FullCalendar
                  ref={calendarRef}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
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
                  editable={false}
                  selectable={true}
                  events={calendarEvents} // Ici, remplacez `events` par `calendarEvents`
                  selectMirror={true}
                  dayMaxEvents={true}
                  eventsSet={(events) => {
                    console.log(events);
                  }}
                  timeZone="UTC"
                  locales={["fr"]}
                  locale="fr"
                  slotMinTime="09:00:00"
                  slotMaxTime="18:00:00"
              />
            </div>

          </div>
        </div>
      </>
  )
}


export default PlanningWorkoutCoach;