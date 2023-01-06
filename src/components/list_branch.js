import React from "react";
import Proptypes from "prop-types";

export default function ListBranch({ branch }) {
  return (
    <p className="branch">
      <span className="title">출품분야</span>
      {branch}
    </p>
  );
}

ListBranch.propTypes = {
  branch: Proptypes.string.isRequired,
};
