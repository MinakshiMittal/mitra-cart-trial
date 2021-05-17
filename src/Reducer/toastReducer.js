export const toastReducer = (state, action) => {
  // console.log("From reducer", state.type);
  switch (action.type) {
    case "SHOW_TOAST":
      return { ...state, showToast: action.payload };
    case "HIDE_TOAST":
      return { ...state, showToast: null };
    default:
      return state;
  }
};
