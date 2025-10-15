import { PlusIcon } from "lucide-react";

export const NewPatientButton = () => {
  return (
    <button
      aria-label="Adicionar paciente"
      title="Adicionar paciente"
      className="absolute right-10 bottom-10 bg-blue-500 text-amber-50 p-5 rounded-full cursor-pointer hover:bg-blue-700 transition duration-150"
    >
      <PlusIcon />
    </button>
  );
};
