import { ClassroomEntity } from "../entities/classroom.entity";
import * as faker from 'faker';
import { getPerson } from "./person.mock";

export function getClassroom(): ClassroomEntity {
  const level = Math.floor(Math.random() * 11) + '';

  const classroom = new ClassroomEntity();
  classroom.level = level;
  classroom.name = `${level}${faker.name.title()}`;
  classroom.color = faker.commerce.color();
  classroom.location = faker.address.streetName();
  classroom.windowCount = Math.floor(Math.random() * 4);
  classroom.size = Math.floor(Math.random() * 40);
  classroom.student = new Array(30).fill('').map(getPerson);

  return classroom;
}