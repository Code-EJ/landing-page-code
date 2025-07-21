import ImagemAuditorio1 from "../assets/auditorio/imagemAuditorio1.svg"
import ImagemAuditorio2 from "../assets/auditorio/imagemAuditorio2.svg"


export type CarouselProperties = {
    images: string[]
}

function CarouselImage({ image }: { image?: string }) {
    return (
        <div className="h-full w-120">
            <img src={ image } className="h-full w-full"/>
        </div>
    )
}

function Carousel({ images }: CarouselProperties) {
    return (
        <div className={`
            bg-white
            rounded-lg
            w-130 h-90
            overflow-x-auto
            p-2
        `}>
            <div className="w-auto h-full flex">
                <div className="flex gap-3 w-screen h-full">
                    { images.map(((image) => {
                        return (
                            <CarouselImage image={ image }/>
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}

export default function Auditorio() {
    return (
        <div className="bg-[#f5f5f5] p-20 flex items-center justify-center flex-col gap-5">
            <h1 className="text-3xl font-bold">Conheça nosso Espaço</h1>
            <Carousel 
                images={[
                    ImagemAuditorio1,
                    ImagemAuditorio2
                ]}
            />
        </div>
    )
}