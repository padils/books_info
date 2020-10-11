import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchIcon } from "../icons/search";
import { setFilter as addFilter } from "../redux/bookReducer";
import { connect } from "react-redux";
import { compose } from "redux";

const Search = ({ addFilter, filterWord }) => {
  let location = useLocation();
  let [value, editValue] = useState(filterWord);

  let disable = location.pathname !== `/`;

  useEffect(() => {
    if (disable) {
      addFilter("");
      editValue(filterWord);
    }
  }, [filterWord, disable]);

  return (
    <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          <SearchIcon />
        </span>
      <input
        disabled={disable}
        onChange={(e) => {
          addFilter(e.target.value);
          editValue(e.target.value);
        }}
        value={value}
        type="text"
        className="form-control"
        aria-describedby="addon-wrapping"
        aria-label="search"
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    filterWord: state.books.filterWord,
  };
};

export default compose(connect(mapStateToProps, { addFilter })(Search));
