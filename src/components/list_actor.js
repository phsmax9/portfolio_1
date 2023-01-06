import React from "react";
import Proptypes from "prop-types";

export default function ListActor({ actors }) {
  return (
    <p className="actors">
      <span className="title">출연</span>
      {actors}
    </p>
  );
}

ListActor.propTypes = {
  actors: Proptypes.string.isRequired,
};
