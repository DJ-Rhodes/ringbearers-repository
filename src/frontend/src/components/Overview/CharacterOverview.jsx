import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import css from './CharacterOverview.module.css';
import { BiSearch } from 'react-icons/bi';
import removeDiacritics from 'diacriticless';

const CharacterOverview = () => {
    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('http://localhost:8080/characters');
            const data = await response.json();
            setCharacters(data);
            setFilteredCharacters(data);
        };
        fetchCharacters();
    }, []);

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchQuery(value);

        const filtered = characters.filter((character) =>
            removeDiacritics(character.name.toLowerCase()).includes(removeDiacritics(value.toLowerCase()))
        );
        setFilteredCharacters(filtered);
    };

    const handleCharacterClick = (characterName) => {
        navigate(`/character/${characterName}`);
        setSearchQuery('');
        setFilteredCharacters(characters);
    };

    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src="../../public/logo.png" alt="logo" />
                <span>Character List</span>
            </div>

            <div className={`grey-container ${css.stats}`}>
                <BiSearch size={40} className={css.searchIcon} />
                <input
                    type="text"
                    className={css.searchInput}
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search Character"
                    id="inpt_Search"
                />
            </div>

            <div className={css.chapters}>
                {filteredCharacters.map((character, index) => (
                    <Link to={`/character/${character.name}`} key={index} className={css.link}>
                        <div className={css.chapter} onClick={() => handleCharacterClick(character.name)}>
                            <div>
                                <span>{character.name}</span>
                            </div>
                            <div>
                                <span>Race:</span>
                                <span>{character.race}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CharacterOverview;
