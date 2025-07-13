// import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SortOptions() {
  // const [searchParams, setSearchParams] = useState(
  //   new URLSearchParams(window.location.search)
  // );

  // const handleSortChange = (e) => {
  //   const sortBy = e.target.value;
  //   const newParams = new URLSearchParams(searchParams);
  //   newParams.set("sortBy", sortBy);
  //   setSearchParams(newParams);
  // }

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="mb-4 flex items-center justify-end">
        <select
          id="sort"
          className="border p-2 rounded-md focus:outline-none cursor-pointer"
          onChange={handleSortChange}
          value={searchParams.get("sortBy") || ""}
        >
          <option value="">Default</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    </>
  )
}

export default SortOptions;
