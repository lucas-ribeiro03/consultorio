import { Button } from "../Button";
import { Input } from "../Input";

export const NewPatientForm = () => {
  return (
    <form className="flex flex-col gap-3 justify-center items-center w-2xl px-12 py-4 rounded-lg ">
      <Input
        labelText="Nome"
        placeholder="Seu nome"
        type="text"
        className="w-[100%]"
      />
      <Input
        labelText="Idade"
        placeholder="Sua idade"
        type="text"
        className="w-[100%]"
      />
      <Input
        labelText="dataNasc"
        placeholder="Data de nascimento"
        type="text"
        className="w-[100%]"
      />
      <Input
        labelText="Telefone principal"
        placeholder="ex: 21999999999"
        type="text"
        className="w-[100%]"
      />
      <Input
        labelText="Telefone secundario"
        placeholder="ex: 21999999999"
        type="text"
        className="w-[100%]"
      />
      <Input
        labelText="Convênio"
        placeholder="Seu convênio"
        type="text"
        className="w-[100%]"
      />
      <Input
        labelText="Cpf"
        placeholder="Apenas números"
        type="text"
        className="w-[100%]"
      />

      <Button className="w-[100%]" theme="confirm" type="button">
        Enviar
      </Button>
    </form>
  );
};
