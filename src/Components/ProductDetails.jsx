import { useParams } from "react-router-dom";
import { useProduct } from "../Context/product-context";
// import { ProductCard } from "./index";
import { ShowProductDetail } from "./ShowProductDetail";

export const ProductDetails = () => {
  const { productId } = useParams();
  const { productItems } = useProduct();
  const product = productItems.find((product) => product.id === productId);

  return (
    <>
      <ShowProductDetail product={product} />
    </>
  );
};
