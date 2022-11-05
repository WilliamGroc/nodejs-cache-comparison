import { SchoolEntity } from "../entities/school.entity";
import { v4 } from 'uuid';
import faker from 'faker';
import { getClassroom } from "./classroom.mock";

export function getSchool(): SchoolEntity {
  return {
    id: v4(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    classrooms: new Array(40).fill('').map(getClassroom),
    creationDate: faker.date.past()
  }
}