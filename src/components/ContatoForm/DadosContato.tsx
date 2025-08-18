import React from "react";

const DadosContato: React.FC = () => {
  return (
    <div className="flex flex-row justify-evenly w-full">
      <div className="h-full gap-5 flex flex-col w-full">
        <input
          type="text"
          placeholder="Nome Completo"
          className="shadow-md/40 bg-lightpurple px-3 py-3 rounded-md text-sm placeholder:text-sm text-gray-800 placeholder-gray-500"
          name="nome"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="shadow-md/40 bg-lightpurple px-3 py-3 rounded-md text-sm placeholder:text-sm text-gray-800 placeholder-gray-500"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          required
          name="email"
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="shadow-md/40 bg-lightpurple px-3 py-3 rounded-md text-sm placeholder:text-sm text-gray-800 placeholder-gray-500"
          pattern="[0-9]{10,11}"
          title="Digite um número de telefone válido com 10 ou 11 dígitos"
          required
          name="telefone"
        />
        <input
          type="texto"
          placeholder="Empresa"
          className="shadow-md/40 bg-lightpurple px-3 py-3 rounded-md text-sm placeholder:text-sm text-gray-800 placeholder-gray-500"
          title="Digite o nome da empresa, se aplicável."
          required
          name="empresa"
        />
        <div className="relative">
          <select
            className="shadow-md/40 bg-lightpurple px-3 py-3 pr-10 rounded-md text-sm text-gray-800 appearance-none w-full"
            defaultValue=""
            required
            name="tipoDemanda"
          >
            <option value="" disabled>
              Tipo de Demanda
            </option>
            <option value="suporte">Aplicativos móveis</option>
            <option value="atualizacaoSistema">
              Atualização e modernização de sistemas ou sites
            </option>
            <option value="consultoria">Análise de dados</option>
            <option value="novoSistema">Informatizalçao da empresa</option>
            <option value="pesquisaComputacional">
              Pesquisa computacional
            </option>
            <option value="parcerias">Parcerias</option>
            <option value="sitePessoal">Site pessoal</option>
            <option value="siteEmpresa">Site para divulgação da empresa</option>
            <option value="outro">Outro</option>
          </select>
          <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none text-gray-600">
            ▼
          </div>
        </div>
        <input
          type="text"
          placeholder="Detalhes adicionais"
          className="shadow-md/40 bg-lightpurple h-24 px-3 py-3 rounded-md placeholder:text-start placeholder:align-top placeholder:text-sm placeholder-gray-500 text-gray-800 w-full"
        />
      </div>
    </div>
  );
};

export default DadosContato;