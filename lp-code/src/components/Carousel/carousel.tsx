import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCarousel } from "./hooks/useCarousel";
import { carouselStyles } from "./carouselStyles";
import type { CarouselProps } from "./types";

gsap.registerPlugin(useGSAP);

/**
 * @description
 * Componente de Carrossel Animado com GSAP.
 * Suporta navegação por teclado, auto-play, lazy-loading/validação de imagens 
 * e é focado em acessibilidade e performance visual.
 * @example
 * ```tsx
 * <Carousel 
 * images={[{ src: img1, alt: "Foto 1" }]} 
 * autoPlay={true} 
 * interval={5000} 
 * />
 * ```
 */
export default function Carousel({
    images = [],
    autoPlay = false,
    interval = 3000,
    onIndexChange
}: CarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const {
        validImages,
        index,
        loading,
        next,
        previous,
        handleKeyboard
    } = useCarousel({ images, autoPlay, interval, onIndexChange });

    useGSAP(() => {
        if (validImages.length > 0) {
            gsap.fromTo(".slide-img", 
                { 
                    x: (i) => i === 0 ? -100 : (i === 2 ? 100 : 0),
                    opacity: 1,
                    scale: 0.8,
                    filter: "blur(10px)"
                },
                {
                    x: 0,
                    scale: (i) => (total > 1 && i !== 1) ? 0.75 : 1,
                    opacity: (i) => (total > 1 && i !== 1) ? 0.3 : 1,
                    filter: (i) => (total > 1 && i !== 1) ? "blur(7px)" : "blur(0px)",
                    duration: 1.5,
                    ease: "power2.inOut",
                    clearProps: "transform,filter"
                }
            );
    }
}, { dependencies: [index, validImages], scope: containerRef });

    if (loading) {
        return <div className="carousel-loading">Carregando...</div>;
    }

    const total = validImages.length;
    
    if (total === 0) {
        return <div className="carousel-empty">Nenhuma imagem pôde ser carregada.</div>;
    }

    const prevItem = validImages[(index - 1 + total) % total];
    const currentItem = validImages[index];
    const nextItem = validImages[(index + 1) % total];

    return (
        <div ref={containerRef} tabIndex={0} onKeyDown={handleKeyboard} className="carousel-container" style={carouselStyles.container}>
    <div className="carousel-track" style={carouselStyles.track}>
        
        {/* Imagem anterior */}
        {total > 1 && (
            <div style={{ ...carouselStyles.imageWrapper, ...carouselStyles.sideImage }} className="slide-img">
                <img
                    src={prevItem.src} 
                    alt={prevItem.alt} 
                    // A img APENAS recebe o estilo responsivo
                    style={carouselStyles.responsiveImg} 
                />
            </div> 
        )}

        {/* Imagem atual */}
        <div style={{ ...carouselStyles.imageWrapper, ...carouselStyles.mainImage } } className="slide-img" >
            <img 
                src={currentItem.src}
                alt={currentItem.alt} 
                style={carouselStyles.responsiveImg}
            />
        </div>
        
        {/* Imagem seguinte */}
        {total > 1 && (
            <div style={{ ...carouselStyles.imageWrapper, ...carouselStyles.sideImage }} className="slide-img">
                <img
                    src={nextItem.src}
                    alt={nextItem.alt}
                    style={carouselStyles.responsiveImg}
                />
            </div>
        )}
    </div>

    {total > 1 && (
        <div style={carouselStyles.controls}>
            <button onClick={previous} style={carouselStyles.button} aria-label="Imagem anterior">⬅</button>
            <button onClick={next} style={carouselStyles.button} aria-label="Próxima imagem">➡</button>
        </div>
    )}
</div>
    );
}