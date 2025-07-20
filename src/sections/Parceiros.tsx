import AmbevLogo from "../assets/parceiros/ambev.png"
import DomHelderLogo from "../assets/parceiros/domhelder.png"
import LocalizaLogo from "../assets/parceiros/localiza.png"
import RedBullLogo from "../assets/parceiros/redbull.png"
import SydleLogo from "../assets/parceiros/sydle.png"
import UbuntuLogo from "../assets/parceiros/ubuntu.png"

export type ParceiroProperties = {
    name: string
    image?: string
}

export function ParceiroCard({ name, image }: ParceiroProperties) {
    return (
        <div className="w-32 h-32 flex items-center justify-center cursor-pointer shadow-xl">
            {image ?
                <img
                    className="w-full h-full"
                    src={image}
                    alt={name}
                /> :
                <h1>{name}</h1>
            }
        </div>
    )
}

export function ParceirosCards({ parceiros }: { parceiros: ParceiroProperties[] }) {
    return (
        <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-5"
        >
            {parceiros.map(({ name, image }) => {
                return <ParceiroCard
                    name={name}
                    image={image}
                />
            })}
        </div>
    )
}

export default function ParceirosSection() {
    return (
        <div
            className="w-full pt-10 pb-10 flex items-center flex-col gap-8"
        >
            <h1 className="text-4xl font-bold">Nossos Parceiros</h1>
            <p className="text-xl w-xs sm:w-2xl text-center">Trabalhamos ao lado de empresas inovadoras que compartilham nossa visão de transformar o futuro com tecnologia</p>
            <ParceirosCards
                parceiros={[
                    { name: "Ambev", image: AmbevLogo },
                    { name: "Dom Helder", image: DomHelderLogo },
                    { name: "Localiza", image: LocalizaLogo },
                    { name: "Red Bull", image: RedBullLogo },
                    { name: "Sydle", image: SydleLogo },
                    { name: "Ubuntu", image: UbuntuLogo }
                ]}
            />
        </div>
    )
}
