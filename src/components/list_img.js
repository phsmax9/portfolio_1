import React from "react";
import Proptypes from "prop-types";

export default function ListImg({ photo }) {
  return (
    <div className="img_area">
      <img src={process.env.PUBLIC_URL + photo} alt="" />
    </div>
  );
}

ListImg.propTypes = {
  photo: Proptypes.string.isRequired,
};
