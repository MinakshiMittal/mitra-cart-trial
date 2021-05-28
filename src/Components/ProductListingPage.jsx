import { SideNav } from "./SideNav/SideNav";
import { ProductCard } from "./ProductCard";

export const ProductListingPage = ({ filteredData, noDetail }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "110% auto" }}>
      <div className="component-list">
        <SideNav />
      </div>

      <div className="component-display" style={{ marginTop: "4rem" }}>
        <div className="card-demo">
          {filteredData.map((item) => {
            return <ProductCard item={item} noDetail key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
