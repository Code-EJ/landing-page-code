import React from "react";

const DadosPessoais: React.FC = () => {
  return (
    <div className="flex flex-row justify-evenly">
      <div className="h-full gap-5 flex flex-col">
        <input
          type="text"
          placeholder="Nome Completo"
          className="shadow-md/40 bg-lightpurple px-4 py-2 rounded-md"
          name="nome"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="shadow-md/40 bg-lightpurple px-4 py-2 rounded-md"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          required
          name="email"
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="shadow-md/40 bg-lightpurple px-4 py-2 rounded-md"
          pattern="[0-9]{10,11}"
          title="Digite um número de telefone válido com 10 ou 11 dígitos"
          required
          name="telefone"
        />
        <select
          className="shadow-md/40 bg-lightpurple px-4 py-2 rounded-md"
          defaultValue=""
          required
          name="tipoEvento"
        >
          <option value="" disabled>
            Tipo de evento
          </option>
          <option value="palestra">Palestra</option>
          <option value="reuniao">Reunião</option>
          <option value="curso">Curso</option>
          <option value="workshop">Workshop</option>
          <option value="outro">Outro</option>
        </select>
      </div>
    </div>
  );
};

export default DadosPessoais;
