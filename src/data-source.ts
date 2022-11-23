import "reflect-metadata"
import { DataSource } from "typeorm"
import { ClassroomEntity } from "./data/entities/classroom.entity"
import { PersonEntity } from "./data/entities/person.entity"
import { SchoolEntity } from "./data/entities/school.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "gtsi",
    password: "zMoEnEsYc7oLprK6m2XHXbEhw4cJD",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [SchoolEntity, ClassroomEntity, PersonEntity],
    migrations: [],
    subscribers: [],
})
