import ServiceItem from "../SubItens/ServiceItem";
import ServiceTitle from "../SubItens/ServiceTitle";
import Imagem from "../../Imagem";
import Img2 from "../AssetsNossosServicos/img2.png";
import Icon from "../../icon";

const ServicePlanejamento = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center md:text-left">
      <ServiceTitle title="Planejamos Seu Projeto com Você" children={undefined} />

      <div className="flex flex-col items-center">
        <Imagem
          className="rounded w-full max-w-md md:max-w-lg lg:max-w-xl"
          src={Img2}
          alt="Imagem ilustrativa do serviço de dados"
        />
      </div>

      <div className="flex flex-col gap-10 mt-10">
        {/* Primeira linha de itens */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
          <div className="flex flex-col items-center max-w-md text-center md:text-left">
            <Icon className="mb-2" />
            <ServiceItem title="Criamos Modelos Antes de Começar">
              Antes de desenvolver qualquer sistema ou aplicativo, criamos uma
              versão simplificada para garantir que tudo funcione bem.
            </ServiceItem>
          </div>

          <div className="flex flex-col items-center max-w-md text-center md:text-left">
            <Icon className="mb-2" />
            <ServiceItem title="Ajudamos a Organizar Suas Ideias">
              Se você tem uma ideia, mas não sabe por onde começar, ajudamos a
              colocar tudo no papel para transformar o projeto em realidade.
            </ServiceItem>
          </div>
        </div>

        {/* Segunda linha de itens */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
          <div className="flex flex-col items-center max-w-md text-center md:text-left">
            <Icon className="mb-2" />
            <ServiceItem title="Fazemos um Mapa do Funcionamento do Seu Negócio">
              Criamos desenhos e esquemas para mostrar como seu sistema
              funciona e encontrar formas de melhorá-lo.
            </ServiceItem>
          </div>

          <div className="flex flex-col items-center max-w-md text-center md:text-left">
            <Icon className="mb-2" />
            <ServiceItem title="Fornecemos Profissionais para Sua Empresa">
              Se você precisa de especialistas para um projeto ou para um
              período específico, oferecemos profissionais qualificados para
              ajudar seu negócio.
            </ServiceItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePlanejamento;
