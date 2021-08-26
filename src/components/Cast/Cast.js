import { useState, useEffect } from "react";

import * as moviesApi from "../../api/moviesApi";
import img from "../../images/camera.svg";
import s from "../Cast/Cast.module.css";

const Cast = ({ movieId }) => {
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    moviesApi.fetchMovieCast(movieId).then((movie) => setMovieCast(movie.cast));
  }, [movieId]);

  return (
    <>
      {movieCast ? (
        <ul className={s.actors}>
          {movieCast.map((cast) => (
            <li key={cast.id} className={s.actor}>
              <img
                className={s.actorImage}
                src={
                  cast.profile_path === null
                    ? img
                    : `https://image.tmdb.org/t/p/original${cast.profile_path}`
                }
                alt={cast.name}
              />
              <span>{cast.name}</span>
              <br />
              Character: {cast.character}
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.movieDetailsCard}>
          There is no cast information for this movie.)
        </p>
      )}
    </>
  );
};

export default Cast;
