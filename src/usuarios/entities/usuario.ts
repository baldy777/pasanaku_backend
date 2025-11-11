import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Persona } from "./persona";
import { Rol } from "./rol";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  username!: string;

  @Column()
  password!: string;

  @Column({ default: true })
  activo!: boolean;

  @OneToOne(() => Persona, (persona) => persona.usuario, { cascade: true })
  @JoinColumn()
  persona!: Persona;

  @ManyToMany(() => Rol, (rol) => rol.usuarios, { cascade: true })
  @JoinTable({
    name: "usuario_rol",
    joinColumn: { name: "usuario_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "rol_id", referencedColumnName: "id" },
  })
  roles!: Rol[];
}
