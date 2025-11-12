import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Persona } from '../modules/usuarios/entities/persona';
import { Usuario } from '../modules/usuarios/entities/usuario';
import { Rol } from '../modules/usuarios/entities/rol';
import { UsuarioRol } from '../modules/usuarios/entities/usuarioRol';

dotenv.config();

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as any || 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'pasanaku_db',
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  logging: process.env.DB_LOGGING === 'true',
  charset: 'utf8mb4',
  
  entities: [Persona, Usuario, Rol, UsuarioRol],
  migrations: [],
  subscribers: [],
});
