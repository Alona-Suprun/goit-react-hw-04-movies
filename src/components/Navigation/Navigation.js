import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import s from "./Navigation.module.css";
import HomePage from "../HomePage/HomePage";
import MoviesPage from "../MoviesPage/MoviesPage";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";

const Navigation = () => (
  <>
    <ul className={s.navigation}>
      <li>
        <NavLink
          exact
          to="/"
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          Movies
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
    </Switch>
  </>
);

export default Navigation;
