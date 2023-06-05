package com.djrhodes.ringbearersrepository.model.repository;

import com.djrhodes.ringbearersrepository.model.Chapter;
import org.springframework.data.repository.CrudRepository;


import java.util.List;

/**
 * Crud repository for Chapters
 */
public interface ChapterRepository extends CrudRepository<Chapter, Long> {
    List<Chapter> findAllByMovieIgnoreCase(String movieName);

}
