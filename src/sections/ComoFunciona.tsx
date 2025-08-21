import { Link } from 'react-router-dom';


import IconeIdeia from '../assets/ComoFunciona/ideia.jpeg';
import IconeObjetivo from '../assets/ComoFunciona/objetivo.jpeg';
import IconePresente from '../assets/ComoFunciona/presente.jpeg';
import IconeProgramacao from '../assets/ComoFunciona/programação.jpeg';


type CardProperties = {
    step: number;
    title: string;
    description: string;
    icon: string;
};


const passoAPassoData: CardProperties[] = [
    {
        step: 1,
        title: "Compartilhe sua ideia ou necessidade",
        description: "Entre em contato com a CODE[] e conte para nós o que você precisa: seja um site, automação, sistema personalizado ou análise de dados. Nosso time multidisciplinar vai escutar atentamente, entender o contexto do seu projeto e levantar os primeiros requisitos. A partir daqui, começamos a traçar o caminho da solução ideal para você.",
        icon: IconeIdeia 
    },
    {
        step: 2,
        title: "Co-criamos a solução com você",
        description: "Após entender sua demanda, marcamos uma reunião de alinhamento. Juntos, definimos escopo, prazos e funcionalidades. Você participa da construção desde o início, com transparência e colaboração. Acreditamos que o sucesso nasce da escuta e da proximidade. Nada de soluções engessadas — tudo é construído com você, sob medida.",
        icon: IconeObjetivo 
    },
    {
        step: 3,
        title: "Desenvolvemos com excelência e propósito",
        description: "Nossa equipe entra em ação! O projeto é dividido em etapas, e você acompanha cada fase com relatórios, reuniões e versões entregues periodicamente. Aplicamos boas práticas de desenvolvimento, metodologias ágeis e foco em aprendizado constante. Cada linha de código carrega nosso compromisso com qualidade, inovação e impacto.",
        icon: IconeProgramacao
    },
    {
        step: 4,
        title: "Entregamos e continuamos com você",
        description: "Ao final do processo, entregamos a solução validada, com documentação, treinamento (se necessário) e suporte inicial. Mas nosso trabalho não termina aí. Estamos por perto para atualizações, melhorias ou novos desafios. Entregar é mais do que um fim: é o começo de uma parceria.",
        icon: IconePresente
    }
];


function PassoCard({ step, title, description, icon, isLast }: CardProperties & { isLast: boolean }) {
    return (
        <div className="flex items-start gap-6 relative">
            {}
            <div className="flex flex-col items-center flex-shrink-0">
                {}
                <div className="w-24 h-20 rounded-2xl shadow-lg z-10 overflow-hidden">
                    <img 
                        src={icon} 
                        alt={`Ícone para ${title}`} 
                        className="w-full h-full object-cover" 
                    />
                </div>
                {}
                {!isLast && (
                    <div className="w-0.5 h-full bg-gray-200 absolute top-10" style={{ height: 'calc(100% - 2.5rem)' }}></div>
                )}
            </div>

            {}
            <div className="flex-1 pt-2">
                <div className="flex items-center gap-4 mb-2">
                    <span className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-600 font-bold rounded-full">
                        {step}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                </div>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}


export default function ComoFunciona() {
    return (
        
        <section className="w-full bg-[#F5F5F5] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Passo a passo
                </h2>
                <div className="flex flex-col gap-12">
                    {}
                    {passoAPassoData.map((passo, index) => (
                        <PassoCard
                            key={passo.step}
                            step={passo.step}
                            title={passo.title}
                            description={passo.description}
                            icon={passo.icon}
                            isLast={index === passoAPassoData.length - 1}
                        />
                    ))}
                </div>
                 <div className="text-center mt-16">
                    {}
                    <Link
                        to="/contato"
                        className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 inline-block"
                    >
                        Começar Agora!
                    </Link>
                </div>
            </div>
        </section>
    );
}
