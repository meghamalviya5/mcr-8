import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="flex">
      <FontAwesomeIcon icon={faSearch} />
      <input type="search" placeholder="Search by title or tag" />
    </div>
  );
};

export default Search;
