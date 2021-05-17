import "./MainMenu.css";
import { CartIcon } from "./CartIcon";
import { WishlistIcon } from "./WishlistIcon";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";

export const MainMenu = () => {
  const { isUserLoggedIn, setLogin } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    setLogin(false);
    localStorage.setItem("login", JSON.stringify({ isUserLoggedIn: false }));
    navigate("/product");
  };

  return (
    <header className="page-main-menu">
      <img
        src="./images/hands-peace-bnw.png"
        alt="logo"
        className="hero-image"
      />
      <div onClick={() => navigate("/product")} className="hero-name">
        Mitra UI
      </div>
      <Link to="/product">
        <button>Product</button>
      </Link>
      <Link to="/wishlist">
        <WishlistIcon />
      </Link>
      <Link to="/cart">
        <CartIcon />
      </Link>
      {!isUserLoggedIn && (
        <Link to="/login">
          <button className="login">Log In</button>
        </Link>
      )}
      {isUserLoggedIn && (
        <button className="logout" onClick={logoutHandler}>
          Log out
        </button>
      )}
    </header>
  );
};
