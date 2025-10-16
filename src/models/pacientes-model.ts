export type PatientModel = {
  id: string;
  nome: string;
  matricula: number;
  idade: number;
  dataNasc: string;
  tel1: string;
  tel2: string | null;
  convenio: string | null;
  cpf: string;
};
