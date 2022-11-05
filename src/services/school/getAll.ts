import { SchoolEntity } from "../../data/entities/school.entity";
import { SchoolRepository } from "../../data/repositories/school.repository";

export async function getAllSchools(): Promise<SchoolEntity[]> {
  const schoolRepository = new SchoolRepository();
  return schoolRepository.getAll();
}