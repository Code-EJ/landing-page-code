import { Button } from "./components/ui/button/Button"
import { Navbar } from "./components/ui/navbar/NavBar"
import { ScrollIndicator } from "./components/ui/scroll-indicator/ScrollIndicator"
import { Footer } from "./components/ui/footer/Footer"
import { FileExplorer } from "./components/ui/file-explorer/FileExplorer"
import { Container } from "./components/ui/container/Container"
import bg from "./assets/BG.png"
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import Carousel from './components/Carousel/carousel';

/**
 * App Root
 *
 * - Estrutura principal da aplicação
 * - Seções:
 *    • Hero
 *    • Stack de cards
 *    • Grid de serviços (dentro do Container)
 *    • Footer
 */
function App() {
  return (
    <div className="text-white">
      
      {/* NAVBAR FIXO */}
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-start pt-12 justify-center text-center overflow-hidden">
        
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <img
            src={bg}
            alt="background"
            className="w-full h-full object-cover"
          />

          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Grid */}
          <div
            className="
            absolute inset-0
            bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
                linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
            bg-[size:40px_40px]
          "
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col items-center gap-6 px-6">
          
          <h1 className="text-6xl md:text-8xl font-semibold tracking-widest">
            <span className="bg-purple-700 bg-clip-text text-transparent">
              CODE
            </span>
            <span className="text-green-400">[]</span>
          </h1>

          <p className="text-2xl md:text-4xl font-semibold text-white/80 max-w-2xl">
            Transformamos{" "}
            <span className="text-green-400">ideias</span> em soluções{" "}
            <span className="bg-gradient-to-r from-[#9413F6] to-[#FD0151] bg-clip-text text-transparent">
              digitais reais
            </span>.
          </p>

          <Button size="lg">
            <span className="bg-clip-text font-semibold text-lg text-transparent bg-gradient-to-r from-[#9413F6] to-[#FD0151]">
              Solicitar orçamento
            </span>
          </Button>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </section>

      {/* SEÇÃO CARDS + SERVIÇOS */}
      <section className="min-h-screen flex flex-col items-center justify-center gap-24">
        {/* GRID DE SERVIÇOS DENTRO DO CONTAINER */}
        <Container className="flex justify-center">
          <div className="py-6">
            <FileExplorer /> 
          </div>
        </Container>

      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App