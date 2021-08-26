import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import * as moviesApi from "../../api/moviesApi";
import s from "./HomePage.module.css";
import img from "../../images/camera.svg";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then((movies) => setMovies(movies.results));
  }, []);

  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      {movies && (
        <ul className={s.movieList}>
          {movies.map((movie) => (
            <li className={s.movieCard} key={movie.id}>
              <Link
                className={s.movieCardTitle}
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                <img
                  src={
                    movie.poster_path === null
                      ? img
                      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  }
                  alt={movie.title}
                  className={s.movieCardImage}
                />
                <h2 className={s.movieCardTitle}>{movie.title}</h2>
                <p>{movie.release_date}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HomePage;
