import React, { useContext, useRef } from "react";
import { EventContext } from "../../contexts/EventContext";
import "./AddRSVPModal.css";

const AddRSVPModal = ({ show, isPaid }) => {
  const addReviewModalRef = useRef();

  const { dispatch } = useContext(EventContext);
  if (!show) return null;

  return (
    <div
      className="modal"
      onClick={(e) => {
        console.log(e.currentTarget);
        if (e.target === addReviewModalRef.current)
          dispatch({
            type: "ADD_REVIEW_MODAL_STATUS",
            payload: false,
          });
      }}
      ref={addReviewModalRef}
    >
      <div className="modal-content relative">
        <div className="modalHeader flex flex-col">
          <p className="heading">Complete your RSVP</p>
          <p className="sub-heading">Fill in your personal information.</p>
        </div>
        <button
          className="closeBtn"
          onClick={() =>
            dispatch({
              type: "ADD_REVIEW_MODAL_STATUS",
              payload: false,
            })
          }
        >
          X
        </button>

        <form
          onSubmit={() => {
            dispatch({ type: "SET_ADD_RSVP_MODAL_STATUS", payload: false });
            dispatch({
              type: "SET_RSVP_BUTTON_TEXT",
              payload: "Already RSVPed",
            });
            dispatch({ type: "SET_RSVP_DISABLED_STATUS", payload: true });
          }}
        >
          <div className="flex flex-col flex-row-gap-1">
            <div className="flex flex-col">
              <label id="name" className="form-label">
                Name:
              </label>
              <input type="text" className="form-input" />
            </div>
            <div className="flex flex-col">
              <label id="email" className="form-label">
                Email:
              </label>
              <input type="text" className="form-input" />
            </div>
            {isPaid ? (
              <div className="caution">
                <span>*</span>You have to make the payment at the venue
              </div>
            ) : null}
            <button type="submit" className="btn-rsvp">
              RSVP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRSVPModal;
