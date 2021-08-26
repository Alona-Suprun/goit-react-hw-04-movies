import { useState, useEffect } from "react";

import * as moviesApi from "../../api/moviesApi";
import s from "../Reviews/Reviews.module.css";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesApi.fetchMovieReviews(movieId).then((movie) => {
      if (movie.results.length === 0) {
        return;
      }

      setReviews(movie.results);
    });
  }, [movieId]);

  return (
    <>
      {reviews ? (
        <ul className={s.movieDetailsCard}>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.movieDetailsCard}>
          There is no reviews for this movie yet. You can be FIRST!)
        </p>
      )}
    </>
  );
};

export default Reviews;
