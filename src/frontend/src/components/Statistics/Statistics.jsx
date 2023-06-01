import React, { useEffect, useState } from 'react';
import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'

const Statistics = ({movie}) => {

  return (
    <div className={`${css.container} theme-container`}>
      <span className={css.title}>Overview Statistics</span>

      <div className={`${css.cards} grey-container`}>

        <div>
          <div className={css.arrowIcon}>
            <BsArrowUpShort/>
          </div>

          <div className={css.card}>
            <span>Type of Collection</span><span>{movie.name && movie.name.includes('Series') ? "Series" : "Movie"}</span>
          </div>
        </div>

        <div className={css.card}>
          <span>Budget</span><span>$ {groupNumber(movie.budget * 1000000)}</span>
        </div>

        <div className={css.card}>
          <span>Revenue</span><span>$ {groupNumber(movie.revenue * 1000000)}</span>
        </div>

        <div className={css.card}>
          <span>Profit</span><span>$ {groupNumber((movie.revenue - movie.budget) * 1000000)}</span>
        </div>
      </div>

      <StatisticsChart movie={movie} />

    </div>
  )
}

export default Statistics
