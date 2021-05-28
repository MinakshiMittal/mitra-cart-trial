import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../Reducer/productReducer";
import { products } from "../data";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    itemsInCart: [],
    itemsInWishlist: [],
    productItems: [...products]
  });

  return (
    <ProductContext.Provider
      value={{
        itemsInCart: state.itemsInCart,
        itemsInWishlist: state.itemsInWishlist,
        productItems: state.productItems,
        dispatch
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
