package com.djrhodes.ringbearersrepository.data;

/**
 * Class for storing Chapter input data
 */
public class ChapterInput {

    /** Movie name */
    private String movie;
    /** Chapter name */
    private String chapter;
    /** Character name */
    private String character;
    /** Character race */
    private String race;
    /** Word count by Character */
    private int words;

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
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
