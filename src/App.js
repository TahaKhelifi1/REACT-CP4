import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import moviesData from './movies';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleChange = (title) => {
    setTitleFilter(title);
    applyFilters(title, ratingFilter);
  };

  const handleRatingChange = (rating) => {
    setRatingFilter(rating);
    applyFilters(titleFilter, rating);
  };

  const applyFilters = (title, rating) => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      movie.rating >= rating
    );
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    applyFilters(titleFilter, ratingFilter);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onTitleChange={handleTitleChange} onRatingChange={handleRatingChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
