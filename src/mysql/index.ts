import { resolve } from "path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { PatientTable } from "./schemas/patient";
import { AppointmentTable } from "./schemas/appointment";
import { AgendaTable } from "./schemas/schedule";

const sqliteDatabasePath = resolve(process.cwd(), "db.sqlite3");
const sqliteDatabase = new Database(sqliteDatabasePath);

export const drizzleDb = drizzle(sqliteDatabase, {
  schema: {
    patient: PatientTable,
    appointment: AppointmentTable,
    schedule: AgendaTable,
  },
  logger: false,
});
