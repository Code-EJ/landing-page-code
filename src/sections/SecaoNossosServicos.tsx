import ServicePresencaOnline from "../components/SecaoNossosServicos/Servicos/PresencaOnline";
import ServiceDados from "../components/SecaoNossosServicos/Servicos/Dados";
import ServicePlanejamento from "../components/SecaoNossosServicos/Servicos/Planejamento";
import Divider from "../components/Divider";

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
