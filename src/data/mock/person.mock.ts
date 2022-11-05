import { PersonEntity } from "../entities/person.entity";
import { v4 } from 'uuid';
import faker from 'faker';
import { getAddress } from "./address.mock";

export function getPerson(): PersonEntity{
  return {
    id: v4(),
    age: Math.floor(Math.random()*20),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    address: getAddress()
  }
}