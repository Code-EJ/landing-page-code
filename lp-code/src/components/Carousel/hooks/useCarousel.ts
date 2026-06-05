import { useCallback, useEffect, useState } from "react";
import type { CarouselImage } from "../types";

interface UseCarouselParams {
    images: CarouselImage[]
    autoPlay: boolean;
    interval: number;
    onIndexChange?: (newIndex: number) => void;
}

/**
 * @description
 * Hook customizado para gerenciar a lógica de estado, validação e navegação do Carrossel.
 * Abstrai a regra de negócio para fora do componente visual.
 * @param params - Configurações do carrossel (images, autoPlay, interval, onIndexChange)
 * @returns Estados e funções de controle para a UI.
 */
export function useCarousel(
    {images, autoPlay, interval, onIndexChange }: UseCarouselParams
) {
    const [validImages, setValidImages] = useState<CarouselImage[]>([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!images || images.length === 0) {
            setLoading(false);
            return;
        }

        const testImage = (imageObj: CarouselImage) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = imageObj.src;
                img.onload = () => resolve(imageObj);
                img.onerror = () => resolve(null);
            });
        };

        const validateImages = async () => {
            setLoading(true);
            const validImages = await Promise.all(images.map(testImage));
            setValidImages(validImages.filter((v): v is CarouselImage => !!v));
            setLoading(false);
        };

        validateImages();
    }, [images]);

    const next = useCallback(() => {
        setIndex((prevIndex) => {
            const novoIndex = (prevIndex + 1) % validImages.length;
            if (onIndexChange) onIndexChange(novoIndex);
            return novoIndex;   
        });
    }, [onIndexChange, validImages.length]);;

    const previous = useCallback(() => {
        setIndex((prevIndex) => {
            const novoIndex = (prevIndex - 1 + validImages.length) % validImages.length;
            if (onIndexChange) onIndexChange(novoIndex);
            return novoIndex;   
        });
     }, [onIndexChange, validImages.length]);;

    useEffect(() => {
        if (!autoPlay || validImages.length <= 1) return;

        const timer = setInterval(() => {
            next();
        }, interval);
        
        return () => clearInterval(timer);
    }, [autoPlay, validImages.length, next, interval]);

    const handleKeyboard = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.repeat) return;
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            previous();
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            next();
        }
    }, [next, previous]);

    return { 
        validImages, 
        index, 
        loading,
        next,
        previous,
        handleKeyboard
     };
}