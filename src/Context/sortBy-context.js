import { createContext, useContext, useReducer } from "react";
import { sortByReducer } from "../Reducer/sortByReducer";

export const SortByContext = createContext();

export const SortByProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sortByReducer, { sorBy: null });

  return (
    <SortByContext.Provider value={{ sortBy: state.sortBy, dispatch }}>
      {children}
    </SortByContext.Provider>
  );
};

export const useSortBy = () => {
  return useContext(SortByContext);
};
