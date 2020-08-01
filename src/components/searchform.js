import React from "react";
import "../css/searchform.css";
function searchform(props) {
  return (
    <div>
      <div className="row">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          id="employees"
          type="text"
          name="search"
          list="employee"
          className="form-control col-8"
          placeholder="Search by Employee Name"
        />
        <button
          type="submit"
          value=""
          className="btn btn-secondary col-2"
          data-toggle="popover"
          title="Search Error"
          data-content="Please Enter a Name to Search"
          onClick={props.handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default searchform;
