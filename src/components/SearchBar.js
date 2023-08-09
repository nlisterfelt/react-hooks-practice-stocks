import React, {useState} from "react";

function SearchBar({onFilterChange, onSortChange}) {
  const [isAlphaChecked, setIsAlphaChecked]=useState(true)
  function handleSortChange (e){
    setIsAlphaChecked(!isAlphaChecked)
    onSortChange(e.target.value)
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={isAlphaChecked}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={!isAlphaChecked}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={e=>onFilterChange(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
