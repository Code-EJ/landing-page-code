import type { ReactNode } from "react"
import IdeasSvg from "../assets/quemsomos_1.svg"
import PeopleSvg from "../assets/quemsomos_2.svg"

function SectionRow({ isReversed, children, image }: {
    isReversed?: boolean,
    children: ReactNode,
    image: string
}) {
    return (
        <div className={`
            w-full
            flex items-center flex-col-reverse justify-center gap-20
            md:${ isReversed ? "flex-row-reverse" : "flex-row" }
s        `}>
            <div
                className="w-full sm:w-2xl flex items-center justify-center"
            >
                <p className="text-center sm:text-xl">{ children }</p>
            </div>
            <img
                src={ image }
                alt={ image } 
                className="w-100 h-100 rounded-lg"
            />
        </div>
    )
}

function Highlight({ children }: { children: ReactNode }) {
    return (
        <span className="text-accent font-bold">{ children }</span>
    )
}

function QuemSomosSection() {
    return (
        <div className="w-full bg-alt-bg flex flex-col justify-center items-center pt-10 gap-10">
            <h1 className="text-4xl font-bold text-accent pb-5">Quem somos nós?</h1>
            <SectionRow
                image={ IdeasSvg }
            >
                A <Highlight>CODE[]</Highlight> é a Empresa Júnior de Ciência da Computação da Dom Helder, formada por estudantes apaixonados por tecnologia e impacto social. Seu propósito é conectar academia e mercado, desenvolvendo soluções tecnológicas reais que fortalecem as habilidades técnicas e profissionais dos membros.
            </SectionRow>
            <SectionRow 
                isReversed={true}
                image={ PeopleSvg }
            >
                A <Highlight>CODE[]</Highlight> acredita na transformação digital e no potencial da juventude para um futuro mais eficiente e sustentável. Com uma equipe multidisciplinar, entrega mais que sistemas, desenvolve pessoas.
            </SectionRow>
        </div>
    )
}

export default QuemSomosSection