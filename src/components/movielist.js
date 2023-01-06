import React from "react";
import Proptypes from "prop-types";
import ListImg from "./list_img";
import ListDirector from "./list_director";
import ListActor from "./list_actor";
import ListBranch from "./list_branch";
import ListSynop from "./list_synop";

export default function MovieList({ movie }) {
  return (
    <li key={movie.id}>
      <a href={movie.href} target="_blank" rel="noopener noreferrer">
        <ListImg photo={movie.photo} />
        <p>{movie.title}</p>
        <div className="desc_area">
          <ListDirector director={movie.director} />
          <ListActor actors={movie.actors} />
          <ListBranch branch={movie.branch} />
          <ListSynop synopsis={movie.synopsis} />
        </div>
      </a>
    </li>
  );
}

MovieList.propTypes = {
  movie: Proptypes.objectOf(
    Proptypes.shape({
      id: Proptypes.number,
      href: Proptypes.string,
      photo: Proptypes.string,
      title: Proptypes.string,
      director: Proptypes.string,
      actors: Proptypes.string,
      branch: Proptypes.string,
      synopsis: Proptypes.string,
    })
  ).isRequired,
};
