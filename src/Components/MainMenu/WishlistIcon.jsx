import { useProduct } from "../../Context/product-context";

export const WishlistIcon = () => {
  const { itemsInWishlist } = useProduct();
  return (
    <div className="badge-on-icon">
      <div className="icon-type wishlist">
        <i className="fas fa-heart"></i>
        <div className="badge-type count">{itemsInWishlist.length}</div>
      </div>
    </div>
  );
};
