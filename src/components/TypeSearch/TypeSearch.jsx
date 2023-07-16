import React, { useContext, useEffect } from "react";
import { EventContext } from "../../contexts/EventContext";
import "./TypeSearch.css";

const TypeSearch = () => {
  const {
    state: { filters },
    dispatch,
    searchByTitleTag,
    searchByType,
  } = useContext(EventContext);

  // useEffect(() => {
  //   searchByTitleTag(filters.searchTitle);
  //   searchByType(filters.searchType);
  // }, [filters.searchType, filters.searchTitle]);

  return (
    <div className="flex flex-cx-center">
      {/* <select onChange={searchByType} className="search-dropdown"> */}
      <select
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FILTERS",
            payload: { key: "searchType", value: e.target.value },
          })
        }
        className="search-dropdown"
      >
        <option value="">Select Event Type</option>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
        <option value="both">Both</option>
      </select>
    </div>
  );
};

export default TypeSearch;
