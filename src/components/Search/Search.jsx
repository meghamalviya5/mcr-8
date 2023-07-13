import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { EventContext } from "../../contexts/EventContext";

const Search = () => {
  const { searchByTitleTag } = useContext(EventContext);

  return (
    <div className="flex">
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="search"
        placeholder="Search by title or tag"
        onChange={searchByTitleTag}
      />
    </div>
  );
};

export default Search;
