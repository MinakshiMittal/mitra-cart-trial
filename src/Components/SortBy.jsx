import { useSortBy } from "../Context/sortBy-context";

export const SortBy = () => {
  const { dispatch: sortByDispatch, sortBy } = useSortBy();
  return (
    <fieldset style={{ marginTop: "1rem" }}>
      <legend>Sort By</legend>
      <label>
        <input
          type="radio"
          name="sort"
          onChange={() =>
            sortByDispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
          }
          checked={sortBy === "PRICE_HIGH_TO_LOW"}
        ></input>{" "}
        Price - High to Low
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          onChange={() =>
            sortByDispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
          }
          checked={sortBy === "PRICE_LOW_TO_HIGH"}
        ></input>{" "}
        Price - Low to High
      </label>
    </fieldset>
  );
};
