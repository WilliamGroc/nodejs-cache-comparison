import { SchoolEntity } from "../entities/school.entity";
import * as faker from 'faker';
import { getClassroom } from "./classroom.mock";

export function getSchool(): SchoolEntity {
  const school = new SchoolEntity();
  school.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  school.classrooms = new Array(40).fill('').map(getClassroom);
  school.address = faker.address.streetAddress();
  school.zipcode = faker.address.zipCode();
  school.country = faker.address.country();

  return school;
}