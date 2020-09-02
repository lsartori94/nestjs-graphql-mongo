import { Entity, Column, PrimaryColumn, ObjectIdColumn } from "typeorm";

@Entity()
export class Student {
  @ObjectIdColumn()
  _id: string; // Mongo exclusive variable

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
