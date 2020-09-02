import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonDto } from "./dto/create-lesson.dto";
import { Lesson } from "./lesson.entity";

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService
  ) {}
  @Query(returns => LessonType)
  lesson() {
    return {
      id: 'asdf',
      name: 'Physics Class',
      startDate: (new Date()).toISOString(),
      endDate: (new Date()).toISOString(),
    }
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args() createLessonDto: CreateLessonDto
  ): Promise<Lesson> {
    return this.lessonService.createLesson(createLessonDto);
  }
}

