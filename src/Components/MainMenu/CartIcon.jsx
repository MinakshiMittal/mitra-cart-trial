import { useProduct } from "../../Context/product-context";

export const CartIcon = () => {
  const { itemsInCart } = useProduct();
  return (
    <div className="badge-on-icon">
      <div className="icon-type cart">
        <i className="fas fa-shopping-cart"></i>
        <div className="badge-type count">{itemsInCart.length}</div>
      </div>
    </div>
  );
};
