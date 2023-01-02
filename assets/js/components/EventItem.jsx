import React from "react";
import VoirSonPlanning from "../pages/VoirSonPlanning";

const EventItem = ({ info }) => {
  const { event } = info;
  localStorage.setItem('event', event.title);

  return (
    <div>
      <p>{event.title}</p>
    </div>
  );
};

export default EventItem;
