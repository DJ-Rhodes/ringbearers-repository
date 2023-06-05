package com.djrhodes.ringbearersrepository.data.config;

import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobExecutionListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

/**
 * Spring Batch Job Completion Listener
 */
@Component
public class JobCompletionNotificationListener implements JobExecutionListener {

    /** The JDBC Template. */
    private final JdbcTemplate jdbcTemplate;

    /**
     * Spring Injected constructor.
     * @param jdbcTemplate
     */
    @Autowired
    public JobCompletionNotificationListener(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    /**
     * Checks status of job. If complete, prints movies to systems.
     * @param jobExecution
     */
    @Override
    public void afterJob(JobExecution jobExecution) {
        if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
            System.out.println("!!! JOB FINISHED! Time to verify the results");

            /*jdbcTemplate.query("SELECT name, budget, score FROM movie",
                    (rs, row) -> "Name" + rs.getString(1) + " Budget: " + rs.getDouble(2) + " Score:" + rs.getDouble(3))
                    .forEach(str -> System.out.println(str));

            jdbcTemplate.query("SELECT name, race FROM character",
                            (rs, row) -> "Name: " + rs.getString(1) + " Race: " + rs.getString(2))
                    .forEach(str -> System.out.println(str));*/

            jdbcTemplate.query("SELECT movie, chapter, character, words FROM chapter",
                            (rs, row) -> "Movie: " + rs.getString(1) + " Chapter: " + rs.getString(2) + " Character: " + rs.getString(3) + " Words: " + rs.getInt(4))
                    .forEach(str -> System.out.println(str));
        }

    }

}
