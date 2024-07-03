import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import HomePage from './pages/HomePage';
import AddEditMoviePage from './pages/AddEditMoviePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import { PersistGate } from 'redux-persist/integration/react';
import WatchlistMoviesPage from './pages/WatchlistMoviesPage';
import Navbar from './components/navbar/Navbar';
import './App.scss'

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <Router>
        <div className="app">
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddEditMoviePage />} />
            <Route path="/edit/:id" element={<AddEditMoviePage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
            <Route path="/watchlist" element={<WatchlistMoviesPage />} />
          </Routes>
        </div>
      </Router>
      </PersistGate>
      </Provider>
  );
}

export default App;

