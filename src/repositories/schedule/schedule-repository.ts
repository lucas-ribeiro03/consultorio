import { PatientModel } from "@/models/pacientes-model";
import { ScheduleModel } from "@/models/schedule-model";

export interface ScheduleRepository {
  findAll(): Promise<ScheduleModel[]>;
  findByPatient(
    name?: string,
    matricula?: string
  ): Promise<ScheduleModel | PatientModel>;
  findByDate(date: string): Promise<ScheduleModel>;

  createSchedule(): Promise<ScheduleModel>;
  deleteSchedule(id: string): Promise<ScheduleModel>;
}
