import { useProduct } from "../Context/product-context";
import { ShowCartItem } from "./ShowCartItem.js";

export const Cart = () => {
  const { itemsInCart } = useProduct();
  return (
    <>
      <h1 style={{ marginTop: "3rem" }}>Cart</h1>
      <div className="card-demo">
        {itemsInCart.map((item) => {
          return (
            <div key={item.id}>
              <ShowCartItem item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};
