import React, { useContext } from "react";
import { EventContext } from "../../contexts/EventContext";

const TypeSearch = () => {
  const { searchByType } = useContext(EventContext);

  return (
    <div className="flex">
      <select onChange={searchByType}>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
        <option value="both">Both</option>
      </select>
    </div>
  );
};

export default TypeSearch;
