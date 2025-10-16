import { PatientModel } from "@/models/pacientes-model";

export interface PatientRepository {
  findAll(): Promise<PatientModel[]>;
  findByName(name: string): Promise<PatientModel | PatientModel[]>;
  findByMatricula(matricula: number): Promise<PatientModel>;
  findByCpf(cpf: string): Promise<PatientModel>;

  //Mutation
  createPatient(patient: PatientModel): Promise<PatientModel>;
  deletePatient(matricula: number): Promise<PatientModel>;
}
