package com.djrhodes.ringbearersrepository.data;

import com.djrhodes.ringbearersrepository.model.Movie;
import org.springframework.batch.item.ItemProcessor;

/**
 * Item Processor for Movie data.
 */
public class MovieDataProcessor implements ItemProcessor<MovieInput, Movie> {

    /**
     * Processes Movie Input data into new Movie object.
     * @param movieInput
     * @return Movie
     * @throws Exception
     */
    @Override
    public Movie process(final MovieInput movieInput) throws Exception {

        Movie movie = new Movie();
        movie.setId(Long.parseLong(movieInput.getId()));
        movie.setName(movieInput.getName());
        movie.setRuntime(movieInput.getRuntime_in_minutes());
        movie.setBudget(movieInput.getBudget_in_millions());
        movie.setRevenue(movieInput.getBox_office_revenue_in_millions());
        movie.setNominations(movieInput.getAcademy_award_nominations());
        movie.setWins(movieInput.getAcademy_award_wins());
        movie.setScore(movieInput.getRotten_tomatoes_score());

        return movie;
    }
}
