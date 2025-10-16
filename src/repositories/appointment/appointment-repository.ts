import { AppointmentModel } from "@/models/appointment-model";

export interface AppointmentRepository {
  findAll(): Promise<AppointmentModel[]>;
  findByPatientName(name: string): Promise<AppointmentModel>;
  findByPatientMatricula(matricula: number): Promise<AppointmentModel>;
  // findByDate(date: string): Promise<AppointmentModel>;

  createSchedule(appointment: AppointmentModel): Promise<AppointmentModel>;
  deleteSchedule(id: string): Promise<AppointmentModel>;
}
