import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../../contexts/EventContext";
import { data } from "../../db/data";

const EventDetails = () => {
  const { eventID } = useParams();
  const {
    state: { meetups },
  } = useContext(EventContext);
  console.log("event id = ", eventID);

  console.log(meetups, "==mt");
  const event = data.meetups.find((event) => {
    console.log(event.id);
    if (event.id == eventID) {
      console.log("got");
      return event.id == eventID;
    } else {
      console.log("not got");
    }
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
          <div>
            <h1>{title}</h1>
            <h3>Hosted By: {hostedBy}</h3>
            <img src={eventThumbnail} alt="event" width="500" height="500" />
            <h2>Details: </h2>
            <p>{eventDescription}</p>
            <div>
              <h3>Additional Information</h3>
              <p>Dress Code: {additionalInformation.dressCode}</p>
              <p>Age Restrictions: {additionalInformation.ageRestrictions}</p>
            </div>
            <div>
              <h3>Event Tags:</h3>
              {eventTags.map(
                (tag, idx) => tag + (idx < eventTags.length - 1 ? ", " : "")
              )}
            </div>
          </div>
        </div>
        <div>
          <div>{eventStartTime}</div>
          <div>{eventEndTime}</div>
        </div>

        <div>{location}</div>
      </div>
    </div>
  ) : (
    <h3>Loading...</h3>
  );
};

export default EventDetails;
