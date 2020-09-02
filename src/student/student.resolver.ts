import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { StudentType } from "./student.type";
import { StudentService } from "./student.service";
import { Student } from "./student.entity";
import { CreateStudentInput } from "./student.input";

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(
    private studentService: StudentService
  ) {}
  @Query(returns => StudentType)
  student(
    @Args('id') id: string
  ): Promise<Student> {
    return this.studentService.getLesson(id);
  }

  @Query(returns => [StudentType])
  students(): Promise<Student[]> {
    return this.studentService.getLessons();
  }

  @Mutation(returns => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput
  ): Promise<Student> {
    return this.studentService.createLesson(createStudentInput);
  }
}
