import { Repository, EntityRepository } from "typeorm";
import { Lesson } from "./lesson.entity";
import { CreateLessonInput } from "./lesson.input";
import { v4 as uuid } from 'uuid';
import { AssignStudentsToLessonInput } from "./assign-students-to-lesson.input";

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
    const { name, startDate, endDate, students } = createLessonInput;

    const lesson = this.create();
    lesson.id = uuid();
    lesson.name = name;
    lesson.startDate = startDate;
    lesson.endDate = endDate;
    lesson.students = students;

    try {
      return this.save(lesson);
    } catch (error) {

    }
  }

  async assignStudentsToLesson(assignStudentsToLesson: AssignStudentsToLessonInput): Promise<Lesson> {
    const { lessonId, studentIds } = assignStudentsToLesson;
    const lesson = await this.getLesson(lessonId);
    lesson.students = [
      ...lesson.students,
      ...studentIds
    ];

    return this.save(lesson);
  }
}
