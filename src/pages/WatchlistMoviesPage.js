import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleWatched, deleteMovie } from '../redux/movieSlice';
import { FaEye, FaEyeSlash, FaEdit, FaTrash, FaInfoCircle, FaArrowLeft, FaCalendarAlt, FaFilm } from 'react-icons/fa';
import './styles/watched.style.scss';

const WatchlistMoviesPage = () => {
  const movies = useSelector((state) => state.movies.movies.filter(movie => movie.watched));
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      dispatch(deleteMovie(id));
    }
  };

  return (
    <div className="watchlist-container">
      <h2>Watchlist Movies</h2>
      <Link to="/">
        <button className="back-button"><FaArrowLeft /> Back to Home</button>
      </Link>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p><FaCalendarAlt /> {movie.releaseYear}</p>
          <p><FaFilm /> {movie.genre}</p>
          <div className="button-group">
            <button onClick={() => dispatch(toggleWatched(movie.id))}>
              {movie.watched ? <FaEyeSlash /> : <FaEye />} {movie.watched ? 'Unwatched' : 'Watched'}
            </button>
            <Link to={`/edit/${movie.id}`}>
              <button><FaEdit /> Edit</button>
            </Link>
            <button onClick={() => handleDelete(movie.id)}><FaTrash /> Delete</button>
            <Link to={`/movie/${movie.id}`}>
              <button><FaInfoCircle /> Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WatchlistMoviesPage;
