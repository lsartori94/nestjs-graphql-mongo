import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { Lesson } from "./lesson.entity";

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService
  ) {}
  @Query(returns => LessonType)
  lesson(
    @Args('id') id: string
  ): Promise<Lesson> {
    return this.lessonService.getLesson(id);
  }

  @Query(returns => [LessonType])
  lessons(): Promise<Lesson[]> {
    return this.lessonService.getLessons();
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput
  ): Promise<Lesson> {
    return this.lessonService.createLesson(createLessonInput);
  }
}

