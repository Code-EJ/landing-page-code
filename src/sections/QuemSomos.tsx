import QuemSomosImg1 from "../assets/quem_somos_1.png";
import QuemSomosImg2 from "../assets/quem_somos_2.png"

export type QuemSomosSectionProps = {
    image: string;
    text: string;
    reversed?: boolean;
}

const SectionRow = ({ image, text, reversed }: QuemSomosSectionProps) => {
    return (
        <div className={`
            flex flex-col items-center gap-8
            md:flex-row md:justify-between md:gap-20
            ${reversed ? "md:flex-row-reverse" : ""}
        `}>
            <img src={image} alt="Quem somos" className="w-120 h-70 object-cover rounded-lg" />
            <p className="text-xl text-center w-lg">{text}</p>
        </div>
    );
}

const QuemSomosSection = () => {
    return (
        <div className="quem-somos-section-container flex flex-col items-center bg-[#F5F5F5] pt-20 pb-20 pr-8 pl-8 gap-20">
            <h1 className="font-bold text-4xl">Quem somos?</h1>
            <SectionRow
                image={ QuemSomosImg1 }
                reversed={true}
                text="A CODE[] é a Empresa Júnior de Ciência da Computação da Dom Helder, formada por estudantes apaixonados por tecnologia e impacto social. Seu propósito é conectar academia e mercado, desenvolvendo soluções tecnológicas reais que fortalecem as habilidades técnicas e profissionais dos membros."
            />
            <SectionRow
                reversed={false}
                text="A CODE[] acredita na transformação digital e no potencial da juventude para um futuro mais eficiente e sustentável. Com uma equipe multidisciplinar, entrega mais que sistemas, desenvolve pessoas."
                image={ QuemSomosImg2 }
            />
        </div>
    );
}

export default QuemSomosSection;
