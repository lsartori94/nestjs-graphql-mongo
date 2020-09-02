import { Entity, Column, PrimaryColumn, ObjectIdColumn } from "typeorm";

@Entity()
export class Lesson {
  @ObjectIdColumn()
  _id: string; // Mongo exclusive variable

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  students: string[];
}
