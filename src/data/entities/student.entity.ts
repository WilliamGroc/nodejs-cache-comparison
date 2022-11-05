import { ExamEntity } from "./exam.entity";
import { PersonEntity } from "./person.entity";

export interface StudentEntity {
  id: string;
  person: PersonEntity;
  exams: ExamEntity[];
  year: number;
}