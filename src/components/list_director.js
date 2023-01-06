import React from "react";
import Proptypes from "prop-types";

export default function ListDirector({ director }) {
  return (
    <p className="director">
      <span className="title">감독</span>
      {director}
    </p>
  );
}

ListDirector.propTypes = {
  director: Proptypes.string.isRequired,
};
