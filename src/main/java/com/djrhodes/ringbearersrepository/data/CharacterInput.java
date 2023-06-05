package com.djrhodes.ringbearersrepository.data;

/**
 * Class for storing Character input data
 */
public class CharacterInput {

    /** Character name */
    private String name;
    /** Link to character wiki */
    private String link;
    /** Character race */
    private String race;


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
