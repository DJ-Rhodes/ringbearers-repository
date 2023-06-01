package com.djrhodes.ringbearersrepository.controller;

import com.djrhodes.ringbearersrepository.model.Movie;
import com.djrhodes.ringbearersrepository.model.repository.MovieRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * Rest Controller for Movie.
 */
@RestController
@CrossOrigin
public class MovieController {

    /** The Movie Repository */
    private MovieRepository movieRepository;

    /** Spring injected constructor */
    public MovieController(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    /**
     * Get mapping for requesting a specific movie by name.
     * @param movieName
     * @return Movie Object with provided name.
     */
    @GetMapping("movie/{movieName}")
    public Movie getMovie(@PathVariable String movieName) {
        Movie movie = this.movieRepository.findByName(movieName);
        return movie;
    }
}
