import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { PatientTable } from "./patient";
import { AgendaTable } from "./schedule";

export const AppointmentTable = sqliteTable("marcacoes", {
  id: integer("id").primaryKey(),
  tipo: text("tipo").notNull(),
  data: text("data").notNull(),
  status: text("status").notNull(),
  formaPgto: text("formaPgto").notNull(),
  valor: integer("valor").notNull(),
  pacienteId: integer("paciente_id").references(() => PatientTable.id),
  dataId: integer("data_id").references(() => AgendaTable.id),
});
