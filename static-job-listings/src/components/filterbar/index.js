// Imports
import React from "react";

// App Imports
import "../../styles/filterBar.scss";

const Filterbar = ({ filterValues, removeFilterValue, clearFiltersValue }) => {
  return (
    <div className="filter">
      <div className="filters">
        {filterValues.map((filterValue, index) => (
          <div className="item" key={index}>
            <span>{filterValue}</span>
            <button
              className="remove"
              onClick={() => removeFilterValue(filterValue)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div>
        <button className="clear" onClick={clearFiltersValue}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filterbar;
