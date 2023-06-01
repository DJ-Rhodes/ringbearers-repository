package com.djrhodes.ringbearersrepository.data.config;

import com.djrhodes.ringbearersrepository.data.MovieDataProcessor;
import com.djrhodes.ringbearersrepository.data.MovieInput;
import com.djrhodes.ringbearersrepository.model.Movie;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;

/**
 * Class for configuring Batch Processing.
 */
@Configuration
public class BatchConfig {

    /** SQL field names for movie table. */
    private final String[] MOVIE_FIELD_NAMES = new String[] {
            "id", "name", "runtime_in_minutes", "budget_in_millions", "box_office_revenue_in_millions",
            "academy_award_nominations", "academy_award_wins", "rotten_tomatoes_score"
    };

    /**
     * Creates a new Item Reader to generate Movie Input data.
     * @return Item Reader Builder
     */
    @Bean
    public FlatFileItemReader<MovieInput> movieReader() {
        return new FlatFileItemReaderBuilder<MovieInput>()
                .name("movieItemReader")
                .resource(new ClassPathResource("Movies.csv"))
                .delimited()
                .names(MOVIE_FIELD_NAMES)
                .fieldSetMapper(new BeanWrapperFieldSetMapper<MovieInput>() {{
                    setTargetType(MovieInput.class);
                }})
                .build();
    }

    /** The Movie Data Processor */
    @Bean
    public MovieDataProcessor movieProcessor() {
        return new MovieDataProcessor();
    }

    /**
     * Creates The Item Writer.
     * Inserts a new Movie into the movie table.
     * @param dataSource
     * @return The Item Writer.
     */
    @Bean
    public JdbcBatchItemWriter<Movie> movieWriter(DataSource dataSource) {
        return new JdbcBatchItemWriterBuilder<Movie>()
                .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
                .sql("INSERT INTO movie (id, name, runtime, budget, revenue, nominations, wins, score)"
                        + " VALUES (:id, :name, :runtime, :budget, :revenue, :nominations, :wins, :score)")
                .dataSource(dataSource)
                .build();
    }

    /**
     * Imports User Job.
     * Initializes Job Completion Listener.
     * Runs Step flow.
     * @param jobRepository
     * @param listener
     * @param step1
     * @return Job Builder
     */
    @Bean
    public Job importUserJob(JobRepository jobRepository,
                             JobCompletionNotificationListener listener, Step step1) {
        return new JobBuilder("importUserJob", jobRepository)
                .incrementer(new RunIdIncrementer())
                .listener(listener)
                .flow(step1)
                .end()
                .build();
    }

    /**
     * Step for reading, and writer a new movie.
     * @param jobRepository
     * @param transactionManager
     * @param writer
     * @return The Step
     */
    @Bean
    public Step step1(JobRepository jobRepository,
                      PlatformTransactionManager transactionManager, JdbcBatchItemWriter<Movie> writer) {
        return new StepBuilder("step1", jobRepository)
                .<MovieInput, Movie>chunk(10, transactionManager)
                .reader(movieReader())
                .processor(movieProcessor())
                .writer(writer)
                .build();
    }

}
