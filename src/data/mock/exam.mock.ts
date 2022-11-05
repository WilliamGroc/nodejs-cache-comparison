import { ExamEntity } from "../entities/exam.entity";
import { v4 } from 'uuid';
import faker from 'faker';

export function getExam(): ExamEntity {
  return {
    id: v4(),
    subject: faker.vehicle.vehicle(),
    rating: Math.floor(Math.random() * 21)
  }
}