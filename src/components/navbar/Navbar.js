import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navbar.style.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link className="nav-link" to="/">
          <h1>Movie Watchlist</h1>
        </Link>
      </div>
      <ul className="nav">
        <li>
          <NavLink
            className="nav-link"
            to="/watchlist"
            activeClassName="active"
          >
            WatchedMovies
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/add" activeClassName="active">
            Add Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
