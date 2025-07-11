import React from "react";
import ServiceItem from "../SubItens/ServiceItem";
import ServiceTitle from "../SubItens/ServiceTitle";
import PhoneImage from "../SubItens/PhoneImage";

const ServicePresencaOnline = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center md:text-left">
      <ServiceTitle title="Criamos a Presença Online da Sua Empresa">
        Huge trendy collection od web screens and components. Fully customized.
      </ServiceTitle>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Esquerda */}
        <div className="flex flex-col justify-center items-start space-y-8">
          <ServiceItem title="Criamos Sites para Você Aparecer na Internet">
            Se sua empresa ainda não tem um site, nós fazemos um para você!
            Criamos páginas bonitas e profissionais para apresentar seus
            produtos e serviços.
          </ServiceItem>

          <ServiceItem title="Melhoramos a Aparência do Seu Sistema">
            Se você já tem um site ou aplicativo, mas acha que ele está
            ultrapassado ou difícil de usar, podemos renovar o visual e torná-lo
            mais atrativo.
          </ServiceItem>

          <ServiceItem title="Criamos Aplicativos para Celular">
            Se você quer um aplicativo para seu negócio, fazemos apps para
            Android e iPhone, ajudando você a se conectar melhor com seus
            clientes.
          </ServiceItem>
        </div>

        {/* Centro - imagem do celular */}
        <PhoneImage />

        {/* Direita */}
        <div className="flex flex-col justify-center items-start space-y-8">
          <ServiceItem title="Deixamos Seu Site com a Sua Cara">
            Fazemos sites personalizados, com o design e as funções que sua
            empresa precisa para se destacar.
          </ServiceItem>

          <ServiceItem title="Fazemos Programas se Conectarem">
            Se você usa diferentes sistemas e quer que eles conversem entre si,
            criamos conexões para facilitar seu trabalho e automatizar tarefas.
          </ServiceItem>

          <ServiceItem title="Melhoramos Programas que Já Existem">
            Se você já tem um sistema funcionando, mas precisa de novas funções
            ou consertar problemas, nossa equipe cuida disso para você.
          </ServiceItem>
        </div>
      </div>
    </section>
  );
};

export default ServicePresencaOnline;
