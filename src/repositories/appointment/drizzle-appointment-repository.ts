import { AppointmentModel } from "@/models/appointment-model";
import { AppointmentRepository } from "./appointment-repository";
import { drizzleDb } from "@/mysql";
import { PatientTable } from "@/mysql/schemas/patient";
import { AppointmentTable } from "@/mysql/schemas/appointment";
import { eq } from "drizzle-orm";

export class DrizzleAppointmentRepository implements AppointmentRepository {
  async findAll(): Promise<AppointmentModel[]> {
    const appointment = await drizzleDb.query.appointment.findMany({
      orderBy: (appointment, { asc }) => asc(appointment.data),
    });

    const convertDate: AppointmentModel[] = appointment.map((date) => ({
      ...date,
      data: new Date(date.data),
    }));

    return convertDate;
  }

  async findByPatientName(name: string): Promise<AppointmentModel> {
    if (!name) {
      throw new Error("Dados inválidos");
    }
    const appointmentFromPatient = await drizzleDb
      .select()
      .from(AppointmentTable)
      .innerJoin(PatientTable, eq(AppointmentTable.pacienteId, PatientTable.id))
      .where(eq(PatientTable.nome, name));

    if (appointmentFromPatient.length < 1) {
      throw new Error("Consulta não encontrada");
    }
    const scheduleOutOfArray = appointmentFromPatient[0].marcacoes;

    const scheduleOutOfArrayWithCompatibleDate = {
      ...scheduleOutOfArray,
      data: new Date(scheduleOutOfArray.data),
    };

    return scheduleOutOfArrayWithCompatibleDate;
  }

  async findByPatientMatricula(matricula: number): Promise<AppointmentModel> {
    if (!matricula) {
      throw new Error("Dados inválidos");
    }

    const appointment = await drizzleDb
      .select()
      .from(AppointmentTable)
      .innerJoin(PatientTable, eq(AppointmentTable.pacienteId, PatientTable.id))
      .where(eq(PatientTable.matricula, matricula));

    const patientAppointment = appointment[0].marcacoes;

    const patientAppointmentWithDateConverted = {
      ...patientAppointment,
      data: new Date(patientAppointment.data),
    };

    return patientAppointmentWithDateConverted;
  }

  async createSchedule(
    appointment: AppointmentModel
  ): Promise<AppointmentModel> {
    const appointmentAlreadyExists =
      await drizzleDb.query.appointment.findFirst({
        where: (appointments, { eq, or }) =>
          or(
            eq(appointments.dataId, appointment.dataId),
            eq(appointments.id, appointment.id)
          ),
      });

    if (appointmentAlreadyExists) {
      throw new Error("Consulta já marcada para este horário");
    }

    const convertDateToString = {
      ...appointment,
      data: appointment.data.toISOString(),
    };

    await drizzleDb.insert(AppointmentTable).values(convertDateToString);

    return appointment;
  }

  async deleteSchedule(id: string): Promise<AppointmentModel> {
    if (!id) {
      throw new Error("Dados inválidos ou não existe");
    }

    const appointment = await drizzleDb.query.appointment.findFirst({
      where: (appointments, { eq }) => eq(appointments.id, id),
    });

    if (!appointment) {
      throw new Error("Consulta não existe");
    }

    await drizzleDb.delete(AppointmentTable).where(eq(AppointmentTable.id, id));
    return { ...appointment, data: new Date(appointment.data) };
  }
}
