import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Usuario } from "./usuario";

@Entity("personas")
export class Persona {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  nombres!: string;

  @Column({ type: "varchar", length: 100 })
  apellido_paterno!: string;

  @Column({ type: "varchar", length: 100 })
  apellido_materno!: string;

  @Column({ type: "varchar", length: 20, unique: true })
  ci!: string;

  @Column({ type: "varchar", length: 15, nullable: true })
  telefono!: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  direccion!: string;

  @Column({ type: "date", nullable: true })
  fecha_nacimiento!: Date;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToOne(() => Usuario, (usuario) => usuario.persona)
  usuario!: Usuario;
}
