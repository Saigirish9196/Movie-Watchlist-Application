import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    editMovie: (state, action) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      state.movies[index] = action.payload;
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    toggleWatched: (state, action) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      movie.watched = !movie.watched;
    },
    addReview: (state, action) => {
      const movie = state.movies.find(
        (movie) => movie.id === action.payload.id
      );
      if (!movie.reviews) {
        movie.reviews = [];
      }
      movie.reviews.push(action.payload.review);
    },
    addRating: (state, action) => {
      const movie = state.movies.find(
        (movie) => movie.id === action.payload.id
      );
      movie.rating = action.payload.rating;
    },
  },
});

export const { addRating,addReview,addMovie, editMovie, deleteMovie, toggleWatched } =
  movieSlice.actions;

export default movieSlice.reducer;
