import { Repository, EntityRepository } from "typeorm";
import { Student } from "./student.entity";
import { CreateStudentInput } from "./student.input";
import { v4 as uuid } from 'uuid';

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  async getStudents(): Promise<Student[]> {
    try {
      return this.find();
    } catch (error) {

    }
  }

  async getStudent(id: string): Promise<Student> {
    try {
      return this.findOne({ id });
    } catch(error) {

    }
  }

  async createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = createStudentInput;

    const student = this.create();
    student.id = uuid();
    student.firstName = firstName;
    student.lastName = lastName;

    try {
      return this.save(student);
    } catch (error) {

    }
  }
}
