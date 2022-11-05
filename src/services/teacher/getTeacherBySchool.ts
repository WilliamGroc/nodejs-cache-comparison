import { PersonEntity } from "../../data/entities/person.entity";
import { SchoolEntity } from "../../data/entities/school.entity";
import { SchoolRepository } from "../../data/repositories/school.repository";
import { differenceInMilliseconds } from 'date-fns'
import { NodeCacheInstance } from "../../data/cache/nodecache";
import { InMemoryCacheInstance } from "../../data/cache/inmemory";
import { RedisCacheInstance } from "../../data/cache/redis";

export async function getTeacherBySchool(): Promise<PersonEntity[]> {
  console.log('========== Start ==========', new Date())
  const nodeCacheInstance = RedisCacheInstance.getInstance();

  let schools = [];

  if (await nodeCacheInstance.hasCache('schools')) {
    const date = new Date();
    schools = JSON.parse(await nodeCacheInstance.getCache('schools')) as SchoolEntity[];
    console.log('use cache', differenceInMilliseconds(new Date(), date))
  }
  else {
    const date = new Date();
    const schoolRepository = new SchoolRepository();
    schools = await schoolRepository.getAll();
    nodeCacheInstance.setCache('schools', JSON.stringify(schools));
    console.log('use repo', differenceInMilliseconds(new Date(), date))
  }

  const date = new Date();
  const result = schools.flatMap(school => school.classrooms.flatMap(classroom => classroom.teachers))
  console.log('work', differenceInMilliseconds(new Date(), date))
  return result;
}
