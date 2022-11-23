import { SchoolEntity } from "../entities/school.entity";
import { getSchool } from "../mock/school.mock";

export class SchoolGenerator {
  static async generate(count = 5): Promise<SchoolEntity[]> {
    return new Array(count).fill('').map(getSchool);
  }
}