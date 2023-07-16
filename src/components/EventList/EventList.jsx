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
    <div className="flex flex-col">
      <div className="flex flex-space-between">
        <h1>Meetup Events</h1>
        <TypeSearch />
      </div>
      <div className="card flex flex-space-around flex-row-gap-2 flex-col-gap-4 flex-wrap">
        {filteredEvents.map(
          ({ id, title, eventThumbnail, eventType, eventStartTime }) => (
            <Link
              to={`/event-details/${id}`}
              onClick={() => {
                dispatch({ type: "SET_RSVP_BUTTON_TEXT", payload: "RSVP" });
                dispatch({ type: "SET_RSVP_DISABLED_STATUS", payload: false });
              }}
              className="event-link"
              key={id}
            >
              <div>
                <div>
                  <div className="relative">
                    <img
                      src={eventThumbnail}
                      className="card-image"
                      alt="meetup"
                    />
                    <div className="card-tag">{eventType} Event</div>
                  </div>
                  <div className="event-time">
                    {new Date(eventStartTime).toDateString()}&nbsp;
                    <span className="period">.</span>
                    &nbsp;
                    {new Date(eventStartTime).toLocaleTimeString()}
                    {new Date(eventStartTime)
                      .toString()
                      .includes("India Standard Time")
                      ? " IST"
                      : ""}
                  </div>
                  <div className="event-name fw-bolder">{title}</div>
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
