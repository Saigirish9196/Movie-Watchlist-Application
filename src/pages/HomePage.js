import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteMovie, toggleWatched } from "../redux/movieSlice";
import {
  FaEdit,
  FaTrash,
  FaInfoCircle,
  FaEye,
  FaEyeSlash,
  FaPlus,
  FaCalendarAlt,
  FaFilm,
} from "react-icons/fa";

import "./styles/Home.style.scss";

const HomePage = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      console.log(id);
      dispatch(deleteMovie(id));
    }
  };

  return (
    <div className="movie-container">
      <div className="add-watchlist-btn">
        <Link to="/add">
          <button>
            <FaPlus /> Add Movie
          </button>
        </Link>
        <Link to="/watchlist">
          <button>
            <FaEye /> Watchlist Movies
          </button>
        </Link>
      </div>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>
              <FaCalendarAlt /> {movie.releaseYear}
            </p>
            <p>
              <FaFilm /> {movie.genre}
            </p>
            <div className="button-group">
              <button
                className={movie.watched ? "watched" : ""}
                onClick={() => dispatch(toggleWatched(movie.id))}
              >
                {movie.watched ? <FaEyeSlash /> : <FaEye />}{" "}
                {movie.watched ? "Unwatched" : "Watched"}
              </button>
              <Link to={`/edit/${movie.id}`}>
                <button>
                  <FaEdit /> Edit
                </button>
              </Link>
              <button onClick={() => handleDelete(movie.id)}>
                <FaTrash /> Delete
              </button>
              <Link to={`/movie/${movie.id}`}>
                <button>
                  <FaInfoCircle /> Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
