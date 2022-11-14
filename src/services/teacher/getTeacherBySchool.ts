import { PersonEntity } from "../../data/entities/person.entity";
import { SchoolEntity } from "../../data/entities/school.entity";
import { SchoolRepository } from "../../data/repositories/school.repository";
import { InMemoryCacheInstance } from "../../data/cache/inmemory";

async function cacheStrategie(fetchFunction: () => Promise<any>, cacheName: string): Promise<any> {
  const nodeCacheInstance = InMemoryCacheInstance.getInstance();

  if (await nodeCacheInstance.hasCache(cacheName)) {
    console.log('has cache')
    const data = await nodeCacheInstance.getCache(cacheName) as SchoolEntity[];


    if (await nodeCacheInstance.isExpired(cacheName)) {
      console.log('cache expired')
      setTimeout(async () => {
        const newData = await fetchFunction()
        nodeCacheInstance.setCache(cacheName, newData);
      })
    }

    return data;
  }
  else {
    console.log('cache generation')
    const data = await fetchFunction();
    nodeCacheInstance.setCache(cacheName, data);
    return data;
  }
}

export async function getTeacherBySchool(): Promise<PersonEntity[]> {
  const schoolRepository = new SchoolRepository();

  const schools = await cacheStrategie(() => {
    return schoolRepository.getAll();
  }, 'schools');

  console.log('with data')

  return schools.flatMap((school: SchoolEntity) => school.classrooms.flatMap(classroom => classroom.teachers));
}
