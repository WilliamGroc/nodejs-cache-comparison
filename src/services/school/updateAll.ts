import { differenceInMilliseconds } from "date-fns";
import { readFileSync } from "fs";
import { AppDataSource } from "../../data-source";
import { SchoolEntity } from "../../data/entities/school.entity";
import { deleteAllSchool } from "./deleteAll";


export async function updateAllSchool() {
  try {
    let date = new Date();
    console.log('start', date)
    await deleteAllSchool()
    console.log('deleted', differenceInMilliseconds(new Date(), date))

    date = new Date();
    const fileString = readFileSync('./cache/schools.cache.json', 'utf-8')
    console.log('read', differenceInMilliseconds(new Date(), date))

    date = new Date();
    const data: SchoolEntity[] = JSON.parse(fileString)
    console.log('parse', differenceInMilliseconds(new Date(), date))

    console.log('school lenght', data.length);

    date = new Date();
    while (data.length) {
      await AppDataSource.getRepository(SchoolEntity).save(data.splice(0, 10), { chunk: 1 })
    }

    // await Promise.all(data.map(async (school) => AppDataSource.getRepository(SchoolEntity).save(school)))
    console.log('inserted', differenceInMilliseconds(new Date(), date))
  } catch (e) {
    console.log(e)
  }
}