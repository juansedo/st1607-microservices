import { Bicycle } from "@src/database/models/bicycle.entity";
import { DataSource } from "typeorm";
require("dotenv").config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_SERVICE_SERVICE_HOST,
    port: Number(process.env.DB_SERVICE_SERVICE_PORT),
    database: "postgres",
    username: "postgres",
    password: "bicycles",
    synchronize: true,
    logging: true,
    entities: [Bicycle],
    subscribers: [],
    migrations: [],
})