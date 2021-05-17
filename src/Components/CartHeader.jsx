import { useProduct } from "../Context/product-context.js";

export const CartHeader = () => {
  const { itemsInCart } = useProduct();
  return (
    <>
      <h2>Items in Cart {itemsInCart.length}</h2>
    </>
  );
};
