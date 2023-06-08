package com.djrhodes.ringbearersrepository.controller;

import com.djrhodes.ringbearersrepository.model.Chapter;
import com.djrhodes.ringbearersrepository.model.Character;
import com.djrhodes.ringbearersrepository.model.repository.ChapterRepository;
import com.djrhodes.ringbearersrepository.model.repository.CharacterRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import java.util.HashMap;
import java.util.List;


@RestController
@CrossOrigin
/**
 * Rest Controller for Characters
 */
public class CharacterController {

    /** The Character Repository */
    private CharacterRepository characterRepository;
    /** The Chapter Repository */
    private ChapterRepository chapterRepository;

    /**
     * Spring injected constructor
     * @param characterRepository
     * @param chapterRepository
     */
    public CharacterController(CharacterRepository characterRepository, ChapterRepository chapterRepository) {
        this.characterRepository = characterRepository;
        this.chapterRepository = chapterRepository;
    }

    /**
     * Get Mapping for returning all characters
     * @return Characters
     */
    @GetMapping("/characters")
    private List<Character> getCharacters() {
        return characterRepository.findAllByOrderByName();
    }

    /**
     * Get Mapping for returning a single character by name
     * @param characterName
     * @return Character
     */
    @GetMapping("/character/{characterName}")
    private Character getCharacterByName(@PathVariable String characterName) {
        Character character = characterRepository.findByNameDiacriticInsensitive(characterName);
        List<Chapter> chapters = chapterRepository.findAllByCharacterIgnoreCase(characterName);
        HashMap<String, Integer> moviesMap= new HashMap<>();

        /** Add Movie, Chapter, and word totals to the character */
        chapters.forEach(chapter -> {
            String movieName = chapter.getMovie();

            character.setNumberOfChapters(character.getNumberOfChapters() + 1);
            character.setWordTotal(character.getWordTotal() + chapter.getWords());

            if (moviesMap.containsKey(movieName)) {
                int existingWords = moviesMap.get(movieName);
                moviesMap.put(movieName, existingWords + chapter.getWords());
            }
            else {
                moviesMap.put(movieName, chapter.getWords());

            }
        });

        character.setMovies(moviesMap);
        character.setNumberOfMovies(moviesMap.size());
        return character;
    }

}
