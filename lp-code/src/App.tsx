import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import Carousel from './components/Carousel/carousel';

// 1. Importe o TestimonialCard (ajuste o caminho conforme a sua estrutura de pastas)
import { TestimonialCard } from './components/Testimonial-card/TestimonialCard'; 

gsap.registerPlugin(useGSAP);

function App() {
  const container = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const { contextSafe } = useGSAP({ scope: container });

  useGSAP(() => {
    if (!buttonRef.current) return;

    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  const onClickGood = contextSafe(() => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      rotation: "+=180",
      duration: 0.3,
      ease: "power2.out",
    });
  });

  const onEnter = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.25,
      duration: 0.1,
      ease: "power2.out",
    });
  });

  const onLeave = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.1,
      ease: "power2.out",
      overwrite: "auto",
    });
  });

  // 'true' pra visualizar teste e 'false' pra esconder
  const showTests = true;

  const img1 = 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE='
  const img2 = 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630'
  const img3 = 'https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80'

  const cadeirasData = [
    { src: img1, alt: "Cadeira ergonômica preta com apoio lombar" },
    { src: img2, alt: "Cadeira gamer branca e vermelha" },
    { src: img3, alt: "Cadeira de escritório executiva em couro" }
  ];

  // 2. Dados fictícios para os depoimentos explorando os Edge Cases
  const testimonialsData = [
    {
      text: "Melhor empresa júnior do Brasil!",
      authorName: "Enzo Ribas",
      authorRole: "Diretor de Projetos",
      avatarUrl: "https://github.com/github.png",
      rating: 5,
    },
    {
      text: "Trabalho excepcional e entrega super rápida. A Code superou todas as nossas expectativas e elevou o nível do nosso produto.",
      authorName: "Maria Silva",
      authorRole: "CEO na Tech Solutions",
      rating: 4,
      // Sem avatarUrl para testar o fallback (iniciais MS)
    },
    {
      text: " the integral of a differential form ω over the boundary ∂Ω of some orientable manifold Ω is equal to the integral of its exterior derivative dω over the whole of ⁠Ω",
      authorName: "Sir George Stokes",
      authorRole: "Physicist and Mathematician",
      rating: 2,
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8nnHTbLUeAM2E0C5EV3W4tsKPmXe8qWrX4c5PlZ-yXAWvdERj_wkoEkUy_1tHaw-tj3rLFu2qkC9zccZnuXGUvz_sWwN6y5i4Gpr4LsrLJw&s=10",
    },
    {
      text: "ASDOHASOIUDHOASD",
      authorName: "",
      authorRole: "CEO na Tech Solutions",
      rating: 4,
      // Sem avatarUrl para testar o fallback (iniciais MS)
    },
    {
      text: "Recomendo de olhos fechados! Layout impecável e código limpo.",
      authorName: "João Pedro",
      // Sem cargo, sem avatar e sem nota para testar a renderização mínima
    }
  ];

  return (
    <div 
      ref={container} 
      // Troquei h-screen por min-h-screen e adicionei py-10 para permitir rolagem e espaçamento
      className="flex flex-col justify-center items-center min-h-screen py-10"
    >
      <h1 className="text-3xl font-bold mb-8">Landing Page da Code</h1>
      
      {/* Teste do carousel. */}
      {showTests && (
        <Carousel
          images={cadeirasData}
          autoPlay={false}
          interval={5000}
          onIndexChange={(newIndex) => console.log("Imagem atual:", newIndex)}
        />
      )}

      <button
        ref={buttonRef}
        onClick={onClickGood}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="px-6 py-3 mt-8 mb-16 text-xl bg-purple-900 text-white rounded"
      >
        Click
      </button>

      {/* 3. Seção de Depoimentos renderizando os cards em um Grid responsivo */}
      <section className="w-full max-w-6xl px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">O que nossos clientes dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full auto-rows-[350px]">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              {...testimonial} 
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;