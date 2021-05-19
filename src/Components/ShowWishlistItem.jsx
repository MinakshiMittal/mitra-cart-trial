import { useProduct } from "../Context/product-context";

export const ShowWishlistItem = ({ item }) => {
  const { dispatch: cartDispatch } = useProduct();

  return (
    <div className="card-container">
      <img className="product-image" src={item.image} alt="product" />
      <div className="product-name-with-wishlist-icon">
        <h4>{item.name}</h4>
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
      </div>
      <p className="product-description-text">Product Description</p>
      <div className="product-price">
        <p className="current-product-price">₹{item.price}</p>
        <small className="striked-original-price">₹{item.originalPrice}</small>
        <small className="amount-saved">Save: ₹{item.save}</small>
      </div>
      <button
        className="button primary-btn"
        onClick={() => {
          if (!item.inCart) {
            cartDispatch({ type: "ADD_TO_CART", payload: item });
            cartDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
          } else {
            cartDispatch({ type: "INCREMENT", payload: item });
            cartDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
          }
        }}
      >
        MOVE TO CART
      </button>
      <button className="card-dismiss-button">
        <i
          className="fas fa-lg fa-times"
          onClick={() =>
            cartDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
          }
        ></i>
      </button>
    </div>
  );
};
