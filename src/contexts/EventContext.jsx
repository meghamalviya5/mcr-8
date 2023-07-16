import { createContext, useReducer } from "react";
import { data } from "../db/data";
import { eventReducer } from "../reducers/EventReducer";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const initialState = {
    meetups: data.meetups,
    filteredEvents: data.meetups,
    addRSVPModalStatus: false,
    RSVPBtnText: "RSVP",
    RSVPDisabledStatus: false,
    filters: { searchTitle: "", searchType: "both" },
  };

  const [state, dispatch] = useReducer(eventReducer, initialState);

  // const searchByTitleTag = (titleTag) => {
  //   if (titleTag !== "") {
  //     const foundEvents = state.meetups.filter(
  //       (event) =>
  //         event.title.toLowerCase().includes(titleTag.toLowerCase()) ||
  //         event.eventTags.filter((tag) =>
  //           tag.toLowerCase().includes(titleTag.toLowerCase())
  //         ).length > 0
  //     );

  //     dispatch({ type: "SEARCH_BY_TITLE_TAG", payload: foundEvents });
  //   }
  // };

  // const searchByType = (type) => {
  //   if (type === "both") {
  //     dispatch({ type: "SEARCH_BY_TYPE", payload: state.meetups });
  //   } else {
  //     const events = state.meetups.filter((event) =>
  //       event.eventType.toLowerCase().includes(type)
  //     );
  //     dispatch({ type: "SEARCH_BY_TYPE", payload: events });
  //   }
  // };

  if (state.filters.searchType.length > 0) {
    if (state.filters.searchType === "both") {
      state.filteredEvents = state.meetups;
    } else {
      const events = state.meetups.filter((event) =>
        event.eventType.toLowerCase().includes(state.filters.searchType)
      );
      state.filteredEvents = events;
    }
  }

  if (state.filters.searchTitle.length > 0) {
    const foundEvents = state.filteredEvents.filter(
      (event) =>
        event.title
          .toLowerCase()
          .includes(state.filters.searchTitle.toLowerCase()) ||
        event.eventTags.filter((tag) =>
          tag.toLowerCase().includes(state.filters.searchTitle.toLowerCase())
        ).length > 0
    );

    state.filteredEvents = foundEvents;
  }

  if (
    state.filters.searchType.length <= 0 &&
    state.filters.searchTitle.length <= 0
  ) {
    state.filteredEvents = state.meetups;
  }

  const valueProp = {
    state,
    dispatch,
    //  searchByTitleTag, searchByType
  };

  console.log("state ==", state);
  return (
    <EventContext.Provider value={valueProp}>{children}</EventContext.Provider>
  );
};

export default EventProvider;
