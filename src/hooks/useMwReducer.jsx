import { useReducer } from "react";

const useMwReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchWithMiddleware = action => {
    if (typeof action === "function") {
      return action(dispatch, state);
    }

    dispatch(action);
  };

  return [state, dispatchWithMiddleware];
};

export default useMwReducer;
