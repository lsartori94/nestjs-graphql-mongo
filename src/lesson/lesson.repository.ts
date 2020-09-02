import { Repository, EntityRepository } from "typeorm";
import { Lesson } from "./lesson.entity";
import { CreateLessonInput } from "./lesson.input";
import { v4 as uuid } from 'uuid';

@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson> {
  async getLessons(): Promise<Lesson[]> {
    try {
      return this.find();
    } catch (error) {

    }
  }

  async getLesson(id: string): Promise<Lesson> {
    try {
      return this.findOne({ id });
    } catch(error) {

    }
  }

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate} = createLessonInput;

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
