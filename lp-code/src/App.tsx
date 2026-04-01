import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import MotionDemo from './components/MotionDemo';
import LaptopSection from './components/LaptopSection';

gsap.registerPlugin(useGSAP);

function App() { 
  const container = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null)


  const { contextSafe } = useGSAP({ scope: container });

  useGSAP(() => {
    if (!buttonRef.current) return;

    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, [])

const onClickGood = contextSafe(() => {
    if (!buttonRef.current) return

    gsap.to(buttonRef.current, {
      rotation: '+=180',
      duration: 0.3,
      ease: 'power2.out',
    })
  })

  const onEnter = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.25,
      duration: 0.1,
      ease: 'power2.out',
    })
  })

  const onLeave = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.1,
      ease: 'power2.out',
      overwrite: 'auto',
    })
  })

  
  //'true' pra visualizar teste e 'false' pra esconder
  const showTests = true;

return (
  <div ref={container} className="flex flex-col items-center">
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Landing Page da Code</h1>
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

    {/* Seção de testes */}
    {showTests && (
      <div className="w-full border-t border-gray-700 pt-20">
        <MotionDemo />
        <LaptopSection />
      </div>
    )}
  </div>
);
}
export default App