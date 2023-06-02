import React from 'react'
import { groupNumber, ordersData } from '../../data'
import css from './MovieCharacters.module.css'
import RacePieChart from '../RacePieChart/RacePieChart'

const MovieCharacter = ({movie}) => {
  return (
    <div className={`${css.container} theme-container`}>
        <div className={css.head}>
          <img src="../../public/logo.png" alt="logo" />
          <span>Character Stats</span>
        </div>

        <div className={`grey-container ${css.stats}`}>
          <span>Overview</span>
        </div>

        <div className={css.characters}>
          {
            <>
            <div className={css.character}>
              <div>
                <span>Frodo Baggins</span>
              </div>
              <div>
                <span>Race:</span>
                <span>Hobbit</span>
              </div>
            </div>

            <div className={css.character}>
              <div>
                <span>Merriadoc Brandybuck</span>
              </div>
              <div>
                <span>Race:</span>
                <span>Hobbit</span>
              </div>
            </div>

            <div className={css.character}>
              <div>
                <span>Gandalf</span>
              </div>
              <div>
                <span>Race:</span>
                <span>Maiar</span>
              </div>
            </div>

            <div className={css.character}>
              <div>
                <span>Aragorn</span>
              </div>
              <div>
                <span>Race:</span>
                <span>Men</span>
              </div>
            </div>
            </>
          }
        </div>

        <div className={css.raceChart}>
          <span>Split By Race</span>
          <RacePieChart/>
        </div>
    </div>
  )
}

export default MovieCharacter
