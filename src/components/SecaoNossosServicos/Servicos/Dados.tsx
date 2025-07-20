import React from "react";
import ServiceItem from "../SubItens/ServiceItem";
import ServiceTitle from "../SubItens/ServiceTitle";
import PhoneImage from "../SubItens/PhoneImage";
import Imagem from "../../Imagem";
import Img1 from "../AssetsNossosServicos/img1.png";

const ServiceDados = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center md:text-left">
      <ServiceTitle title="Organizando e Analisando Seus Dados">
        {/* Se houver children */}
      </ServiceTitle>

      <div className="flex flex-col items-center">
        <Imagem
          className="rounded"
          src={Img1}
          alt="Imagem ilustrativa do serviço de dados"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-10 mt-6 text-center md:text-left">
        <ServiceItem title="Criamos Relatórios Automáticos e Fáceis de Entender">
          Montamos relatórios e painéis visuais para que você acompanhe
          facilmente o desempenho da sua empresa e tome decisões com mais
          rapidez.
        </ServiceItem>

        <ServiceItem title="Transformamos Seus Dados em Informações Úteis">
          Coletamos e analisamos os números do seu negócio para ajudar você a
          tomar decisões mais inteligentes e melhorar seus resultados.
        </ServiceItem>

        <ServiceItem title="Guardamos Seus Dados com Segurança">
          Armazenamos e organizamos suas informações de forma segura,
          garantindo que elas estejam sempre disponíveis e protegidas.
        </ServiceItem>
      </div>
    </section>
  );
};

export default ServiceDados;
