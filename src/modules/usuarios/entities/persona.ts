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

  @Column({ type: "date", nullable: true, unique: true })
  fecha_nacimiento!: Date;

  @CreateDateColumn()
  usuario_creacion!: string;

  @CreateDateColumn()
  fecha_creacion!: Date;

  @UpdateDateColumn()
  usuario_modificacion!: string;

  @CreateDateColumn()
  fecha_modificacion!: Date;

  @Column({ type: "varchar", length: 20, nullable: true })
  estado!: string;

  @OneToOne(() => Usuario, (usuario) => usuario.persona)
  usuario!: Usuario;
}
