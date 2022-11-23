import { AppDataSource } from "../../data-source";
import { SchoolEntity } from "../../data/entities/school.entity";
import { SchoolGenerator } from "../../data/generator/school.generator";

export async function saveAllSchool(count = 10): Promise<SchoolEntity[]> {
  try {
    return AppDataSource.getRepository(SchoolEntity).save(await SchoolGenerator.generate(count), { chunk: 1 });
  } catch (e) {
    console.log(e)
    return [];
  }
}