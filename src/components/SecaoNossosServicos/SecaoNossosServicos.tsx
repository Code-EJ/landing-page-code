// import React from "react";
// import ServiceItem from "./ServiceItem";
// import ServiceTitle from "./ServiceTitle";
// import PhoneImage from "./PhoneImage";

import ServicePresencaOnline from "./Servicos/PresencaOnline";
import ServiceDados from "./Servicos/Dados";
import ServicePlanejamento from "./Servicos/Planejamento";
import Divider from "../Divider";

const SecaoNossosServicos = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center md:text-left">
      <ServicePresencaOnline />
      <Divider />
      <ServiceDados />
      <Divider />
      <ServicePlanejamento />
      <Divider />
    </section>
  );
};

export default SecaoNossosServicos;
