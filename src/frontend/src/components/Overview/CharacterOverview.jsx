import React, {useState, useEffect} from 'react'
import css from './CharacterOverview.module.css'

const CharacterOverview = () => {
    const [characters, setCharacters] = useState([])


    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch(`http://localhost:8080/characters`);
            const data = await response.json();
            setCharacters(data);
        };
        fetchCharacters();
    }, []);

    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src="../../public/logo.png" alt="logo" />
                <span>Character List</span>
            </div>

            <div className={`grey-container ${css.stats}`}>
                <span>Overview</span>
            </div>

            <div className={css.chapters}>
                {characters.map((character, index) => (
                    <div key={index} className={css.chapter}>
                        <div>
                            <span>{character.name}</span>
                        </div>
                        <div>
                            <span>Race:</span>
                            <span>{character.race}</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CharacterOverview