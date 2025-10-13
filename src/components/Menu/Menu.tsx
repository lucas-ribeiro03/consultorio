import { CalendarDaysIcon, HouseIcon, UserIcon } from "lucide-react";
import { MenuLink } from "../MenuLink/MenuLink";

export const Menu = () => {
  return (
    <div className="absolute left-0 top-0 flex flex-col gap-4 text-center py-4 w-65 text-neutral-800 bg-amber-50 h-[100%]">
      <h1 className="font-black text-2xl">Consultório</h1>
      <ul className="flex flex-col">
        <MenuLink content="Inicio" icon={<HouseIcon />} />
        <MenuLink content="Pacientes" icon={<UserIcon />} />
        <MenuLink content="Agenda" icon={<CalendarDaysIcon />} />
      </ul>
    </div>
  );
};
