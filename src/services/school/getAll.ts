import { AppDataSource } from "../../data-source";
import { SchoolEntity } from "../../data/entities/school.entity";

export async function getAllSchools(): Promise<SchoolEntity[]> {
  return AppDataSource.getRepository(SchoolEntity).createQueryBuilder()
  .innerJoinAndSelect('SchoolEntity.classrooms', 'ClassroomEntity')
  .innerJoinAndSelect('ClassroomEntity.student', 'PersonEntity')
  .getMany();
}

export async function getFilteredSchools(): Promise<SchoolEntity[]> {
  return AppDataSource.getRepository(SchoolEntity).createQueryBuilder()
  .innerJoinAndSelect('SchoolEntity.classrooms', 'ClassroomEntity')
  .innerJoinAndSelect('ClassroomEntity.student', 'PersonEntity')
  .orderBy('SchoolEntity.name')
  .where('PersonEntity.age < 10')
  .take(10)
  .getMany();
}