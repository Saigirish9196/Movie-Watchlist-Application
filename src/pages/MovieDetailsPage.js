import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { addReview, addRating } from '../redux/movieSlice';
import { FaCalendarAlt, FaFilm, FaStar, FaPen, FaArrowLeft } from 'react-icons/fa';
import './styles/moviedetails.style.scss';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movies.movies.find((m) => m.id === id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    dispatch(addReview({ id: movie.id, review }));
    setReview('');
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    dispatch(addRating({ id: movie.id, rating }));
  };

  return (
    <div className="movie-details-container">
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p><FaFilm /> {movie.genre}</p>
      <p><FaCalendarAlt /> {movie.releaseYear}</p>
      <p><FaStar /> {`Rating: ${movie.rating}`}</p>
      <p>{movie.watched ? 'Watched' : 'Unwatched'}</p>
      <form onSubmit={handleRatingSubmit} className="rating-form">
        <label>Rate this movie: </label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
        />
        <button type="submit">Submit Rating</button>
      </form>
      <form onSubmit={handleReviewSubmit} className="review-form">
        <label>Write a review: </label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
      <h4><FaPen /> Reviews:</h4>
      {movie.reviews && movie.reviews.length > 0 ? (
        movie.reviews.map((rev, index) => <p key={index}>{rev}</p>)
      ) : (
        <p>No reviews yet.</p>
      )}
      <div className="button-group">
        <Link to={`/edit/${movie.id}`}>
          <button><FaPen /> Edit</button>
        </Link>
        <button onClick={() => navigate('/')}><FaArrowLeft /> Back to List</button>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
