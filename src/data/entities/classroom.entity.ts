import { PersonEntity } from "./person.entity";
import { StudentEntity } from "./student.entity";

export interface ClassrommEntity {
  id: string;
  level: string;
  name: string;
  student: StudentEntity[];
  teachers: PersonEntity[];
}