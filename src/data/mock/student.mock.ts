import { StudentEntity } from "../entities/student.entity";
import { v4 } from 'uuid';
import faker from 'faker';
import { getPerson } from "./person.mock";
import { getExam } from "./exam.mock";

export function getStudent(): StudentEntity{
  return {
    id: v4(),
    person: getPerson(),
    year: Math.floor(Math.random()*10)+2000,
    exams: new Array(100).fill('').map(getExam)
  }
}