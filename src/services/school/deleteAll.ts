import { AppDataSource } from "../../data-source";

export async function deleteAllSchool(): Promise<void> {
  AppDataSource.manager.query('truncate table person_entity, classroom_entity , school_entity')
}