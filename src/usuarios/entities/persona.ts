import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Usuario } from "./usuario";

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column({ unique: true })
  correo!: string;

  @Column({ nullable: true })
  telefono!: string;

  @Column({ nullable: true })
  direccion!: string;

  @OneToOne(() => Usuario, (usuario) => usuario.persona)
  usuario!: Usuario;
}
