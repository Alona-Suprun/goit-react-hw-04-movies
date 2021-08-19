import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import s from "./Navigation.module.css";
import HomePage from "../HomePage/HomePage";
import MoviesPage from "../MoviesPage/MoviesPage";

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
      <Route path="/movies" component={MoviesPage} />
    </Switch>
  </>
);

//   <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
//   <Route path="/movies/:movieId/cast" component={Cast} />
// <Route path="/movies/:movieId/reviews" component={Reviews} />
//   <Route component={NotFound} />
export default Navigation;
