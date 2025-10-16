import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const PatientTable = sqliteTable("pacientes", {
  id: text("id").primaryKey(),
  nome: text("nome").notNull(),
  matricula: integer("matricula").notNull().unique(),
  idade: integer("idade").notNull(),
  dataNasc: text("dataNasc").notNull(),
  tel1: text("tel1").notNull(),
  tel2: text("tel1"),
  convenio: text("convenio"),
  cpf: text("cpf").notNull().unique(),
});
