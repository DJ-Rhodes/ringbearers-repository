package com.djrhodes.ringbearersrepository.data;

import com.djrhodes.ringbearersrepository.model.Character;
import org.springframework.batch.item.ItemProcessor;

/**
 * Item Processor for Character Input data
 */
public class CharacterDataProcessor implements ItemProcessor<CharacterInput, Character> {

    /**
     * Processes Character Input data into new Character object.
     * @param characterInput
     * @return
     * @throws Exception
     */
    @Override
    public Character process(final CharacterInput characterInput) throws Exception {

        Character character = new Character();
        character.setName(characterInput.getName());
        character.setLink(characterInput.getLink());
        character.setRace(characterInput.getRace());

        return character;
    }
}
