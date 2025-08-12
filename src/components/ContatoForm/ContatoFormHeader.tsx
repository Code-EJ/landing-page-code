import React from "react";
import BackButton from "../Buttons/BackButton";

const contatoFormHeader: React.FC = () => (
  <div className="top-2 left-3 p-3">
    {/* Backbutton */}
    <BackButton />

    {/* Texto */}
    <div className="flex flex-row justify-center">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-center">
          Formulário de Contato
        </h2>
        <h3 className="mb-3 text-center font-thin text-sm">
          Preencha o formulário abaixo para entrar em contato conosco, tirar os
          mais variados tipos de dúvidas e solicitar informações sobre nossos
          serviços.
        </h3>
      </div>
    </div>
  </div>
);

export default contatoFormHeader;
