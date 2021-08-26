import { lazy, Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import s from "./Navigation.module.css";

const HomePage = lazy(() =>
  import("../HomePage/HomePage.js" /*webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("../MoviesPage/MoviesPage.js" /*webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../MovieDetailsPage/MovieDetailsPage.js" /*webpackChunkName: "movie-details-page" */
  )
);

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
    <Suspense fallback={<Loader type="Bars" />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </Switch>
    </Suspense>
  </>
);

export default Navigation;
