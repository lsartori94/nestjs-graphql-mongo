import { Injectable } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentInput } from './student.input';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository
  ) {}

  async getLessons(): Promise<Student[]> {
    return this.studentRepository.getStudents();
  }

  async getLesson(id: string): Promise<Student> {
    return this.studentRepository.getStudent(id);
  }

  async createLesson(createStudentInput: CreateStudentInput): Promise<Student> {
    return this.studentRepository.createStudent(createStudentInput);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.getManyStudents(studentIds);
  }
}
