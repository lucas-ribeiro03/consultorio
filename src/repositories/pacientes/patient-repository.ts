import { PatientModel } from "@/models/pacientes-model";

export interface PatientRepository {
  findAll(): Promise<PatientModel>;
  findByName(): Promise<PatientModel>;
  findByMatricula(): Promise<PatientModel>;
  findByCpf(): Promise<PatientModel>;

  //Mutation
  createPatient(patient: PatientModel): Promise<PatientModel>;
  deletePatient(matricula: string): Promise<PatientModel>;
}
