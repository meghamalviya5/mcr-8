import React, { useContext } from "react";
import { EventContext } from "../../contexts/EventContext";

const AddRSVPModal = ({ show, isPaid }) => {
  const { dispatch } = useContext(EventContext);
  if (!show) return null;

  return (
    <div>
      <form
        onSubmit={() => {
          dispatch({ type: "SET_ADD_RSVP_MODAL_STATUS", payload: false });
          dispatch({ type: "SET_RSVP_BUTTON_TEXT", payload: "Already RSVPed" });
          dispatch({ type: "SET_RSVP_DISABLED_STATUS", payload: true });
        }}
      >
        <div>
          <label id="name">Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label id="email">Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        {isPaid ? (
          <div>
            <span>*</span>You have to make the payment at the venue
          </div>
        ) : null}
        <button type="submit">RSVP</button>
      </form>
    </div>
  );
};

export default AddRSVPModal;
