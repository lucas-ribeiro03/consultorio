import { PatientModel } from "@/models/pacientes-model";
import { PatientRepository } from "./patient-repository";
import { drizzleDb } from "@/mysql";
import { PatientTable } from "@/mysql/schemas/patient";
import { eq } from "drizzle-orm";

export class DrizzlePatientsRepository implements PatientRepository {
  async createPatient(patient: PatientModel): Promise<PatientModel> {
    const patientExists = await drizzleDb.query.patient.findFirst({
      where: (patients, { eq, or }) =>
        or(
          eq(patients.cpf, patient.cpf),
          eq(patients.tel1, patient.tel1),
          eq(patients.matricula, patient.matricula)
        ),
    });

    if (patientExists) {
      throw new Error("Usuário já existe");
    }

    await drizzleDb.insert(PatientTable).values(patient);

    return patient;
  }

  async findAll(): Promise<PatientModel[]> {
    const patients = await drizzleDb.query.patient.findMany();
    return patients;
  }

  async findByCpf(cpf: string): Promise<PatientModel> {
    if (!cpf) {
      throw new Error("Dados inválidos");
    }

    const patient = await drizzleDb.query.patient.findFirst({
      where: (patients, { eq }) => eq(patients.cpf, cpf),
    });

    if (!patient) {
      throw new Error("Paciente não encontrado");
    }
    return patient;
  }

  async findByMatricula(matricula: number): Promise<PatientModel> {
    if (!matricula) {
      throw new Error("Dados inválidos");
    }

    const patient = await drizzleDb.query.patient.findFirst({
      where: (patients, { eq }) => eq(patients.matricula, matricula),
    });

    if (!patient) {
      throw new Error("Paciente não encontrado");
    }

    return patient;
  }

  async findByName(name: string): Promise<PatientModel | PatientModel[]> {
    if (!name) {
      throw new Error("Dados inválidos");
    }

    const patients = await drizzleDb.query.patient.findMany({
      where: (patient, { eq }) => eq(patient.nome, name),
    });

    if (!patients) {
      throw new Error("Nenhum paciente com esse nome");
    }

    return patients;
  }

  async deletePatient(matricula: number): Promise<PatientModel> {
    if (!matricula) {
      throw new Error("Dados inválidos");
    }

    const patient = await drizzleDb.query.patient.findFirst({
      where: (patients, { eq }) => eq(patients.matricula, matricula),
    });

    if (!patient) {
      throw new Error("Paciente não encontrado");
    }
    await drizzleDb
      .delete(PatientTable)
      .where(eq(PatientTable.matricula, matricula));

    return patient;
  }
}
