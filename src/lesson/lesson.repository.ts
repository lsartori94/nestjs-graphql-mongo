import { Repository, EntityRepository } from "typeorm";
import { Lesson } from "./lesson.entity";
import { CreateLessonDto } from "./dto/create-lesson.dto";
import { v4 as uuid } from 'uuid';

@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson> {
  async createLesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const { name, startDate, endDate} = createLessonDto;

    const lesson = this.create();
    lesson.id = uuid();
    lesson.name = name;
    lesson.startDate = startDate;
    lesson.endDate = endDate;

    try {
      await this.save(lesson);
    } catch (error) {

    }

    return lesson;
  }
}
