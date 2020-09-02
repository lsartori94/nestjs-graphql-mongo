import { Injectable } from '@nestjs/common';
import { LessonRepository } from './lesson.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonRepository)
    private lessonRepository: LessonRepository
  ) {}

  async createLesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
    return this.lessonRepository.createLesson(createLessonDto);
  }
}
