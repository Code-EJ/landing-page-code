import type { ReactNode } from "react"
import PeopleSvg from "../assets/quemsomos_2.svg"
import CodeVideo from "../assets/code_video.mp4"
import { VideoPlayer } from "../components/VideoPlayer"

export type SectionRowAttachmentProperties = 
    | { image: string, video?: never }
    | { image?: never, video: string }

export type SectionRowProperties = SectionRowAttachmentProperties & {
    isReversed?: boolean
    children: ReactNode
    shouldImageHide?: boolean
    image?: string
    video?: string
}

function SectionRow({ isReversed, children, image, video, shouldImageHide }: SectionRowProperties) {
    return (
        <div className={`
            w-full
            flex items-center flex-col justify-center gap-20 pr-10 pl-10
            ${ isReversed ? "md:flex-row-reverse" : "md:flex-row" }
s        `}>
            <div
                className="w-full sm:w-2xl flex items-center justify-center"
            >
                <p className="text-center text-xl sm:text-xl">{ children }</p>
            </div>
            { image ? (
                <img
                    src={ image }
                    alt={ image } 
                    className={`
                        w-100 h-100 rounded-lg
                        ${ shouldImageHide ? "hidden" : "block"}
                        md:block
                    `}
                />
            ) : (
                <VideoPlayer 
                    video={ video }
                />
            )}
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
        <div className="w-full bg-alt-bg flex flex-col justify-center items-center pt-10 pb-10 gap-10">
            <h1 className="text-4xl font-bold text-accent pb-5">Quem somos nós?</h1>
            <SectionRow
                isReversed={false}
                video={ CodeVideo }
            >
                A <Highlight>CODE[]</Highlight> é a Empresa Júnior de Ciência da Computação da Dom Helder, formada por estudantes apaixonados por tecnologia e impacto social. Seu propósito é conectar academia e mercado, desenvolvendo soluções tecnológicas reais que fortalecem as habilidades técnicas e profissionais dos membros.
            </SectionRow>
            <SectionRow 
                isReversed={true}
                image={ PeopleSvg }
                shouldImageHide
            >
                A <Highlight>CODE[]</Highlight> acredita na transformação digital e no potencial da juventude para um futuro mais eficiente e sustentável. Com uma equipe multidisciplinar, entrega mais que sistemas, desenvolve pessoas.
            </SectionRow>
        </div>
    )
}

export default QuemSomosSection