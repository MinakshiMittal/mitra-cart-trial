import { ShowWishlistItem } from "./ShowWishlistItem";
import { useProduct } from "../Context/product-context";

export const Wishlist = () => {
  const { itemsInWishlist } = useProduct();

  return (
    <>
      <h1>Wishlist</h1>
      <div className="card-demo">
        {itemsInWishlist.map((item) => {
          return (
            <div key={item.id}>
              <ShowWishlistItem item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};
