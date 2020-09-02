import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class CreateLessonDto {
  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
