import AuditorioImgA from "../assets/auditorio/imagemAuditorio1.svg"
import AuditorioImgB from "../assets/auditorio/imagemAuditorio2.svg"

import AuditorioImgC from "../assets/auditorio/imagemAuditorio3.svg"
import AuditorioImgD from "../assets/auditorio/imagemAuditorio4.svg"


export type ImageSliderProps = {
    images: string[]
}

export function ImageSlider({ images }: ImageSliderProps) {
    return (
        <div className="w-full pt-10 pb-10 border border-red-500 flex items-center justify-center">)
            <div className="w-90 h-60 bg-white rounded-lg overflow-x-scroll flex gap-2 p-2">
            { images.map((image) => {
                return (
                    <img src={ image } className="h-full w-fit"/>
                )
            })}
            </div>
        </div>
    );
}

export default function Auditorio() {
    return (
        <div className="w-full pt-20 pb-20 flex flex-col items-center  justify-center bg-[#F5F5F5]">
            <h1 className="text-3xl font-bold text-center">Conheça nosso espaço</h1>
            <ImageSlider images={[ AuditorioImgA, AuditorioImgB ]}/>
            <h1 className="text-3xl font-bold text-center">Conheça nosso auditório moderno e alugue para seu próximo evento!</h1>
            <ImageSlider images={[ AuditorioImgA, AuditorioImgB ]}/>
            <p className="text-center">
                Nosso espaço está disponível para eventos, palestras, workshops e reuniões. Localizado dentro do Centro Universitário Dom Helder, o auditório oferece estrutura profissional, tecnologia de ponta e fácil acesso.
            </p>
        </div>
    )
}
