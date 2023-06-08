import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import css from './CharacterDashboard.module.css';
import CharacterOverview from "../components/Overview/CharacterOverview.jsx";
import CharacterStatistics from "../components/Statistics/CharacterStatistics";

const CharacterDashboard = () => {
    const [character, setCharacter] = useState({});
    const { characterName: paramsCharacterName } = useParams();
    const [characterName, setCharacterName] = useState(paramsCharacterName);
    const [chartState, setChartState] = useState("Series");

    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await fetch(`http://localhost:8080/character/${characterName}`);
            const data = await response.json();
            setCharacter(data);
        };
        fetchCharacter();
    }, [characterName]);

    const handleCharacterChange = (e) => {
        const selectedChartState = e.target.value;
        setChartState(selectedChartState);
    };

    return (
        <div className={css.container}>
            {/* left side  */}
            <div className={css.dashboard}>
                <div className={`${css.dashboardHead} theme-container`}>
                    <div className={css.head}>
                        <span>{character.name}</span>
                        <div className={css.movieButton}>
                                <select className={css.movieSelect} onChange={handleCharacterChange}>
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
                                <a href={character.link} target="_blank" className={css.cardValue}>Wiki</a>
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
                <CharacterStatistics character={character} chartState={chartState}/>
            </div>
            <CharacterOverview />
        </div>
    );
};

export default CharacterDashboard;