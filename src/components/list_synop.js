import React from "react";
import Proptypes from "prop-types";

export default function ListSynop({ synopsis }) {
  return (
    <div className="synopsis">
      <p className="title">줄거리</p>
      {synopsis}
    </div>
  );
}

ListSynop.propTypes = {
  synopsis: Proptypes.string.isRequired,
};
