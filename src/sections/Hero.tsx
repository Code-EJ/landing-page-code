import { useState } from "react"

import HeroImagePng from "../assets/imagemHero.png"

export type CarrosselProperties = {
  title: string,
  description: string,
}

function Carrossel({ carrossels, setCurrentIndex, currentIndex }: {
  carrossels: CarrosselProperties[]
  currentIndex: number,
  setCurrentIndex: (index: number ) => any
}) {
  return (
    <div className="lg:absolute lg:left-2 xl:left-30 xl:bottom-20 lg:flex-col lg:bottom-0 lg:top-0 mt-10 lg:mt-0 flex items-center justify-center gap-4">
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
  )
}

function Texts({ title, description }: { title: string, description: string }) {
  return (
    <>
      <h1 className="text-3xl xl:text-4xl font-bold w text-[#1e0e62]">
        { title }
      </h1>
      {/* Textinhos */}
      <div className="w-full flex justify-between xl:justify-start">
        <p className="text-lg xl:text-2xl xl:max-w-140 text-[#bebec8]">{ description }</p>
        <img
          src={ HeroImagePng }
          className="w-60 h-70 border-x-6 border-y-20 border-x-[#141414] border-y-[#2f2f2f]"
        />
      </div>
    </>
  )
}

export function Buttons() {
  return (
    <>
      {/* Botõeszinhos */}
      <div className="w-full flex flex-col sm:flex-row sm:gap-3 items-center justify-center xl:justify-start">
        <button className="hidden sm:block bg-[#2a8c82] p-3 pl-5 pr-5 rounded-full text-white font-bold shadow-lg cursor-pointer">Solicite um Orçamento</button>
        <button className="bg-[#2a8c82] sm:bg-transparent sm:text-neutral-600  p-3 pl-5 pr-5 rounded-full text-white font-bold shadow-lg cursor-pointer">
          Fale Conosco
        </button>
      </div>
    </>
  )
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const carrossels: CarrosselProperties[] = [
    { title: "Tranformamos ideias em soluções digitais que fazem sua empresa crescer", description: "Somos a CODE[], Empresa Júnior de Tecnologia da Dom Helder, Desenvolvemos sites, aplicativos, automações e soluções inteligentes para seu negócio" },
    { title: "Transforme Dados em Decisões com Inteligência", description: "Nossa plataforma integra, analisa e traduz grandes volumes de dados em insights acionáveis para o seu negócio." },
    { title: "Construímos Soluções Escaláveis para o Seu Futuro Digital", description: "Do desenvolvimento ao deploy, entregamos tecnologia de ponta com foco em performance, segurança e escalabilidade." }
  ]

  return (
    <div className="w-full flex flex-col items-center justify-center xl:justify-start xl:items-start pt-20 pb-10 pl-10 pr-20 lg:pl-40 lg:pr-40 xl:pl-60 xl:pr-60">
      {/* Textinhos */}
      <Texts 
        title={ carrossels[currentIndex].title }
        description={ carrossels[currentIndex].description }
      />
      <div className="flex flex-col items-center justify-center xl:justify-start xl:w-full pl-10 pr-10 xl:pl-0 xl:pr-0 gap-5">
        <Carrossel carrossels={ carrossels } currentIndex={ currentIndex } setCurrentIndex={ setCurrentIndex }/>
        <Buttons />
      </div>
    </div>
  )
}