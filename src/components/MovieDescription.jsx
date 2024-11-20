import React from "react";
import { Link, useParams } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={`${movie.title} Trailer`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescription;
