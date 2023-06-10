import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import css from './CharacterDashboard.module.css';
import CharacterOverview from '../components/Overview/CharacterOverview.jsx';
import CharacterStatistics from '../components/Statistics/CharacterStatistics';

const CharacterDashboard = () => {
    const [character, setCharacter] = useState({});
    const { characterName } = useParams();
    const [chartState, setChartState] = useState('Series');
    const [prevChartState, setPrevChartState] = useState('Series');
    const navigate = useNavigate();
    const REACT_APP_API_ROOT_URL =""

    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await fetch(`${REACT_APP_API_ROOT_URL}/character/${characterName}`);
            const data = await response.json();
            setCharacter(data);
        };
        if(characterName) {
            fetchCharacter();
        }
    }, [characterName]);

    useEffect(() => {
        setPrevChartState(chartState);
    }, [chartState]);

    const handleCharacterChange = (e) => {
        const selectedChartState = e.target.value;
        setChartState(selectedChartState);
    };

    const handleOverviewCharacterClick = (name) => {
        navigate(`character/${name}`);
    };

    return (
        <div className={css.container}>
            {/* left side */}
            <div className={css.dashboard}>
                <div className={`${css.dashboardHead} theme-container`}>
                    <div className={css.head}>
                        <span>{character.name}</span>
                        <div className={css.chartButton}>
                            <select className={css.chartSelect} value={chartState} onChange={handleCharacterChange}>
                                <option value="Series">Series Chart</option>
                                <option value="Bar">Bar Chart</option>
                            </select>
                        </div>
                    </div>
                    <div className={css.cards}>
                        <div className={css.card}>
                            <div className={css.cardHead}>
                                <span className={css.cardTitle}>Link</span>
                            </div>
                            <div className={css.cardAmount}>
                                <a href={character.link} target="_blank" rel="noopener noreferrer" className={css.cardValue}>
                                    Wiki
                                </a>
                            </div>
                        </div>
                        <div className={css.card}>
                            <div className={css.cardHead}>
                                <span className={css.cardTitle}>Race</span>
                            </div>
                            <div className={css.cardAmount}>
                                <span className={css.cardValue}>{character.race}</span>
                            </div>
                        </div>
                        <div className={css.card}>
                            <div className={css.cardHead}>
                                <span className={css.cardTitle}>Movies</span>
                            </div>
                            <div className={css.cardAmount}>
                                <span className={css.cardValue}>{character.numberOfMovies}</span>
                            </div>
                        </div>
                        <div className={css.card}>
                            <div className={css.cardHead}>
                                <span className={css.cardTitle}>Chapters</span>
                            </div>
                            <div className={css.cardAmount}>
                                <span className={css.cardValue}>{character.numberOfChapters}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <CharacterStatistics character={character} chartState={chartState} prevChartState={prevChartState} />
            </div>
            {/* right side */}
            <CharacterOverview character={character} handleCharacterClick={handleOverviewCharacterClick} />
        </div>
    );
};

export default CharacterDashboard;
