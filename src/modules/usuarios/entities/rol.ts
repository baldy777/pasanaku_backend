import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { UsuarioRol } from "./usuarioRol";

@Entity("roles")
export class Rol {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 50, unique: true })
  nombre!: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  descripcion!: string;

  @Column({ type: "boolean", default: true })
  activo!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToMany(() => UsuarioRol, (usuarioRol) => usuarioRol.rol)
  usuarioRoles!: UsuarioRol[];
}
