package com.djrhodes.ringbearersrepository.model.repository;

import com.djrhodes.ringbearersrepository.model.Character;
import org.springframework.data.repository.CrudRepository;

/**
 * Crud repository for Characters
 */
public interface CharacterRepository extends CrudRepository<Character, Long> {

}
