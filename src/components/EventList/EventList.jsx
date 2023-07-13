import React from "react";
import TypeSearch from "../TypeSearch/TypeSearch";
import { data } from "../../db/data";
import "./EventList.css";

const EventList = () => {
  return (
    <div>
      <div>
        <h1>Meetup Events</h1>
        <TypeSearch />
      </div>
      <div className="flex flex-space-around flex-gap-4 flex-wrap">
        {data.meetups.map(
          ({ id, title, eventThumbnail, eventType, eventStartTime }) => (
            <div>
              <img src={eventThumbnail} className="event-card" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default EventList;
