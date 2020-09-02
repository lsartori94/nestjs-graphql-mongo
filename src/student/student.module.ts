import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { Student } from './student.entity';
import { StudentRepository } from './student.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Student,
      StudentRepository,
    ]),
  ],
  providers: [
    StudentResolver,
    StudentService
  ],
  exports: [
    StudentService,
  ]
})
export class StudentModule {}
