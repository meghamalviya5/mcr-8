export const eventReducer = (state, action) => {
  console.log("action type ==", action.type);
  switch (action.type) {
    case "SEARCH_BY_TITLE_TAG":
      return { ...state, filteredEvents: action.payload };

    case "SEARCH_BY_TYPE":
      return { ...state, filteredEvents: action.payload };

    default:
      return { state };
  }
};
