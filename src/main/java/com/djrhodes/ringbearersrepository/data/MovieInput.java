package com.djrhodes.ringbearersrepository.data;

/**
 * Class for storing Character Input Data.
 */
public class MovieInput {

    private String id;
    private String name;
    private int runtime_in_minutes;
    private double budget_in_millions;
    private double box_office_revenue_in_millions;
    private int academy_award_nominations;
    private int academy_award_wins;
    private double rotten_tomatoes_score;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRuntime_in_minutes() {
        return runtime_in_minutes;
    }

    public void setRuntime_in_minutes(int runtime_in_minutes) {
        this.runtime_in_minutes = runtime_in_minutes;
    }

    public double getBudget_in_millions() {
        return budget_in_millions;
    }

    public void setBudget_in_millions(double budget_in_millions) {
        this.budget_in_millions = budget_in_millions;
    }

    public double getBox_office_revenue_in_millions() {
        return box_office_revenue_in_millions;
    }

    public void setBox_office_revenue_in_millions(double box_office_revenue_in_millions) {
        this.box_office_revenue_in_millions = box_office_revenue_in_millions;
    }

    public int getAcademy_award_nominations() {
        return academy_award_nominations;
    }

    public void setAcademy_award_nominations(int academy_award_nominations) {
        this.academy_award_nominations = academy_award_nominations;
    }

    public int getAcademy_award_wins() {
        return academy_award_wins;
    }

    public void setAcademy_award_wins(int academy_award_wins) {
        this.academy_award_wins = academy_award_wins;
    }

    public double getRotten_tomatoes_score() {
        return rotten_tomatoes_score;
    }

    public void setRotten_tomatoes_score(double rotten_tomatoes_score) {
        this.rotten_tomatoes_score = rotten_tomatoes_score;
    }
}
