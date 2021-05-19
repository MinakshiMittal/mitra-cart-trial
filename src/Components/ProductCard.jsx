import { useProduct } from "../Context/product-context";
import { useToast } from "../Context/toast-context";
import { useNavigate, Link } from "react-router-dom";

export const ProductCard = ({ item, noDetail, filteredData }) => {
  const { dispatch: cartDispatch } = useProduct();
  const { dispatch: toastDispatch } = useToast();
  const navigate = useNavigate();

  return (
    <>
      <div className="card-container" key={item.id}>
        <Link to={`/product/${item.id}`}>
          <img className="product-image" src={item.image} alt="product" />
        </Link>
        <div className="product-name-with-wishlist-icon">
          <h4 onClick={() => navigate(`/product/${item.id}`)}>{item.name}</h4>

          {item.inWishlist && (
            <i
              style={{ color: "#f50057" }}
              className="fas fa-heart"
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
              className="far fa-heart"
              style={{ color: "#f50057" }}
              onClick={() =>
                cartDispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: item
                })
              }
            ></i>
          )}
        </div>
        <Link to={`/product/${item.id}`}>
          <p className="product-description-text">Product Description</p>

          <div className="product-price">
            <p className="current-product-price">₹{item.price}</p>
            <small className="striked-original-price">
              ₹{item.originalPrice}
            </small>
            <small className="amount-saved">Save: ₹{item.save}</small>
          </div>
        </Link>

        <button
          className="button primary-btn"
          onClick={() => {
            !item.inCart
              ? cartDispatch({ type: "ADD_TO_CART", payload: item })
              : navigate("/cart");
            toastDispatch({
              type: "SHOW_TOAST",
              payload: "SUCCESS"
            });
          }}
        >
          {!item.inCart ? "ADD TO CART" : "GO TO CART"}
        </button>
      </div>
    </>
  );
};
