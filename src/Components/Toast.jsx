import { useToast } from "../Context/toast-context";
import { useEffect } from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

defineLordIconElement(loadAnimation);

export const Toast = () => {
  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      return toastDispatch({ type: "HIDE_TOAST", payload: null });
    }, 5000);
    return () => clearTimeout(toastTimeout);
  });

  const { showToast, dispatch: toastDispatch } = useToast();
  return (
    <>
      {showToast === "SUCCESS" && (
        <div className="component">
          <div className="alert type-success">
            <lord-icon
              src="https://cdn.lordicon.com//ssdupzsv.json"
              trigger="loop"
              colors="primary:#ffffff,secondary:#08a88a"
              style={{ width: "12%", height: "auto" }}
            ></lord-icon>
            <p>Task done successfully</p>
            <button className="close">
              <i className="fas fa-lg fa-times"></i>
            </button>
          </div>
        </div>
      )}

      {showToast === "ERROR" && (
        <div className="component">
          <div className="alert type-failure">
            <i className="fa fa-exclamation-circle"></i>
            <p>Some error occurred</p>
            <button className="close">
              <i className="fas fa-lg fa-times"></i>
            </button>
          </div>
        </div>
      )}

      {showToast === "WARNING" && (
        <div className="component">
          <div className="alert type-warning">
            <i className="fas fa-exclamation-triangle"></i>
            <p>This is a warning!</p>
            <button className="close">
              <i className="fas fa-lg fa-times"></i>
            </button>
          </div>
        </div>
      )}

      {showToast === "INFO" && (
        <div className="component">
          <div className="alert type-info">
            <i className="fas fa-info-circle"></i>
            <p>I am some info!</p>
            <button className="close">
              <i className="fas fa-lg fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
