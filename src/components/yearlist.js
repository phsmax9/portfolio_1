import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function YearList({ year }) {
  return (
    <li>
      <NavLink to={`/${year}`}>{year}</NavLink>
    </li>
  );
}

YearList.propTypes = {
  year: PropTypes.string.isRequired,
};
