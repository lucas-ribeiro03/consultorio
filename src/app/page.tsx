import { Card } from "@/components/Card/Card";
import { Menu } from "@/components/Menu/Menu";
import { NewPatientButton } from "@/components/NewPatientButton";
import { CalendarIcon, UserIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="grid items-center justify-center min-h-screen p-8 pb-20 sm:p-20">
      <Menu />
      <div className="grid grid-cols-2 grid-rows-2 gap-12">
        <div className="flex flex-col justify-around">
          <Card className="flex justify-around items-center gap-4 max-h-[100px] ">
            <div className="bg-blue-500 rounded-full p-3">
              <UserIcon className="text-amber-50 font-black" />
            </div>
            <div>
              <span className="text-xl">8</span>
              <p>Pacientes cadastrados</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4 max-h-[100px]">
            <div className="bg-green-500 p-4 rounded-full">
              <CalendarIcon className="text-amber-50 font-black" />
            </div>
            <div>
              <span className="text-xl">8</span>
              <p>Pacientes cadastrados</p>
            </div>
          </Card>
        </div>

        <Card className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl">Pacientes recentes</h1>
          <div>
            <div className="border-b-2 border-gray-400 ">
              <p className="text-[18px] p-2">Nome do paciente</p>
            </div>
            <div className="border-b-2 border-gray-400 ">
              <p className="text-[18px] p-2">Nome do paciente</p>
            </div>
            <div className="border-b-2 border-gray-400 ">
              <p className="text-[18px] p-2">Nome do paciente</p>
            </div>
            <div className="border-b-2 border-gray-400 ">
              <p className="text-[18px] p-2">Nome do paciente</p>
            </div>
            <div className="border-b-2 border-gray-400 ">
              <p className="text-[18px] p-2">Nome do paciente</p>
            </div>
            <div className="border-b-2 border-gray-400 ">
              <p className="text-[18px] p-2">Nome do paciente</p>
            </div>
            <div className="border-b-2 border-gray-400 ">
              <p className="text-[18px] p-2">Nome do paciente</p>
            </div>
          </div>
        </Card>
      </div>
      <NewPatientButton />
    </div>
  );
}
