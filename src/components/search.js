import React from 'react';

function Search({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input 
      type="text" 
      placeholder="Search items" 
      onChange={handleSearch} 
    />
  );
}

export default Search;
