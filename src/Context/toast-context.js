import { createContext, useContext, useReducer } from "react";
import { toastReducer } from "../Reducer/toastReducer";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, { showToast: null });

  return (
    <ToastContext.Provider value={{ showToast: state.showToast, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
