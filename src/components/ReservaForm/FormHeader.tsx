import React from "react";
import BackButton from "../Buttons/BackButton";

const FormHeader: React.FC = () => (
  <div className="top-2 left-3 p-3">
    {/* Backbutton */}
    <BackButton />

    {/* Texto */}
    <div className="flex flex-row justify-center">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-center">
          Formulário de Reserva do Auditório
        </h2>
        <h3 className="mb-3 text-center font-thin text-sm">
          Reserve nosso auditório para seu evento decolar!
        </h3>
      </div>
    </div>
  </div>
);

export default FormHeader;
