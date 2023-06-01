package com.djrhodes.ringbearersrepository.model.repository;

import com.djrhodes.ringbearersrepository.model.Movie;
import org.springframework.data.repository.CrudRepository;

/**
 * Crud Repository for Movies.
 */
public interface MovieRepository extends CrudRepository<Movie, Long> {

    Movie findByName(String name);

}
