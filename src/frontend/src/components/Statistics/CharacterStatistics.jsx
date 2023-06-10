import React from 'react';
import css from './CharacterStatistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import CharacterStatisticsSeriesChart from '../StatisticsChart/CharacterStatisticsSeriesChart.jsx'
import CharacterStatisticsBarChart from '../StatisticsChart/CharacterStatisticsBarChart.jsx'

const CharacterStatistics = ({ character, chartState }) => {


    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Overview Statistics</span>

            <div className={`${css.cards} grey-container`}>

                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={css.card}>
                        <span>Type of Collection</span><span>Character</span>
                    </div>
                </div>

                <div className={css.card}>
                    <span>Appearances</span><span>{character.numberOfChapters}</span>
                </div>

                <div className={css.card}>
                    <span>Avg Words By Chapter</span><span>{character.numberOfChapters ? Math.round(character.wordTotal / character.numberOfChapters) : 0}</span>
                </div>

                <div className={css.card}>
                    <span>Total Words</span><span>{character.wordTotal}</span>
                </div>
            </div>

            {chartState === "Series" && <CharacterStatisticsSeriesChart character={character} />}
            {chartState === "Bar" && <CharacterStatisticsBarChart character={character} />}
        </div>
    )
}

export default CharacterStatistics;
