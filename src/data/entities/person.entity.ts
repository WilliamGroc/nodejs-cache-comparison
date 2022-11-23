import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClassroomEntity } from "./classroom.entity";

@Entity()
export class PersonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @Column()
  zipcode: string;

  @Column()
  country: string;

  @Column()
  motherName: string;

  @Column()
  fatherName: string;

  @Column()
  brotherSisterCount: number;

  @Column()
  car: string;
  
  @Column()
  fatherCard: string;

  @Column()
  motherCard: string;

  @ManyToOne(() => ClassroomEntity, (classroom) => classroom.student, { onDelete: 'CASCADE' })
  classroom: ClassroomEntity;
}