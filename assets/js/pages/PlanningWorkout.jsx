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
  const [events, setEvents] = useState([]);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = (selectInfo) => {
    
    // let title = prompt('Please enter a new title for your event');
    // let calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
    setNewEvent({
      title: '',
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
    setSelectedDate(selectInfo.startStr);
    setModalIsOpen(true);
  };
  
  const handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };







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
    if (selectedDate) {
      fetchCoachEvents(id);
    }
  }, [id, selectedDate]);


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
    setSelectedDate(selectInfo.start);
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

  // useEffect(() => {
  //   console.log("Selected date: ",newEvent);
  // }, [newEvent]);



  const handleSave = () => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(newEvent);
    setModalIsOpen(false);
  };
  const fetchCoachEvents = async (id) => {
    try {
      const data = await Axios.get(`http://localhost:8000/api/availabilities?coach=${id}`)
        .then((response) => response.data["hydra:member"]);

      const event = data.filter((event) => event.isBooked === false).map((event) => ({

        id: event.id,
        title: "Créneau disponible",
        start: event.startRDV,
        state: event.isBooked,
        end: event.endRDV,
      }));


      setEvents(event);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchCoach(id);
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
    return (
      <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          <h2>Instructions</h2>
          <ul>
            <li>Vous pouvez voir les creneaux disponible du coach</li>
            <li>Selectionnez en un pour avoir un rdv</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className="demo-app-sidebar-section">
          <label>
            <input
              type="checkbox"
              checked={weekendsVisible}
              onChange={handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className="demo-app-sidebar-section">
          <h2>Tous les creneaux ({currentEvents.length})</h2>
          <ul>{currentEvents.map(renderSidebarEvent)}</ul>
        </div>
      </div>
    );
  };
  return (
    <>

      <h1>Selectionne un jour pour prendre un rdv avec : {coach.firstName}</h1>
      <div className="demo-app">
        {renderSidebar()}
        <div className='demo-app-main'>
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
            //dateClick={handleModalOpen}
            select={handleDateSelect}
            editable={false}
            selectable={true}
            events={events}
            selectMirror={true}
            dayMaxEvents={true}
            eventsSet={(events) => {
              console.log(events);
            }}


            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            eventClick={handleEventClick}
            timeZone="UTC"
            locales={["fr"]}
            locale="fr"
            onSelectSlot={handleSelectSlot}
            slotMinTime="09:00:00"
            slotMaxTime="18:00:00"

          />
        </div>
      </div>
      .
      {modalIsOpen && <ModalBooking setIsOpen={setModalIsOpen}
        newEvent={newEvent}
        coachFirstName={coach.firstName}
        coachId={id}
        memberId={tokenPayload}
        setNewDate={selectedDate}

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