import { useRef, useEffect } from "react";

export const Checkout = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleCardSubmit = () => {
    const cardDetail = inputRef.current.value;
    console.log(cardDetail);
  };

  return (
    <>
      <label>
        Card Number: <input ref={inputRef} type="text" />
      </label>
      <button onClick={handleCardSubmit}>DONE</button>
    </>
  );
};
