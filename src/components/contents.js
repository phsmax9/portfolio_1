import React from "react";
import Proptypes from "prop-types";
import MovieList from "./movielist";

const jsonData = require("../data/data.json");

export default function Contents({ year }) {
  const list =
    year === "all"
      ? jsonData
      : jsonData.filter((item) => {
          return item.year === year;
        });
  return (
    <div>
      <ul className="movie_list">
        {list.map((item) => {
          return <MovieList movie={item} />;
        })}
      </ul>
    </div>
  );
}

Contents.propTypes = {
  year: Proptypes.string.isRequired,
};
