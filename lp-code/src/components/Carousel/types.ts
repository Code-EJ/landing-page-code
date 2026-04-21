/**
 * @description
 * Representa a estrutura de dados esperada para cada imagem do carrossel.
 * 
 * @param Parametros: 
 * - `src`: URL da fonte da imagem (ex: caminho local ou URL externa).
 * - `alt`: Texto alternativo para acessibilidade (Leitores de tela) e SEO.
 */
export interface CarouselImage {
    src: string;
    alt: string;
}

/**
 * @description
 * Propriedades aceitas pelo componente Carousel.
 * 
 * @param Parametros: 
 * - `images`: Array de objetos do tipo CarouselImage, representando as imagens a serem exibidas.
 * - `autoPlay`: (Opcional) Se verdadeiro, o carrossel avançará automaticamente após um intervalo definido.
 * - `interval`: (Opcional) Tempo em milissegundos entre cada avanço automático (padrão: 3000ms).
 * - `onIndexChange`: (Opcional) Callback que é chamado sempre que o índice da imagem atual muda, recebendo o novo índice como argumento.
 */
export interface CarouselProps {
    images: CarouselImage[];
    autoPlay?: boolean;
    interval?: number;
    onIndexChange?: (newIndex: number) => void;
}