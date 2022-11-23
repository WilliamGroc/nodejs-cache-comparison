import { PersonEntity } from "../../data/entities/person.entity";
import { SchoolEntity } from "../../data/entities/school.entity";
import { getAllSchools } from "../school/getAll";
import { InMemoryCacheInstance } from "../../data/cache/inmemory";
import { AppDataSource } from "../../data-source";
import { LessThan } from "typeorm";

async function cacheStrategie(fetchFunction: () => Promise<any>, cacheName: string): Promise<any> {
  const nodeCacheInstance = InMemoryCacheInstance.getInstance();

  if (await nodeCacheInstance.hasCache(cacheName)) {
    console.log('has cache')
    const data = await nodeCacheInstance.getCache(cacheName) as SchoolEntity[];
    return data;
  }
  else {
    console.log('cache generation')
    const data = await fetchFunction();
    nodeCacheInstance.setCache(cacheName, data);
    return data;
  }
}

function sort(key) {
  return (a, b) => {
    if (a[key] > b[key])
      return 1;
    else if (a[key] < b[key])
      return -1;

    return 0;
  }
}

export async function getstudentBySchool(): Promise<PersonEntity[]> {
  const schools = await cacheStrategie(() => {
    return getAllSchools();
  }, 'schools');


  return schools.flatMap((school: SchoolEntity) => school.classrooms.flatMap(classroom => classroom.student.filter(student => student.age < 10)))
    .sort(sort('lastname'))
    .sort(sort('firstname'))
    .slice(0, 10);
}

export async function getstudentBySchoolFromDatabase(): Promise<PersonEntity[]> {
  return AppDataSource.getRepository(PersonEntity).find({
    where: {
      age: LessThan(10)
    }, take: 10, order: { firstname: 'ASC', lastname: 'ASC' }
  })
}
