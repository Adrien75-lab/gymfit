import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

import DemoApp from '../components/FullCalendar';
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Link } from "react-router-dom";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../components/event-utils";
import ModalBooking from '../ModalBooking';
import moment from "moment-timezone";
import jwtDecode from "jwt-decode";
import "moment/locale/fr"; // pour la localisation en français

const PlanningWorkout = () => {
  const { id } = useParams();
  const [coach, setCoach] = useState({
    firstName: "",
    lastName: "",
  });

  let token = window.localStorage.getItem("authToken");
 let tokenPayload = jwtDecode(token);
 

  



  const fetchCoach = async (id) => {
    try {
      const data = await Axios.get(`http://localhost:8000/api/users/${id}`)
        .then((response) => response.data);

      const { lastName, firstName } = data;
      setCoach({ firstName, lastName });
    } catch (error) {
      console.log(error.response);
    }
  };
  


  useEffect(() => {
    fetchCoach(id);
  }, [id]);
  

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: new Date(),
    end: new Date(),
    allDay: '',
  });
  const handleSelectSlot = (slotInfo) => {
    setNewEvent({ title: "", start: slotInfo.start, end: slotInfo.end });
    setIsOpen(true);
  };

  const handleModalOpen = (selectInfo) => {
    setNewEvent({
      title: '',
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleTitleChange = (e) => {
    setNewEvent({
      ...newEvent,
      title: e.target.value,
    });
  };

  const handleSave = () => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(newEvent);
    setModalIsOpen(false);
  };

  const calendarRef = useRef(null);
  return (
    <>
      <h1>Selectionne un jour pour prendre un rdv avec : {coach.firstName}</h1>
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
        dateClick={handleModalOpen}
        select={handleModalOpen}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventsSet={(events) => {
          console.log(events);
        }}

        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        eventClick={(clickInfo) => {
          console.log(clickInfo);
        }}
        timeZone="UTC"
        locales={["fr"]}
        locale="fr"
        onSelectSlot={handleSelectSlot}
      />
      {modalIsOpen && <ModalBooking setIsOpen={setModalIsOpen}
        newEvent={newEvent}
        setNewEvent={setNewEvent}
        coachFirstName={coach.firstName}
        coachId={id}
        memberId={tokenPayload}

      />}

      {/* <ReactModal isOpen={modalIsOpen} onRequestClose={handleModalClose}>
        <h2>Nouvel événement</h2>
        <form>
          <div>
            <label>Titre</label>
            <input type="text" value={newEvent.title} onChange={handleTitleChange} />
          </div>
          <div>
            <label>Début</label>
            <p>{formatDate(newEvent.start, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })}</p>
          </div>
          <div>
            <label>Fin</label>
            <p>{formatDate(newEvent.end, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })}</p>
          </div>
          <div>
            <button type="button" onClick={handleSave}>Enregistrer</button>
            <button type="button" onClick={handleModalClose}>Annuler</button>
          </div>
        </form>
      </ReactModal> */}



    </>
  )
}


export default PlanningWorkout;