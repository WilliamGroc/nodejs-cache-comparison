import { ClassrommEntity } from "./classroom.entity";

export interface SchoolEntity {
  id: string;
  name: string;
  creationDate: Date;
  classrooms: ClassrommEntity[];
}