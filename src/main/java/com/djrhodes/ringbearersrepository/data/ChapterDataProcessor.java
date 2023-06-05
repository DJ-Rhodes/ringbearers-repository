package com.djrhodes.ringbearersrepository.data;

import com.djrhodes.ringbearersrepository.model.Chapter;
import org.springframework.batch.item.ItemProcessor;

/**
 * Item Processor for Chapter Data.
 */
public class ChapterDataProcessor implements ItemProcessor<ChapterInput, Chapter> {

    /**
     * Processes Chapter Input data into new Chapter object.
     * @param chapterInput
     * @return Chapter
     * @throws Exception
     */
    @Override
    public Chapter process(final ChapterInput chapterInput) throws Exception {

        Chapter chapter = new Chapter();
        chapter.setMovie(chapterInput.getMovie());
        chapter.setChapter(chapterInput.getChapter());
        chapter.setCharacter(chapterInput.getCharacter());
        chapter.setRace(chapterInput.getRace());
        chapter.setWords(chapterInput.getWords());

        return chapter;
    }
}