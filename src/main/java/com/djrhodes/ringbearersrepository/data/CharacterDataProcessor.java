package com.djrhodes.ringbearersrepository.data;

import com.djrhodes.ringbearersrepository.model.Character;
import com.djrhodes.ringbearersrepository.model.Movie;
import org.springframework.batch.item.ItemProcessor;

public class CharacterDataProcessor implements ItemProcessor<CharacterInput, Character> {


    @Override
    public Character process(final CharacterInput characterInput) throws Exception {

        Character character = new Character();
        character.setName(characterInput.getName());
        character.setLink(characterInput.getLink());
        character.setRace(characterInput.getRace());

        return character;
    }
}
