package com.djrhodes.ringbearersrepository.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * Chapter Object class
 */
@Entity
public class Chapter {

    /** Auto-generated ID */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /** Movie name */
    private String movie;
    /** Chapter name */
    private String chapter;
    /** Character name */
    private String character;
    /** Character race */
    private String race;
    /** Word count */
    private int words;

    /** Default constructor */
    public Chapter() {
    }

    /**
     * Chapter Constructor
     * @param movie
     * @param chapter
     * @param words
     */
    public Chapter(String movie, String chapter, int words) {
        this.movie = movie;
        this.chapter = chapter;
        this.words = words;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public String getChapter() {
        return chapter;
    }

    public void setChapter(String chapter) {
        this.chapter = chapter;
    }

    public String getCharacter() {
        return character;
    }

    public void setCharacter(String character) {
        this.character = character;
    }

    public int getWords() {
        return words;
    }

    public void setWords(int words) {
        this.words = words;
    }
}