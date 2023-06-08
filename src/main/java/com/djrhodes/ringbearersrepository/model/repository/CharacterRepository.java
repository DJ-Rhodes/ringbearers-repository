package com.djrhodes.ringbearersrepository.model.repository;

import com.djrhodes.ringbearersrepository.model.Character;
import org.springframework.data.repository.CrudRepository;


import java.text.Collator;
import java.util.List;

/**
 * Crud repository for Characters
 */
public interface CharacterRepository extends CrudRepository<Character, Long> {
    List<Character> findAllByOrderByName();

    default Character findByNameDiacriticInsensitive(String name) {
        Collator collator = Collator.getInstance();
        /** Ignores accents in names */
        collator.setStrength(Collator.PRIMARY);

        List<Character> characters = findAllByOrderByName();
        for (Character character : characters) {
            if (collator.compare(character.getName(), name) == 0) {
                return character;
            }
        }
        return null;
    }
}
