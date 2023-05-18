import React from "react";
import PropTypes from 'prop-types';

const Filter = ({filter, handleFilter}) => (
  <label>
    {' Find your contacts by name '}
    <input
      type="filter"
      name="filter"
      value={filter}
      onChange={handleFilter}
    ></input>
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func
};

export default Filter;