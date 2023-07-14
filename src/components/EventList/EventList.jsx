import React, { useContext } from "react";
import TypeSearch from "../TypeSearch/TypeSearch";
import "./EventList.css";
import { EventContext } from "../../contexts/EventContext";
import { Link } from "react-router-dom";

const EventList = () => {
  const {
    state: { filteredEvents },
    dispatch,
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
            <Link
              to={`/event-details/${id}`}
              onClick={() => {
                dispatch({ type: "SET_RSVP_BUTTON_TEXT", payload: "RSVP" });
                dispatch({ type: "SET_RSVP_DISABLED_STATUS", payload: false });
              }}
            >
              <div>
                <div>{eventType}</div>
                <div>
                  <img
                    src={eventThumbnail}
                    className="event-card"
                    alt="meetup"
                  />
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
