import React from "react";

function Search({ search, setSearch }) {
  return (
    <div>
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;