import { AppDataSource } from "../../data-source";
import { SchoolEntity } from "../../data/entities/school.entity";
import { SchoolGenerator } from "../../data/generator/school.generator";

export async function deleteAllSchool(): Promise<void> {
  await AppDataSource.getRepository(SchoolEntity).delete({})
}