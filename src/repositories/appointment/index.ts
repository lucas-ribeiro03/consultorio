import { AppointmentRepository } from "./appointment-repository";
import { DrizzleAppointmentRepository } from "./drizzle-appointment-repository";

export const appointmentRepository: AppointmentRepository =
  new DrizzleAppointmentRepository();
