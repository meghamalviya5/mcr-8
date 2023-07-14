export const eventReducer = (state, action) => {
  console.log("action type ==", action.type);
  switch (action.type) {
    case "SEARCH_BY_TITLE_TAG":
      return { ...state, filteredEvents: action.payload };

    case "SEARCH_BY_TYPE":
      return { ...state, filteredEvents: action.payload };

    case "SET_ADD_RSVP_MODAL_STATUS":
      return { ...state, addRSVPModalStatus: action.payload };

    case "SET_RSVP_BUTTON_TEXT":
      return { ...state, RSVPBtnText: action.payload };

    case "SET_RSVP_DISABLED_STATUS":
      return { ...state, RSVPDisabledStatus: action.payload };

    default:
      return { state };
  }
};
