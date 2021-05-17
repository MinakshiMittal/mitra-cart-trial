import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filterReducer";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    showFastDeliveryOnly: false,
    showInventoryAll: true
  });

  return (
    <FilterContext.Provider
      value={{
        showFastDeliveryOnly: state.showFastDeliveryOnly,
        showInventoryAll: state.showInventoryAll,
        dispatch
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
