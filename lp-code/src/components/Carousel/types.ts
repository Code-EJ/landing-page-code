import type { ReactNode } from "react";

/**
 * @description
 * Define os tipos de mídia suportados pelo carrossel.
 */
export type MediaType = "image" | "video" | "text";

/**
 * @description
 * Estrutura de dados para cada item do carrossel dinâmico.
 * * @param id - Identificador único obrigatório para a key do React.
 * @param type - Tipo de conteúdo ('image', 'video' ou 'text').
 * @param src - URL da fonte (obrigatório para image e video).
 * @param alt - Texto alternativo para acessibilidade (usado em image).
 * @param content - Conteúdo React ou texto (obrigatório para text).
 * @param videoProps - Configurações extras opcionais para a tag <video>.
 */
export interface CarouselItem {
    id: string | number;
    type: MediaType;
    src?: string;
    alt?: string;
    content?: ReactNode;
    videoProps?: {
        autoPlay?: boolean;
        muted?: boolean;
        loop?: boolean;
        controls?: boolean;
    };
}

/**
 * @description
 * Propriedades aceitas pelo componente Carousel multimídia.
 */
export interface CarouselProps {
    items: CarouselItem[];
    autoPlay?: boolean;
    interval?: number;
    onIndexChange?: (newIndex: number) => void;
    maxWidth?: string | number; 
    height?: string | number;
}