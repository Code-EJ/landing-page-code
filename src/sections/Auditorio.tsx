export type CarouselProperties = {
    images: string[]
}

function CarouselImageCard({ image }: { image: string }) {
    return (
        <div className="border-3 h-full min-w-50">
            <img src={ image }/>
        </div>
    )
}

function Carousel({ images }: CarouselProperties) {
    return (
        <div className="w-150 h-90 bg-white overflow-auto">
            <div className="flex h-full w-auto border border-red-500">
                { images.map((image) => {
                    return (
                        <CarouselImageCard image={ image } />
                    )
                })}
            </div>
        </div>
    )
}

export default function Auditorio() {
    return (
        <div className="bg-[#f3f3f3] w-full pt-10 pb-10 flex gap-5 items-center justify-center flex-col">
            <h1 className="text-3xl font-bold">Conheça nosso espaço</h1>
            <Carousel images={[
                "dawd",
                "dkopawd",
                "kdpawd",
                "dawd"
            ]}/>
        </div>
    )
}