import { createContext, useEffect } from "react";
import reducer from "./reducer/reducer";
import { loadData } from "./reducer/action";
import { useMwReducer } from "../hooks";
import INITIAL_STATE from "./store";

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useMwReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <Context.Provider
      value={{
        data: state.data,
        isLoading: state.isLoading,
        isLogin: state.isLogin,
        error: state.error,
        dispatch: dispatch
      }}
    >
      {children}
    </Context.Provider>
  );
};
