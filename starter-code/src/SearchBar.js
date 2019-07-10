import React from "react";

function SearchBar(props) {
  console.log(props);
  return (
    <div>
      <div className="SearchBar">
        <p>Search</p>
        <input type="text" onChange={props.handleChange} />
        <div className="checkbox">
          <input
            type="checkbox"
            name=""
            placeholder="search..."
            onChange={e => props.clbk(e)}
            checked={props.checked}
          />
          <label htmlFor="">Only show products on stock</label>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
