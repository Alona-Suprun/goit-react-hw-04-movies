import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { toast } from "react-toastify";

import * as moviesApi from "../../api/moviesApi";

import s from "../HomePage/HomePage.module.css";
import Searchbar from "../Searchbar/Searchbar";
import img from "../../images/camera.svg";

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  console.log(searchValue);
  useEffect(() => {
    if (!searchValue) {
      return;
    }
    moviesApi.fetchMoviesByName(searchValue).then((movies) => {
      if (movies.length === 0) {
        toast(`Sorry, there is no movies of ${searchValue}!`);
        return;
      } else setMovies(movies.results);
    });
  }, [searchValue]);

  return (
    <>
      <Searchbar onSubmit={setSearchValue} />
      {movies && (
        <ul className={s.homePageList}>
          {movies.map((movie) => (
            <li className={s.homePageCard} key={movie.id}>
              <Link
                className={s.homePageCardTitle}
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
                  className={s.homePageCardImage}
                />
                <h2 className={s.homePageCardTitle}>{movie.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MoviesPage;
