import React from 'react';
// IMPORTAMOS O CLEANUP AQUI:
import { render, screen, fireEvent, act, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, beforeAll, afterEach, vi } from 'vitest';
import Carousel from '../carousel';
import { type CarouselImage } from '../types';

// =========================================================================
// MOCKS GLOBAIS
// =========================================================================

vi.mock('gsap', () => ({
    default: {
        registerPlugin: vi.fn(),
        fromTo: vi.fn(),
        isTweening: vi.fn(() => false),
    }
}));

vi.mock('@gsap/react', () => ({
    useGSAP: (callback: () => void) => {
        React.useEffect(() => { callback(); }, [callback]);
    }
}));

const mockImageOnload = () => {
    // @ts-ignore
    global.Image = class {
        onload: () => void;
        onerror: () => void;
        src: string;
        
        constructor() {
            this.onload = vi.fn();
            this.onerror = vi.fn();
            this.src = '';
            setTimeout(() => {
                if (this.onload) this.onload();
            }, 0);
        }
    };
};

const mockImages: CarouselImage[] = [
    { src: 'img1.png', alt: 'Cadeira Gamer' },
    { src: 'img2.png', alt: 'Mesa de Escritório' },
    { src: 'img3.png', alt: 'Monitor Curvo' }
];

describe('Componente <Carousel />', () => {
    
    beforeAll(() => {
        mockImageOnload();
    });

    afterEach(() => {
        vi.clearAllMocks();
        vi.useRealTimers();
        cleanup(); // LIMPA O DOM ENTRE CADA TESTE! (O Segredo do sucesso)
    });

    it('deve renderizar o estado de carregamento inicialmente', () => {
        // Usa o 'container' retornado pelo render em vez do 'screen'
        const { container } = render(<Carousel images={mockImages} />);
        
        // Busca o elemento pela classe CSS, independentemente do texto que estiver dentro
        const loadingDiv = container.querySelector('.carousel-loading');
        expect(loadingDiv).toBeInTheDocument();
    });

    it('deve renderizar o estado de lista vazia caso não haja imagens', async () => {
        render(<Carousel images={[]} />);
        await waitFor(() => {
            // Regex ajustado para pegar parte da frase independente do que você digitar lá
            expect(screen.getByText(/Nenhuma imagem pôde ser carregada./i)).toBeInTheDocument();
        });
    });

    it('deve renderizar as imagens corretamente após validação', async () => {
        render(<Carousel images={mockImages} />);

        await waitFor(() => {
            const imagens = screen.getAllByRole('img');
            expect(imagens.length).toBeGreaterThan(0);
        });

        // Pega todas as imagens renderizadas no track
        const imagens = screen.getAllByRole('img') as HTMLImageElement[];
        
        // Verifica se a imagem central (atual) é a img1
        expect(imagens[1].src).toContain('img1.png');
    });

    it('deve navegar para a PRÓXIMA imagem ao clicar no botão direito', async () => {
        render(<Carousel images={mockImages} />);
        await waitFor(() => screen.getByLabelText('Próxima imagem'));
        
        const nextButton = screen.getByLabelText('Próxima imagem');
        
        act(() => {
            fireEvent.click(nextButton);
        });

        const imagens = screen.getAllByRole('img') as HTMLImageElement[];
        // Após clicar em próximo, a imagem central deve ser a img2
        expect(imagens[1].src).toContain('img2.png');
    });

    it('deve navegar por EVENTOS DE TECLADO (Setas Direcionais)', async () => {
        const { container } = render(<Carousel images={mockImages} />);
        
        await waitFor(() => {
            expect(screen.getAllByRole('img').length).toBe(3);
        });
        
        const carouselWrapper = container.querySelector('.carousel-container') as HTMLElement;
        
        act(() => {
            carouselWrapper.focus(); // Foca no carrossel
            fireEvent.keyDown(carouselWrapper, { key: 'ArrowRight', code: 'ArrowRight' });
        });

        let imagens = screen.getAllByRole('img') as HTMLImageElement[];
        expect(imagens[1].src).toContain('img2.png'); // Imagem do centro virou a img2
        
        act(() => {
            fireEvent.keyDown(carouselWrapper, { key: 'ArrowLeft', code: 'ArrowLeft' });
        });

        imagens = screen.getAllByRole('img') as HTMLImageElement[];
        expect(imagens[1].src).toContain('img1.png'); // Voltou para a img1
    });

    it('deve respeitar a funcionalidade de autoPlay mudando a imagem com o tempo', async () => {
        vi.useFakeTimers();
        const onIndexChangeMock = vi.fn();

        render(
            <Carousel 
                images={mockImages} 
                autoPlay={true} 
                interval={3000} 
                onIndexChange={onIndexChangeMock}
            />
        );

        await act(async () => {
            vi.advanceTimersByTime(10); // resolve o mock inicial
        });

        act(() => {
            vi.advanceTimersByTime(3000); // acelera o tempo do setInterval
        });

        expect(onIndexChangeMock).toHaveBeenCalledWith(1);
    });
});