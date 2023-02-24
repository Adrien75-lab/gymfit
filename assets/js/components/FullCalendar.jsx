import React from "react";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import EventItem from "./EventItem";
import jwtDecode from "jwt-decode";
import { async } from "regenerator-runtime";
import VoirSonPlanning from "../pages/VoirSonPlanning";
const EventTest = ({ info }) => {
  const { event } = info;
  return (
    <div>
      <p>{event.title}</p>
    </div>
  );
};
const DemoApp = ({ info }) => {
  const [events, setEvents] = useState([]);
  const customerData = [
    { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
    {
      ssn: "666-66-6666",
      name: "Adrien",
      age: 35,
      email: "adrichristophe@gmail.com",
    },
  ];
  const eventData = [{ events }];

  const request = indexedDB.open("test", 3);

  request.onupgradeneeded = (event) => {
    const db = event.target.result;

    // Create another object store called "names" with the autoIncrement flag set as true.
    const objStore = db.createObjectStore("names", { autoIncrement: true });
    const objStoreEvents = db.createObjectStore("event", {
      autoIncrement: true,
    });

    // Because the "names" object store has the key generator, the key for the name value is generated automatically.
    // The added records would be like:
    // key : 1 => value : "Bill"
    // key : 2 => value : "Donna"
    customerData.forEach((customer) => {
      objStore.add(customer.name);
    });
    eventData.forEach((event) => {
      objStoreEvents.add(event.events[0].title);
    });
  };

  let [isAwaiting, setIsAwaiting] = React.useState(false);
  const handleSelect = async (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Ajouter un exercice");
    await setIsAwaiting(true);
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          startRecur: start,
          endRecur: new Date("2023-11-22"),
          title: eventNamePrompt,
          id: "test",
        },
      ]);
      setIsAwaiting(false);
    }
  };

  return (
    <div>
      <FullCalendar
        select={handleSelect}
        displayEventTime={true}
        defaultTimedEventDuration={{ hour: 1 }}
        navLinks={true}
        selectable
        events={events}
        eventContent={(info) => <EventItem info={info} />}
        headerToolbar={{
          start: "today prev next",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        plugins={[daygridPlugin, interactionPlugin]}
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        locales={["fr"]}
        locale="fr"
      />
    </div>
  );
};

export default DemoApp;
