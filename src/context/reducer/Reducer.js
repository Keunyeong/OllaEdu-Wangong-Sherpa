const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return { ...state, data: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default reducer;
