package com.djrhodes.ringbearersrepository.controller;

import com.djrhodes.ringbearersrepository.model.Chapter;
import com.djrhodes.ringbearersrepository.model.Movie;
import com.djrhodes.ringbearersrepository.model.repository.ChapterRepository;
import com.djrhodes.ringbearersrepository.model.repository.MovieRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

/**
 * Rest Controller for Movie.
 */
@RestController
@CrossOrigin(origins = "*")
public class MovieController {

    /** The Movie Repository */
    private MovieRepository movieRepository;
    /** The Chapter Repository */
    private  ChapterRepository chapterRepository;

    /** Spring injected constructor */
    public MovieController(MovieRepository movieRepository, ChapterRepository chapterRepository) {
        this.movieRepository = movieRepository;
        this.chapterRepository = chapterRepository;
    }

    /**
     * Get mapping for requesting a specific movie by name.
     * @param movieName
     * @return Movie Object with provided name.
     */
    @GetMapping("movie/{movieName}")
    public Movie getMovie(@PathVariable String movieName) {
        Movie movie = this.movieRepository.findByName(movieName);
        List<Chapter> chapters = this.chapterRepository.findAllByMovieIgnoreCase(movieName);
        Map<String, Chapter> chapterMap = new HashMap<>();

        /** Calculate total words per chapter */
        chapters.forEach(chapter -> {
            String chapterName = chapter.getChapter();
            int chapterWords = chapter.getWords();

            if (chapterMap.containsKey(chapterName)) {
                Chapter existingChapter = chapterMap.get(chapterName);
                existingChapter.setWords(existingChapter.getWords() + chapterWords);
            } else {
                chapterMap.put(chapterName, new Chapter(movie.getName(), chapterName, chapterWords));
            }
        });


        List<Chapter> mergedChapters = new ArrayList<>(chapterMap.values());
        Collections.sort(mergedChapters, Comparator.comparing(Chapter::getChapter));

        /** Add new chapters with word count to movie */
        movie.setChapters(mergedChapters);
        return movie;
    }
}
