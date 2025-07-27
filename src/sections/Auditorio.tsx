import AuditorioImgA from "../assets/auditorio/imagemAuditorio1.svg"
import AuditorioImgB from "../assets/auditorio/imagemAuditorio2.svg"

import AuditorioImgC from "../assets/auditorio/imagemAuditorio3.svg"
import AuditorioImgD from "../assets/auditorio/imagemAuditorio4.svg"

import CapacityQualityImg from "../assets/auditorio/qualities/capacity.svg"
import MediaQualityImg from "../assets/auditorio/qualities/media.svg"
import AccessibilityQualityImg from "../assets/auditorio/qualities/accessibility.svg"
import SupportQualityImg from "../assets/auditorio/qualities/support.svg"

import PrimaryLinkButton from "../components/Buttons/PrimaryLinkButton.tsx"

export type ImageSliderProps = {
    images: string[]
}

export function ImageSlider({ images }: ImageSliderProps) {
    return (
        <div className="w-full pt-10 pb-10 flex items-center justify-center">)
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

export type QualityProps = {
    description: string
    image: string
}

function QualityCard({ description, image }: QualityProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <img src={ image } />
            <p>{ description }</p> 
        </div>
    )
}

export function QualitiesCards({ qualities }: { qualities: QualityProps }) {
    return (
        <div className="w-full grid grid-cols-2 justify-center items-center gap-5 pr-10 pl-10 pt-15">
        { qualities.map((quality) => {
            return (
                <QualityCard { ...quality }/>
            )
        }) } 
        </div>
    )
}

export type TalkWithUsButtonProps = {
    label: string
}

export function TalkWithUsButton({ label }: TalkWithUsButtonProps) {
    return (
        <button className="">
            <img src=""/>
            { label }
        </button>
    )
}

export function ButtonsRow() {
    return (
        <div className="w-full border-2 flex justify-center items-center gap-3">
            <PrimaryLinkButton 
                label="Faça sua reserva"
                onPress={() => {
                    return;
                }}
            />
            <TalkWithUsButton label="Fale conosco" />
        </div>
    )
}

export default function Auditorio() {
    return (
        <div className="w-full pt-20 pb-30 flex flex-col gap-10 items-center  justify-center bg-[#F5F5F5]">
            <h1 className="text-3xl font-bold text-center">Conheça nosso espaço</h1>
            <ImageSlider images={[ AuditorioImgA, AuditorioImgB ]}/>
            <h1 className="text-3xl font-bold text-center">Conheça nosso auditório moderno e alugue para seu próximo evento!</h1>
            <ImageSlider images={[ AuditorioImgA, AuditorioImgB ]}/>
            <p className="text-center">
                Nosso espaço está disponível para eventos, palestras, workshops e reuniões. Localizado dentro do Centro Universitário Dom Helder, o auditório oferece estrutura profissional, tecnologia de ponta e fácil acesso.
            </p>
            <QualitiesCards qualities={[
                { image: CapacityQualityImg, description: "Capacidade para até 100 pessoas" },
                { image: MediaQualityImg, description: "Equipamento multimídia" },
                { image: AccessibilityQualityImg, description: "Acessibilidade e climatização" },
                { image: SupportQualityImg, description: "Suporte técnico incluso" }
            ]}/>
            <ButtonsRow />
        </div>
    )
}
