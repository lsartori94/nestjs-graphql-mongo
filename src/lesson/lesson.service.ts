import { Injectable } from '@nestjs/common';
import { LessonRepository } from './lesson.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLessonInput } from './lesson.input';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonRepository)
    private lessonRepository: LessonRepository
  ) {}

  async getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.getLessons();
  }

  async getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.getLesson(id);
  }

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    return this.lessonRepository.createLesson(createLessonInput);
  }
}
