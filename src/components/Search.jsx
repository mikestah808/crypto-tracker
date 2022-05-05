import React from "react";

function Search({ search, setSearch }) {

  //we want to grab the value of the searched crypto and pass it up to the HomePage which is where my list of cryptos are rendered 
  //why? because then i can manipulate the DOM by using the setter function of setCryptos and updating it to the new list of filtered cryptos 
  

  function handleSearch(searchedCrypto){
    setSearch(searchedCrypto)
  }

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