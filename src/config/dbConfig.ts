import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const requiredEnv = ["DB_HOST", "DB_PORT", "DB_USER", "DB_PASS", "DB_NAME"];
for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`❌ La variable de entorno ${key} es requerida y no está definida`);
  }
}

const DB_HOST: string = process.env.DB_HOST!;
const DB_PORT: number = Number(process.env.DB_PORT!);
const DB_USER: string = process.env.DB_USER!;
const DB_PASS: string = process.env.DB_PASS!;
const DB_NAME: string = process.env.DB_NAME!;
const DB_SYNC: boolean = process.env.DB_SYNC === "true";
const DB_LOGGING: boolean = process.env.DB_LOGGING === "true";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  synchronize: DB_SYNC,
  logging: DB_LOGGING,
  entities: [path.join(__dirname, "/entities/**/*.{ts,js}")],
});
