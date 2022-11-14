import { SchoolEntity } from "../entities/school.entity";
import { getSchool } from "../mock/school.mock";

export class SchoolRepository {
  async getAll(): Promise<SchoolEntity[]> {
    return new Array(5).fill('').map(getSchool);
  }
}