import { resolve } from "path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { PatientTable } from "./schemas/pacientes";
import { ScheduleTable } from "./schemas/schedule";
import { AgendaTable } from "./schemas/agenda";

const sqliteDatabasePath = resolve(process.cwd(), "db.sqlite3");
const sqliteDatabase = new Database(sqliteDatabasePath);

export const drizzleDb = drizzle(sqliteDatabase, {
  schema: {
    patient: PatientTable,
    schedule: ScheduleTable,
    agenda: AgendaTable,
  },
  logger: false,
});
