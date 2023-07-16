import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

import { EventContext } from "../../contexts/EventContext";
import OutsideClickHandler from "react-outside-click-handler";
import AddRSVPModal from "../../components/AddRSVPModal/AddRSVPModal";
import "./EventDetails.css";

const EventDetails = () => {
  const { eventID } = useParams();
  const {
    state: { meetups, addRSVPModalStatus, RSVPBtnText, RSVPDisabledStatus },
    dispatch,
  } = useContext(EventContext);

  const event = meetups.find((event) => event.id === eventID);

  const openAddRSVPModal = (e) => {
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
    <div className="flex flex-gap-details">
      <div className="flex flex-col">
        <div>
          <h1>{title}</h1>
          <div>Hosted By: </div>
          <div className="fw-xl">{hostedBy}</div>
          <img src={eventThumbnail} alt="event" className="event-details-img" />
          <h2>Details: </h2>
          <div className="desc">{eventDescription}</div>
          <div className="">
            <h2>Additional Information</h2>
            <div>
              <span className="extra-info-item">Dress Code: </span>
              {additionalInformation.dressCode}
            </div>
            <div>
              <span className="extra-info-item">Age Restrictions: </span>
              {additionalInformation.ageRestrictions}
            </div>
          </div>
          <div>
            <h2>Event Tags:</h2>
            {eventTags.map((tag, idx) => (
              <div className="tags fw-bold">
                {tag}
                {/* {tag + (idx < eventTags.length - 1 ? ", " : "")} */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col flex-row-gap-2 time-venue-price">
          <div className="flex flex-col-gap-1">
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div>
              <div> {eventStartTime}</div>
              <div>{eventEndTime}</div>
            </div>
          </div>
          <div className="flex flex-col-gap-1">
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <div>{location}</div>
              <div>{address}</div>
            </div>
          </div>
          <div className="flex flex-col-gap-1">
            {/* &#x20B9;&nbsp;  */}
            <div>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
            </div>
            <div>{price}</div>
          </div>
        </div>
        <div>
          <div>
            <h2>Speaker:</h2>
          </div>
          <div className="flex flex-col-gap-2 ">
            {speakers.length > 0 ? (
              speakers.map(({ name, image, designation }) => (
                <div className="speaker-card flex flex-col flex-center">
                  <img src={image} className="speaker-image" alt="speaker" />
                  <div className="fw-bolder">{name}</div>
                  <div>{designation}</div>
                </div>
              ))
            ) : (
              <div>No Speakers Available</div>
            )}
          </div>
          <div className="flex flex-center">
            {new Date() > eventStartTime ? null : (
              <button
                className="btn-rsvp fw-bold"
                value={RSVPBtnText}
                disabled={RSVPDisabledStatus}
                onClick={(e) => openAddRSVPModal(e)}
              >
                {RSVPBtnText}
              </button>
            )}
            <OutsideClickHandler
              onOutsideClick={() =>
                dispatch({
                  type: "SET_ADD_RSVP_MODAL_STATUS",
                  payload: false,
                })
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
