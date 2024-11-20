import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.posterURL} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>Rating: {movie.rating}</p>
    <Link to={`/description/${movie.title}`}>Description</Link>
    <Link to={`/movie/${movie.title}`}>View Details</Link>
  </div>
);

export default MovieCard;
