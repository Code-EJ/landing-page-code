import { useState } from "react";
import { Link } from "react-router-dom";
import TelefoneModal from "../components/TelefoneModal";

import HeroImage1 from "../assets/Hero/imagemHero1.png";
import HeroImage2 from "../assets/Hero/imagemHero2.png";
import HeroImage3 from "../assets/Hero/imagemHero3.png";

export type CarrosselProperties = {
  title: string;
  description: string;
  image: string;
};

function Carrossel({
  carrossels,
  setCurrentIndex,
  currentIndex,
}: {
  carrossels: CarrosselProperties[];
  currentIndex: number;
  setCurrentIndex: (index: number) => any;
}) {
  return (
    <div className="flex lg:flex-col gap-4 items-center justify-center m-4 lg:absolute lg:left-10 lg:top-1/2 lg:-translate-y-1/2">
      {carrossels.map((_, i) => (
        <div
          key={i}
          className={`w-5 h-5 rounded-full cursor-pointer transition-colors duration-300 ${currentIndex === i ? "bg-[#2a8c82]" : "bg-[#d3d3d3]"
            }`}
          onClick={() => setCurrentIndex(i)}
        />
      ))}
    </div>
  );
}

function Texts({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-[#1e0e62]">
        {title}
      </h1>
      <p className="text-base sm:text-lg xl:text-xl text-[#bebec8]">
        {description}
      </p>
    </div>
  );
}

function Buttons({ setModalOpen }: { setModalOpen: (open: boolean) => void }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Redireciona para /contato */}
      <Link
        to="/contato"
        className="bg-[#2a8c82] text-white font-bold px-6 py-3 rounded-full shadow-md text-center hover:bg-cyan-950 transition"
      >
        Solicite um Orçamento
      </Link>

      {/* Abre modal de telefone */}
      <button
        onClick={() => setModalOpen(true)}
        className="bg-transparent text-neutral-600 font-bold px-6 py-3 rounded-full shadow-md border border-[#2a8c82] sm:border-none sm:bg-[#2a8c82] sm:text-white hover:bg-cyan-950 transition"
      >
        Fale Conosco
      </button>
    </div>
  );
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false);

  const carrossels: CarrosselProperties[] = [
    {
      title:
        "Transformamos ideias em soluções digitais que fazem sua empresa crescer",
      description:
        "Somos a CODE[], Empresa Júnior de Tecnologia da Dom Helder. Desenvolvemos sites, aplicativos, automações e soluções inteligentes para seu negócio.",
      image: HeroImage1,
    },
    {
      title: "Transforme Dados em Decisões com Inteligência",
      description:
        "Nossa plataforma integra, analisa e traduz grandes volumes de dados em insights acionáveis para o seu negócio.",
      image: HeroImage2,
    },
    {
      title: "Construímos Soluções Escaláveis para o Seu Futuro Digital",
      description:
        "Do desenvolvimento ao deploy, entregamos tecnologia de ponta com foco em performance, segurança e escalabilidade.",
      image: HeroImage3,
    },
  ];

  const current = carrossels[currentIndex];

  return (
    <div className="relative w-full px-6 py-10 lg:py-20">
      {/* DESKTOP layout */}
      <div className="hidden lg:flex flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Carrossel lateral */}
        <div className="hidden lg:block">
          <Carrossel
            carrossels={carrossels}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>

        {/* Esquerda - Textos e botões */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 mb-10 lg:mb-0">
          <Texts title={current.title} description={current.description} />
          <div className="hidden lg:block">
            <Buttons setModalOpen={setModalOpen} />
          </div>
        </div>

        {/* Direita - Imagem */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={current.image}
            alt="Imagem ilustrativa"
            className="w-full max-w-md h-auto border-x-6 border-y-20 border-x-[#141414] border-y-[#2f2f2f]"
          />
        </div>
      </div>

      {/* MOBILE layout */}
      <div className="lg:hidden flex flex-col gap-6 mt-10">
        {/* Título centralizado */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1e0e62] text-center">
          {current.title}
        </h1>

        {/* Subtítulo à esquerda e imagem à direita */}
        <div className="flex flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#bebec8] w-1/2">{current.description}</p>
          <img
            src={current.image}
            alt="Imagem ilustrativa"
            className="w-1/2 h-auto border-x-4 border-y-10 border-x-[#141414] border-y-[#2f2f2f]"
          />
        </div>

        {/* Bolinhas + Botões */}
        <div className="flex flex-col items-center justify-center gap-6 pt-4 ">
          <Carrossel
            carrossels={carrossels}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          <Buttons setModalOpen={setModalOpen} />
        </div>
      </div>

      {/* Modal de telefone */}
      <TelefoneModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
