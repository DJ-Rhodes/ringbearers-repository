import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import css from './MovieDashboard.module.css';
import Statistics from '../components/Statistics/Statistics';
import ChapterOverview from "../components/Overview/ChapterOverview.jsx";

const MovieDashboard = () => {
  const [movie, setMovie] = useState({});
  const { movieName: paramsMovieName } = useParams();
  const [movieName, setMovieName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`http://localhost:8080/movie/${movieName}`);
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [movieName]);

  const handleMovieChange = (e) => {
    const selectedMovieName = e.target.value;
    setMovieName(selectedMovieName);
    navigate(`/dashboard/${selectedMovieName}`);
  };

  return (
      <div className={css.container}>
        {/* left side  */}
        <div className={css.dashboard}>
          <div className={`${css.dashboardHead} theme-container`}>
            <div className={css.head}>
              <span>{movie.name}</span>
              <div className={css.movieButton}>
                <select className={css.movieSelect} value={movieName} onChange={handleMovieChange}>
                  <option value="" disabled hidden>
                    Select Movie
                  </option>
                  <option value="The Lord of the Rings Series">The Lord of the Rings Series</option>
                  <option value="The Fellowship of the Ring">The Fellowship of the Ring</option>
                  <option value="The Two Towers">The Two Towers</option>
                  <option value="The Return of the King">The Return of the King</option>
                  <option value="The Hobbit Series">The Hobbit Series</option>
                  <option value="The Unexpected Journey">The Unexpected Journey</option>
                  <option value="The Desolation of Smaug">The Desolation of Smaug</option>
                  <option value="The Battle of the Five Armies">The Battle of the Five Armies</option>
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
        <ChapterOverview movie={movie} />
      </div>
  );
};

export default MovieDashboard;
