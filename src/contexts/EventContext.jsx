import { createContext, useReducer } from "react";
import { data } from "../db/data";
import { eventReducer } from "../reducers/EventReducer";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const initialState = { meetups: data.meetups, filteredEvents: data.meetups };

  const [state, dispatch] = useReducer(eventReducer, initialState);

  const searchByTitleTag = (e) => {
    const foundEvents = state.meetups.filter(
      (event) =>
        event.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        event.eventTags.filter((tag) =>
          tag.toLowerCase().includes(e.target.value.toLowerCase())
        ).length > 0
    );

    dispatch({ type: "SEARCH_BY_TITLE_TAG", payload: foundEvents });
  };

  const searchByType = (e) => {
    if (e.target.value === "both") {
      dispatch({ type: "SEARCH_BY_TYPE", payload: state.meetups });
    } else {
      const events = state.meetups.filter((event) =>
        event.eventType.toLowerCase().includes(e.target.value)
      );
      dispatch({ type: "SEARCH_BY_TYPE", payload: events });
    }
  };

  const valueProp = { state, dispatch, searchByTitleTag, searchByType };

  console.log("state ==", state);
  return (
    <EventContext.Provider value={valueProp}>{children}</EventContext.Provider>
  );
};

export default EventProvider;
