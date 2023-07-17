import { createContext, useReducer } from "react";
import { data } from "../db/data";
import { eventReducer } from "../reducers/EventReducer";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const initialState = {
    meetups: data.meetups,
    addRSVPModalStatus: false,
    RSVPBtnText: "RSVP",
    RSVPDisabledStatus: false,
    filters: { searchTitle: "", searchType: "both" },
  };

  const [state, dispatch] = useReducer(eventReducer, initialState);

  let filteredEvents = data.meetups;

  if (state.filters.searchType.length > 0) {
    if (state.filters.searchType === "both") {
      filteredEvents = state.meetups;
    } else {
      const events = state.meetups.filter((event) =>
        event.eventType.toLowerCase().includes(state.filters.searchType)
      );
      filteredEvents = events;
    }
  }

  if (state.filters.searchTitle.length > 0) {
    const foundEvents = filteredEvents.filter(
      (event) =>
        event.title
          .toLowerCase()
          .includes(state.filters.searchTitle.toLowerCase()) ||
        event.eventTags.filter((tag) =>
          tag.toLowerCase().includes(state.filters.searchTitle.toLowerCase())
        ).length > 0
    );

    filteredEvents = foundEvents;
  }

  const valueProp = {
    state,
    dispatch,
    filteredEvents,
    //  searchByTitleTag, searchByType
  };

  console.log("state ==", state);
  return (
    <EventContext.Provider value={valueProp}>{children}</EventContext.Provider>
  );
};

export default EventProvider;
