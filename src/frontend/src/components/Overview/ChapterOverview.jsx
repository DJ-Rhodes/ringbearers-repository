import React, {useState, useEffect} from 'react'
import css from './ChapterOverview.module.css'
import RacePieChart from '../RacePieChart/RacePieChart'

const ChapterOverview = ({movie}) => {
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        function getChapters() {
            if (movie && movie.chapters) {
                const filteredChapters = movie.chapters.filter((e) =>
                    e.movie && e.movie.toLowerCase() === movie.name.toLowerCase()
                );
                setChapters(filteredChapters);
            }
        }

        getChapters();
    }, [movie]);

  return (
    <div className={`${css.container} theme-container`}>
        <div className={css.head}>
          <img src="/logo.png" alt="logo" />
          <span>Chapter List</span>
        </div>

        <div className={`grey-container ${css.stats}`}>
          <span>Overview</span>
        </div>

        <div className={css.chapters}>
            {chapters.map((chapter, index) => (
                <div key={index} className={css.chapter}>
                    <div>
                        <span>{chapter.chapter}</span>
                    </div>
                    <div>
                        <span>Word Count:</span>
                        <span>{chapter.words}</span>
                    </div>
                </div>
            ))}
        </div>

        <div className={css.raceChart}>
          <span>Split By Chapter</span>
          <RacePieChart chapters={chapters}/>
        </div>
    </div>
  )
}

export default ChapterOverview
