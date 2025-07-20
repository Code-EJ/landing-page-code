import React from "react";

const DadosEvento: React.FC = () => {
  return (
    <div className="h-full gap-5 flex flex-col w-full">
      <div>
        <h2 className="font-bold mb-1">Data desejada</h2>
        <input
          type="date"
          placeholder="Data desejada"
          className="shadow-md/40 bg-lightpurple px-3 py-3 rounded-md placeholder:text-left placeholder:text-sm placeholder-gray-500 text-gray-800 w-full"
          required
        />
      </div>

      <div>
        <h2 className="font-bold mb-1">Horário de início e fim</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm">De</span>
            <input
              className="shadow-md/40 bg-lightpurple px-3 py-3 rounded-md placeholder:text-left placeholder:text-sm placeholder-gray-500 text-gray-800 w-full"
              type="time"
              placeholder="Início"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">até as</span>
            <input
              className="shadow-md/40 bg-lightpurple px-3 py-3 rounded-md placeholder:text-left placeholder:text-sm placeholder-gray-500 text-gray-800 w-full"
              type="time"
              placeholder="Fim"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Observações"
          className="shadow-md/40 bg-lightpurple h-24 px-3 py-3 rounded-md placeholder:text-start placeholder:align-top placeholder:text-sm placeholder-gray-500 text-gray-800 w-full"
        />
      </div>
    </div>
  );
};

export default DadosEvento;
