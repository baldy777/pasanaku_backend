import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Usuario } from "./usuario";
import { Rol } from "./rol";

@Entity("usuario_rol")
export class UsuarioRol {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "int" })
  usuario_id!: number;

  @Column({ type: "int" })
  rol_id!: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.usuarioRoles, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "usuario_id" })
  usuario!: Usuario;

  @ManyToOne(() => Rol, (rol) => rol.usuarioRoles, { onDelete: "CASCADE" })
  @JoinColumn({ name: "rol_id" })
  rol!: Rol;
}
