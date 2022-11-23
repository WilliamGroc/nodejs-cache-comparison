import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PersonEntity } from "./person.entity";
import { SchoolEntity } from "./school.entity";

@Entity()
export class ClassroomEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  level: string;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  color: string;

  @Column()
  windowCount: number;

  @Column()
  size: number;

  @OneToMany(() => PersonEntity, (entity) => entity.classroom, { cascade: true })
  student: PersonEntity[];

  @ManyToOne(() => SchoolEntity, (entity) => entity.classrooms, { onDelete: 'CASCADE' })
  school: SchoolEntity;
}