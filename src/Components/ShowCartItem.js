import { useProduct } from "../Context/product-context";

export const ShowCartItem = ({ item }) => {
  const { dispatch: cartDispatch } = useProduct();
  return (
    <div className="card-container">
      <img className="product-image" src={item.image} alt="product" />
      <div className="product-name-with-wishlist-icon">
        <h4>{item.name}</h4>
        {item.inWishlist && (
          <i
            className="fas fa-heart"
            style={{ color: "#f50057" }}
            onClick={() =>
              cartDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: item
              })
            }
          ></i>
        )}
        {!item.inWishlist && (
          <i
            style={{ color: "#f50057" }}
            className="far fa-heart"
            onClick={() => {
              cartDispatch({
                type: "ADD_TO_WISHLIST",
                payload: item
              });
            }}
          ></i>
        )}
      </div>
      <p className="product-description-text">Product Description</p>

      <div className="product-price">
        <p className="current-product-price">₹{item.price}</p>
        <small className="striked-original-price">₹{item.originalPrice}</small>
        <small className="amount-saved">Save: ₹{item.save}</small>
      </div>
      {item.quantity > 1 && (
        <button
          className="button primary-btn"
          onClick={() => {
            cartDispatch({ type: "DECREMENT", payload: item });
          }}
        >
          -
        </button>
      )}
      {item.quantity <= 1 && (
        <button className="button primary-btn">
          <i
            onClick={() => {
              cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
            }}
            className="fas fa-trash"
          ></i>
        </button>
      )}
      {/* {item.quantity === 1 && (
        <button className="button primary-btn">
          <i
            className="fas fa-trash"
            onClick={() => {
              console.log(item);
              cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
            }}
          ></i>
        </button>
      )} */}
      <span>{item.quantity}</span>
      <button
        className="button primary-btn"
        onClick={() => {
          cartDispatch({ type: "INCREMENT", payload: item });
        }}
      >
        +
      </button>
      <button className="card-dismiss-button">
        <i
          className="fas fa-lg fa-times"
          onClick={() => {
            cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
          }}
        ></i>
      </button>
    </div>
  );
};
