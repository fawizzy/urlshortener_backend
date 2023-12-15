import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  generatedUrl: string;
}
