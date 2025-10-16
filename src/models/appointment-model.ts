import { PatientModel } from "./pacientes-model";

export type AppointmentModel = {
  id: string;
  tipo: string;
  data: Date;
  status: string;
  formaPgto: string;
  valor: number;
  pacienteId: number;
  dataId: number;
  paciente?: PatientModel;
};
