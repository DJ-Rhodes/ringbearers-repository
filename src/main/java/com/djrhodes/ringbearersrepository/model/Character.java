package com.djrhodes.ringbearersrepository.model;

import jakarta.persistence.*;

import java.util.HashMap;
import java.util.List;

/**
 * Character Object class
 */
@Entity
public class Character {

    /** Auto-generated ID */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /** Character name */
    private String name;
    /** URL to Character wiki */
    private String link;
    /** Character race */
    private String race;

    /** Total word count across all movies */
    @Transient
    private int wordTotal;
    /** Number of Chapters character appears in */
    @Transient
    private int numberOfChapters;
    /** Number of Movies character appears in */
    @Transient
    private int numberOfMovies;
    /** Word count by movie */
    @Transient
    private HashMap<String, Integer> movies;

    public int getWordTotal() {
        return wordTotal;
    }

    public void setWordTotal(int wordTotal) {
        this.wordTotal = wordTotal;
    }

    public int getNumberOfChapters() {
        return numberOfChapters;
    }

    public void setNumberOfChapters(int numberOfChapters) {
        this.numberOfChapters = numberOfChapters;
    }

    public int getNumberOfMovies() {
        return numberOfMovies;
    }

    public void setNumberOfMovies(int numberOfMovies) {
        this.numberOfMovies = numberOfMovies;
    }

    public HashMap<String, Integer> getMovies() {
        return movies;
    }

    public void setMovies(HashMap<String, Integer> movies) {
        this.movies = movies;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }
}
