import React, { useState } from 'react';
import MovieList from './components/MovieList';
import moviesData from './movies';
import { BrowserRouter as Router , Route, Routes, Link, useParams} from 'react-router-dom';
import MovieDescription from './components/MovieDescription';
import MovieList from './components/MovieList';


const App = () => {
  const [movies] = useState(moviesData);

  return (
    <Router>
      <div>
        <h1>Movie App</h1>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:title" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
