import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Persona } from "./persona";
import { UsuarioRol } from "./usuarioRol";

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 50, unique: true })
  username!: string;

  @Column({ type: "varchar", length: 100, unique: true })
  correo!: string;

  @Column({ type: "varchar", length: 255 })
  clave!: string;

  @CreateDateColumn()
  usuario_creacion!: string;

  @CreateDateColumn()
  fecha_creacion!: Date;

  @UpdateDateColumn()
  usuario_modificacion!: string;

  @UpdateDateColumn()
  fecha_modificacion!: Date;

  @Column({ type: "varchar", length: 20, nullable: true })
  estado!: string;

  @Column({ type: "int", unique: true })
  persona_id!: number;

  @OneToOne(() => Persona, (persona) => persona.usuario)
  @JoinColumn({ name: "persona_id" })
  persona!: Persona;

  @OneToMany(() => UsuarioRol, (usuarioRol) => usuarioRol.usuario)
  usuarioRoles!: UsuarioRol[];
}
