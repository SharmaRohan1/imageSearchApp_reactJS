import "./searchBar.css";

import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFromSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  function handleChange(event) {
    setTerm(event.target.value);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleFromSubmit}>
        <label>Enter search term:</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
