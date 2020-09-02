import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonRepository } from './lesson.repository';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Lesson,
      LessonRepository,
    ]),
    StudentModule
  ],
  providers: [
    LessonResolver,
    LessonService,
  ],
})
export class LessonModule {}
