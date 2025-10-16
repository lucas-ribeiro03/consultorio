import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const AgendaTable = sqliteTable("agenda", {
  id: integer("id").primaryKey(),
  dia: integer("dia").notNull(),
  mes: integer("mes").notNull(),
  hora: text("hora").notNull(),
  status: text("status").notNull(),
});
