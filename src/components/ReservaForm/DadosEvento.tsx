import React from "react";

const DadosEvento: React.FC = () => {
  return (
    <div className="h-full gap-5 flex flex-col">
      <h2 className="font-bold">Data desejada</h2>
      <input
        type="date"
        placeholder="Data desejada"
        className="shadow-md/40 bg-lightpurple px-4 py-2 rounded-md placeholder:text-left"
        required
      />

      <div>
        <h2 className="font-bold">Horario de início e fim</h2>
        <div className="flex flex-row">
          <h3 className="p-3">{" De "}</h3>
          <input
            className="shadow-md/40 bg-lightpurple placeholder:text-left p-3"
            type="time"
            placeholder="Início"
            required
          />
          <h3 className="p-3">{" até as "}</h3>
          <input
            className="shadow-md/40 bg-lightpurple placeholder:text-left p-3"
            type="time"
            placeholder="Fim"
            required
          />
        </div>
      </div>
      <input
        type="text"
        placeholder="Observações"
        className="shadow-md/40 bg-lightpurple h-20 rounded-md placeholder:text-start px-2"
      />
    </div>
  );
};

export default DadosEvento;
