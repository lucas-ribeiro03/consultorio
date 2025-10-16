import { AppointmentRepository } from "./appointment-repository";
import { DrizzleAppointmentRepository } from "./drizzle-schedule-post-repository";

export const appointmentRepository: AppointmentRepository =
  new DrizzleAppointmentRepository();
