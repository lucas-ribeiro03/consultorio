import { PatientModel } from "./pacientes-model";

export type AppointmentModel = {
  tipo: string;
  data: Date;
  status: string;
  formaPgto: string;
  valor: number;
  pacienteId: number | null;
  paciente?: PatientModel;
};
