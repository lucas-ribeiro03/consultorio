import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const AgendaTable = sqliteTable("agenda", {
  id: text("id").primaryKey(),
  dia: integer("dia").notNull(),
  mes: integer("mes").notNull(),
  ano: integer("mes").notNull(),
  hora: text("hora").notNull(),
  status: text("status").notNull(),
});
