import React, { useContext, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { EventContext } from "../../contexts/EventContext";
import "./Search.css";

const Search = () => {
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
    <div className="search-text flex-cx-center flex">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="search"
        placeholder="Search by title or tag"
        // onChange={searchByTitleTag}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FILTERS",
            payload: { key: "searchTitle", value: e.target.value },
          })
        }
        className="search-input"
      />
    </div>
  );
};

export default Search;
