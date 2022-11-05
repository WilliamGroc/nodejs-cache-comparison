import { ClassrommEntity } from "../entities/classroom.entity";
import { v4 } from 'uuid';
import faker from 'faker';
import { getPerson } from "./person.mock";
import { getStudent } from "./student.mock";

export function getClassroom(): ClassrommEntity {
  const level = Math.floor(Math.random() * 11) + '';
  return {
    id: v4(),
    level,
    name: `${level}${faker.name.title()}`,
    student: new Array(30).fill('').map(getStudent),
    teachers: new Array(10).fill('').map(getPerson)
  }
}