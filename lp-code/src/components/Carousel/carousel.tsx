import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCarousel } from "./hooks/useCarousel";
import { carouselStyles } from "./carouselStyles";
import type { CarouselProps, CarouselItem } from "./types";

gsap.registerPlugin(useGSAP);

export default function Carousel({
    items = [],
    autoPlay = false,
    interval = 3000,
    onIndexChange,
    maxWidth = "100%", // Valor padrão
    height = "auto"    // Valor padrão
}: CarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const {
        validItems,
        index,
        loading,
        next,
        previous,
        handleKeyboard,
        isMobile // Recebemos o estado mobile
    } = useCarousel({ items, autoPlay, interval, onIndexChange });

    useGSAP(() => {
        if (validItems.length > 0) {
            const total = validItems.length;
            
            // Se for celular, animação simples de fade/deslize
            if (isMobile) {
                gsap.fromTo(".slide-item",
                    { opacity: 0, x: 50, scale: 0.95 },
                    { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: "power2.out", clearProps: "all" }
                );
            } else {
                // Se for desktop, animação original de 3 itens
                gsap.fromTo(".slide-item", 
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
        }
    }, { dependencies: [index, validItems, isMobile], scope: containerRef });

    const renderMedia = (item: CarouselItem) => {
        // ... (o switch case do renderMedia continua exatamente igual ao de antes)
        switch (item.type) {
            case "image": return <img src={item.src} alt={item.alt || "Carousel"} style={carouselStyles.responsiveMedia} />;
            case "video": return <video src={item.src} style={carouselStyles.responsiveMedia} autoPlay={item.videoProps?.autoPlay} muted={item.videoProps?.muted} loop={item.videoProps?.loop} playsInline />;
            case "text": return <div style={carouselStyles.textContainer}>{item.content}</div>;
            default: return null;
        }
    };

    if (loading) return <div className="carousel-loading">Carregando mídias...</div>;
    const total = validItems.length;
    if (total === 0) return <div className="carousel-empty">Nenhum conteúdo pôde ser carregado.</div>;

    const prevItem = validItems[(index - 1 + total) % total];
    const currentItem = validItems[index];
    const nextItem = validItems[(index + 1) % total];

    // Combinamos os estilos inline com as props que você enviou de tamanho
    const customContainerStyle = {
        ...carouselStyles.container,
        maxWidth: maxWidth,
        height: height
    };

    // No mobile, o item principal precisa ocupar 100% da tela disponível
    const mobileMainItemStyle = isMobile ? { width: "100%", maxWidth: "100%" } : {};

    return (
        <div ref={containerRef} tabIndex={0} onKeyDown={handleKeyboard} className="carousel-container" style={customContainerStyle}>
            <div className="carousel-track" style={carouselStyles.track}>
                
                {/* Oculta os itens laterais se isMobile for true */}
                {!isMobile && total > 1 && (
                    <div style={{ ...carouselStyles.itemWrapper, ...carouselStyles.sideItem }} className="slide-item">
                        {renderMedia(prevItem)}
                    </div> 
                )}

                <div style={{ ...carouselStyles.itemWrapper, ...carouselStyles.mainItem, ...mobileMainItemStyle }} className="slide-item" >
                    {renderMedia(currentItem)}
                </div>
                
                {!isMobile && total > 1 && (
                    <div style={{ ...carouselStyles.itemWrapper, ...carouselStyles.sideItem }} className="slide-item">
                        {renderMedia(nextItem)}
                    </div>
                )}
            </div>

            {total > 1 && (
                <div style={carouselStyles.controls}>
                    <button onClick={previous} style={carouselStyles.button} aria-label="Item anterior">⬅</button>
                    <button onClick={next} style={carouselStyles.button} aria-label="Próximo item">➡</button>
                </div>
            )}
        </div>
    );
}