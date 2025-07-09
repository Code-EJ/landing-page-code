import { useState } from "react"

import HeroImagePng from "../assets/imagemHero.png"

export type CarrosselProperties = {
  title: string,
  description: string,
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const carrossels: CarrosselProperties[] = [
    { title: "Tranformamos ideias em soluções digitais que fazem sua empresa crescer", description: "Somos a CODE[], Empresa Júnior de Tecnologia da Dom Helder, Desenvolvemos sites, aplicativos, automações e soluções inteligentes para seu negócio" },
    { title: "Transforme Dados em Decisões com Inteligência", description: "Nossa plataforma integra, analisa e traduz grandes volumes de dados em insights acionáveis para o seu negócio." },
    { title: "Construímos Soluções Escaláveis para o Seu Futuro Digital", description: "Do desenvolvimento ao deploy, entregamos tecnologia de ponta com foco em performance, segurança e escalabilidade." }
  ]

  return (
    <div className="w-full flex flex-row items-center justify-center pt-20 pb-20 border border-amber-500">
      {/* Textinhos */}
      <div className="flex flex-col items-center justify-center pl-10 pr-10 gap-5">
        <h1 className="text-3xl font-bold w text-[#1e0e62]">
          { carrossels[currentIndex].title }
        </h1>
        {/* Textinhos */}
        <div className="w-full flex justify-between">
          <p className="text-lg text-[#bebec8]">{ carrossels[currentIndex].description }</p>
          <img
            src={ HeroImagePng }
            className="w-60 h-70 border-x-6 border-y-20 border-x-[#141414] border-y-[#2f2f2f]"
          />
        </div>
        {/* Carrossel */}
        <div className="w-full flex items-center justify-center gap-4">
          { carrossels.map((_, i) => {
            return (
              <div 
                className={`
                  ${currentIndex === i ? "bg-[#2a8c82]" : "bg-[#d3d3d3]"}
                  w-3 h-3 rounded-full  
                `}
                onClick={() => setCurrentIndex(i)}
              />
            )
          })}
        </div>
        {/* Botõeszinhos */}
        <div className="w-full flex flex-col items-center justify-center">
          <button className="bg-[#2a8c82] p-3 pl-5 pr-5 rounded-full text-white font-bold shadow-lg cursor-pointer">
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  )
}