import { useProduct } from "../Context/product-context";

export const WishlistHeader = () => {
  const { itemsInWishlist } = useProduct();

  return <h1>{`Items In WishList ${itemsInWishlist.length}`}</h1>;
};
