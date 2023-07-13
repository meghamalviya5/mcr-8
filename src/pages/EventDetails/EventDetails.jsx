import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../../contexts/EventContext";

const EventDetails = () => {
  const { eventID } = useParams();
  const {
    state: { meetups },
  } = useContext(EventContext);
  console.log("event id = ", eventID);

  console.log(meetups, "==mt");
  const event = meetups.filter((event) => {
    console.log(event.id);
    if (event.id == eventID) {
      console.log("got");
    } else {
      console.log("not got");
    }
    return event.id == eventID;
  });

  // console.log("event id = ", event);

  const {
    id,
    title,
    hostedBy,
    eventThumbnail,
    eventDescription,
    additionalInformation,
    eventTags,
    eventStartTime,
    eventEndTime,
    location,
    address,
    price,
    speakers,
    isPaid,
  } = event;

  return event !== null ? (
    <div>
      <div>
        <div>
          <h1>{event.title}</h1>
          <h3>Hosted By: {event.hostedBy}</h3>
          <img
            src={event.eventThumbnail}
            alt="event"
            width="500"
            height="500"
          />
          <h2>Details: </h2>
          <p>{event.eventDescription}</p>
        </div>
      </div>
    </div>
  ) : (
    <h3>Loading...</h3>
  );
};

export default EventDetails;
