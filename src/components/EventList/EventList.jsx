import React, { useContext } from "react";
import TypeSearch from "../TypeSearch/TypeSearch";
import { data } from "../../db/data";
import "./EventList.css";
import { EventContext } from "../../contexts/EventContext";
import { Link } from "react-router-dom";

const EventList = () => {
  const {
    state: { filteredEvents },
  } = useContext(EventContext);

  return (
    <div>
      <div>
        <h1>Meetup Events</h1>
        <TypeSearch />
      </div>
      <div className="flex flex-space-around flex-gap-4 flex-wrap">
        {filteredEvents.map(
          ({ id, title, eventThumbnail, eventType, eventStartTime }) => (
            <Link to={`/event-details/${id}`}>
              <div>
                <div>{eventType}</div>
                <div>
                  <img src={eventThumbnail} className="event-card" />
                  <p>{eventStartTime}</p>
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default EventList;
