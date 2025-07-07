export type ParceiroProperties = {
    name: string
    image?: string
}

export function ParceiroCard({ name, image }: ParceiroProperties) {
    return (
        <div className="w-32 h-32 border border-black flex items-center justify-center">
            { image ? <img src={ image } alt={ name }/> : <h1>{ name }</h1>}
        </div>
    )
}

export function ParceirosCards({ parceiros }: { parceiros: ParceiroProperties[] }) {
    return (
        <div
            className="grid grid-cols-3 gap-5"
        >
            { parceiros.map(({ name, image }) => {
                return <ParceiroCard 
                    name={ name }
                    image={ image }
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
            <p className="text-xl w-2xl text-center">Trabalhamos ao lado de empresas inovadoras que compartilham nossa visão de transformar o futuro com tecnologia</p>
            <ParceirosCards 
                parceiros={[
                    { name: "Ambev" },
                    { name: "Dom Helder" },
                    { name: "Localiza" },
                    { name: "Red Bull" },
                    { name: "Sydle" },
                    { name: "Ubuntu" }
                ]}
            />
        </div>
    )
}
