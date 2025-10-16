import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { PatientTable } from "./pacientes";
import { AgendaTable } from "./agenda";

export const ScheduleTable = sqliteTable("marcacoes", {
  id: integer("id").primaryKey(),
  tipo: text("tipo").notNull(),
  data: text("data").notNull(),
  status: text("status").notNull(),
  formaPgto: text("formaPgto").notNull(),
  valor: integer("valor").notNull(),
  userId: integer("user_id").references(() => PatientTable.id),
  dataId: integer("data_id").references(() => AgendaTable.id),
});
