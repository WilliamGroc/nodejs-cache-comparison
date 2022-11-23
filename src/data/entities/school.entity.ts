import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClassroomEntity } from "./classroom.entity";

@Entity()
export class SchoolEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  address: string;

  @Column()
  zipcode: string;

  @Column()
  country: string;

  @OneToMany(() => ClassroomEntity, (entity) => entity.school, { cascade: true })
  classrooms: ClassroomEntity[];
}