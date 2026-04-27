import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import Carousel from './components/Carousel/carousel';

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

  //'true' pra visualizar teste e 'false' pra esconder
  const showTests = true;

  const img1 = 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE='
  const img2 = 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630'
  const img3 = 'https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80'

  const cadeirasData = [
  { src: img1, alt: "Cadeira ergonômica preta com apoio lombar" },
  { src: img2, alt: "Cadeira gamer branca e vermelha" },
  { src: img3, alt: "Cadeira de escritório executiva em couro" }
];

  return (
    <div 
    ref={container} 
    className="flex flex-col justify-center items-center h-screen"
    >
      <h1>Landing Page da Code</h1>
      {/* Teste do carousel. */}
      <Carousel
        images={cadeirasData}
        autoPlay={false}
        interval={5000}
        onIndexChange={(newIndex) => console.log("Imagem atual:", newIndex)}
      />
      <button
        ref={buttonRef}
        onClick={onClickGood}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="px-6 py-3 text-xl bg-purple-900 text-white rounded"
      >
        Click
      </button>
      
    </div>
  );
}
export default App;
