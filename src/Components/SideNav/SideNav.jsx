import "./SideNav.css";
import { SortBy, Filter } from "../MainMenu/../index";
export const SideNav = () => {
  return (
    <div className="component-list">
      <SortBy />
      <Filter />
    </div>
  );
};
