import { PersonEntity } from "../entities/person.entity";
import * as faker from 'faker';

export function getPerson(): PersonEntity {
  const person = new PersonEntity();

  person.age = Math.floor(Math.random() * 20);
  person.firstname = faker.name.firstName();
  person.lastname = faker.name.lastName();
  person.address = faker.address.streetAddress();
  person.zipcode = faker.address.zipCode();
  person.country = faker.address.country();
  person.fatherName = faker.name.firstName();
  person.motherName = faker.name.firstName();
  person.brotherSisterCount = Math.floor(Math.random() * 4);
  person.car = faker.vehicle.vehicle();
  person.fatherCard = faker.finance.creditCardNumber();
  person.motherCard = faker.finance.creditCardNumber();

  return person
}