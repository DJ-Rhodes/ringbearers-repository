import React, { useEffect, useState } from 'react';
import css from './MovieDashboard.module.css';
import Statistics from '../components/Statistics/Statistics';
import MovieCharacters from '../components/MovieCharacters/MovieCharacters';

const MovieDashboard = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch('http://localhost:8080/movie/The Return of the King');
      const data = await response.json();
      setMovie(data);
      console.log({ movie });
    };
    fetchMovie();
  }, []);

  return (
    <div className={css.container}>
      {/* left side  */}
      <div className={css.dashboard}>
        <div className={`${css.dashboardHead} theme-container`}>
          <div className={css.head}>
            <span>{movie.name}</span>
            <div className={css.movieButton}>
              <select>
                <option value="">Movie 1</option>
                <option value="">Movie 2</option>
                <option value="">Movie 3</option>
              </select>
            </div>
          </div>
          <div className={css.cards}>
            <div className={css.card}>
              <div className={css.cardHead}>
                <span className={css.cardTitle}>Runtime</span>
                <span className={css.cardUnits}>(min)</span>
              </div>
              <div className={css.cardAmount}>
                <span className={css.cardValue}>{movie.runtime}</span>
              </div>
            </div>
            <div className={css.card}>
              <div className={css.cardHead}>
                <span className={css.cardTitle}>Budget</span>
                <span className={css.cardUnits}>(in Millions)</span>
              </div>
              <div className={css.cardAmount}>
                <span className={css.cardDollar}>$</span>
                <span className={css.cardValue}>{movie.budget}</span>
              </div>
            </div>
            <div className={css.card}>
              <div className={css.cardHead}>
                <span className={css.cardTitle}>Academy Wins</span>
              </div>
              <div className={css.cardAmount}>
                <span className={css.cardValue}>{movie.wins}</span>
              </div>
            </div>
            <div className={css.card}>
              <div className={css.cardHead}>
                <span className={css.cardTitle}>Rating</span>
                <span className={css.cardUnits}>(as Percent)</span>
              </div>
              <div className={css.cardAmount}>
                <span className={css.cardValue}>{movie.score}</span>
              </div>
            </div>
          </div>
        </div>
        <Statistics movie={movie} />
      </div>
      <MovieCharacters movie={movie}/>
    </div>
  );
};

export default MovieDashboard;