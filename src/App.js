import "./styles.css";
import { MainMenu } from "./Components/MainMenu/MainMenu";
import {
  Cart,
  ProductCard,
  Wishlist,
  Checkout,
  Toast,
  Login,
  PrivateRoute
} from "./Components/index.js";
import { useSortBy } from "./Context/sortBy-context";
import { useFilter } from "./Context/filter-context";
import { useAuth } from "./Context/auth-context";
import { Routes, Route } from "react-router-dom";
import { useProduct } from "./Context/product-context";

const getSortedData = (productList, sortBy) => {
  if (sortBy === "PRICE_HIGH_TO_LOW") {
    return productList.sort((a, b) => b["price"] - a["price"]);
  }

  if (sortBy === "PRICE_LOW_TO_HIGH") {
    return productList.sort((a, b) => a["price"] - b["price"]);
  }
  return productList;
};

function getFilteredData(
  productList,
  { showFastDeliveryOnly, showInventoryAll }
) {
  return productList.filter(({ fastDelivery }) =>
    showFastDeliveryOnly ? fastDelivery : true
  );
  // .filter(({ inStock }) => (showInventoryAll ? true : inStock));
}

export default function App() {
  const { sortBy } = useSortBy();
  const { showFastDeliveryOnly, showInventoryAll } = useFilter();
  const { isUserLoggedIn } = useAuth();
  const { productItems } = useProduct();

  const sortedData = getSortedData(productItems, sortBy);
  const filteredData = getFilteredData(sortedData, {
    showFastDeliveryOnly,
    showInventoryAll
  });

  return (
    <div className="App">
      <MainMenu />

      {/* <Link to="/checkout">
        <button>Checkout</button>
      </Link> */}

      <Routes>
        <PrivateRoute path="/cart" element={<Cart />} />
        <Route
          path="/"
          element={<ProductCard to={"/"} filteredData={filteredData} />}
        />
        <Route path="/" element={<ProductCard filteredData={filteredData} />} />
        <PrivateRoute path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        {!isUserLoggedIn && <Route path="/login" element={<Login />} />}
      </Routes>

      <Toast />
    </div>
  );
}
