import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../../contexts/EventContext";
import OutsideClickHandler from "react-outside-click-handler";
import AddRSVPModal from "../../components/AddRSVPModal/AddRSVPModal";

const EventDetails = () => {
  const { eventID } = useParams();
  const {
    state: { meetups, addRSVPModalStatus, RSVPBtnText, RSVPDisabledStatus },
    dispatch,
  } = useContext(EventContext);

  const event = meetups.find((event) => event.id === eventID);

  // console.log("event id = ", event);

  const openAddRSVPModal = (e) => {
    // e.currentTarget.disabled = true;
    dispatch({ type: "SET_ADD_RSVP_MODAL_STATUS", payload: true });
  };

  const {
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

  return (
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

        <div>
          <div>{location}</div>
          <div>{address}</div>
          <div>&#x20B9;&nbsp; {price}</div>
        </div>

        <div>
          <div>
            <h3>Speaker:</h3>
          </div>
          <div>
            {speakers.length > 0 ? (
              speakers.map(({ name, image, designation }) => (
                <div>
                  <img
                    src={image}
                    className="speaker-image"
                    alt="speaker"
                    width="20"
                    height="20"
                  />
                  <p>{name}</p>
                  <p>{designation}</p>
                </div>
              ))
            ) : (
              <div>No Speakers Available</div>
            )}
          </div>
          <div>
            {new Date() > eventStartTime ? null : (
              <button
                className="btn-rsvp"
                value={RSVPBtnText}
                disabled={RSVPDisabledStatus}
                onClick={(e) => openAddRSVPModal(e)}
              >
                {RSVPBtnText}
              </button>
            )}
            <OutsideClickHandler
              onOutsideClick={() =>
                dispatch({ type: "SET_ADD_RSVP_MODAL_STATUS", payload: false })
              }
            >
              {addRSVPModalStatus ? (
                <AddRSVPModal show={addRSVPModalStatus} isPaid={isPaid} />
              ) : null}
            </OutsideClickHandler>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
