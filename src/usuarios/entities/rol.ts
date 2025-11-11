// src/entities/Rol.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Usuario } from "./usuario";

@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  nombre!: string;

  @Column({ nullable: true })
  descripcion!: string;

  @ManyToMany(() => Usuario, (usuario) => usuario.roles)
  usuarios!: Usuario[];
}
