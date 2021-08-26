import { useState, useEffect } from "react";
import {
  NavLink,
  useParams,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";

import * as moviesApi from "../../api/moviesApi";
import img from "../../images/camera.svg";
import s from "./MovieDetailsPage.module.css";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    if (movieId) {
      moviesApi.fetchMoviesDetails(movieId).then(setMovieDetails);
    }
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <div className={s.movieDetailsCard}>
          <img
            className={s.movieDetailsCardImage}
            src={
              movieDetails.poster_path === null
                ? img
                : `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            }
            alt={movieDetails.title}
          />
          <div className={s.text}>
            <h2>{movieDetails.title}</h2>
            <p>{movieDetails.release_date}</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            {movieDetails.genres.length !== 0 ? (
              <ul>
                {movieDetails.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            ) : (
              <p>This film has no genres</p>
            )}
            <h2>Aditional infirmation:</h2>
            <ul className={s.movieDetailsItems}>
              <li>
                <NavLink className={s.movieDetailsItems} to={`${url}/cast`}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink className={s.movieDetailsItems} to={`${url}/reviews`}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Switch>
        <Route path={`${path}/cast`}>
          {movieDetails && <Cast movieId={movieId} />}
        </Route>
        <Route path={`${path}/reviews`}>
          {movieDetails && <Reviews movieId={movieId} />}
        </Route>
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
