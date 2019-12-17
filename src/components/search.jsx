import React from "react";

function search(props) {
  const { searchResults } = props;

  function handleChange(e) {
    const value = e.target.value;
    searchResults(value);
  }
  return (
    <div className="search">
      <span role="img" aria-label="search-icon">
        🔍
      </span>
      <input placeholder="Search for a Transaction" onChange={handleChange} />
    </div>
  );
}

export default search;
