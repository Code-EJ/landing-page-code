import { useCallback, useEffect, useState } from "react";
import type { CarouselItem } from "../types";


interface UseCarouselParams {
    items: CarouselItem[];
    autoPlay: boolean;
    interval: number;
    onIndexChange?: (newIndex: number) => void;
}

/**
 * @description
 * Hook customizado para gerenciar a lógica de estado e validação do Carrossel Multimídia.
 * Separa a regra de negócio da interface visual, facilitando a manutenção.
 */
export function useCarousel({ items, autoPlay, interval, onIndexChange }: UseCarouselParams) {
    // Armazena apenas os itens que passaram na validação de carregamento/existência
    const [validItems, setValidItems] = useState<CarouselItem[]>([]);
    // Controla o índice do item central (ativo) atual
    const [index, setIndex] = useState(0);
    // Controla o estado de carregamento inicial enquanto as mídias são validadas
    const [loading, setLoading] = useState(true);

    // Estado para detectar se é tela de celular
    const [isMobile, setIsMobile] = useState(false);

    // Efeito para checar o tamanho da tela
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px é o breakpoint padrão
        };
        
        // Checa na primeira renderização
        checkMobile();
        
        // Adiciona um listener para atualizar se o usuário redimensionar a tela
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Efeito responsável por validar as mídias assim que a prop 'items' muda
    useEffect(() => {
        // Se a lista for vazia ou indefinida, encerra o loading e não faz nada
        if (!items || items.length === 0) {
            setLoading(false);
            return;
        }

        // Função auxiliar para validar cada item individualmente com base no seu 'type'
        const validateItem = async (item: CarouselItem): Promise<CarouselItem | null> => {
            // Se for imagem, tentamos carregá-la na memória do navegador
            if (item.type === "image" && item.src) {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = item.src!;
                    img.onload = () => resolve(item); // Sucesso: retorna o item
                    img.onerror = () => resolve(null); // Falha: retorna nulo (ignora a imagem quebrada)
                });
            }
            
            // Se for vídeo, apenas garantimos que a URL (src) foi fornecida
            if (item.type === "video" && item.src) {
                return item;
            }

            // Se for texto, garantimos que o conteúdo React/String (content) foi fornecido
            if (item.type === "text" && item.content) {
                return item;
            }

            // Caso não atenda a nenhum dos critérios esperados, falha na validação
            return null; 
        };

        const validateAllItems = async () => {
            setLoading(true);
            // Aguarda a validação de todos os itens paralelamente para otimizar performance
            const validated = await Promise.all(items.map(validateItem));
            
            // Remove os itens que retornaram 'null' e atualiza o estado com as mídias válidas
            setValidItems(validated.filter((v): v is CarouselItem => !!v));
            setLoading(false);
        };

        validateAllItems();
    }, [items]);

    // Função para avançar para o próximo item
    const next = useCallback(() => {
        setIndex((prevIndex) => {
            // O operador módulo (%) garante que ao chegar no final, volte ao índice 0 (loop infinito)
            const novoIndex = (prevIndex + 1) % validItems.length;
            if (onIndexChange) onIndexChange(novoIndex);
            return novoIndex;   
        });
    }, [onIndexChange, validItems.length]);

    // Função para voltar para o item anterior
    const previous = useCallback(() => {
        setIndex((prevIndex) => {
            // Soma-se o tamanho total antes de aplicar o módulo para evitar números negativos
            const novoIndex = (prevIndex - 1 + validItems.length) % validItems.length;
            if (onIndexChange) onIndexChange(novoIndex);
            return novoIndex;   
        });
     }, [onIndexChange, validItems.length]);

    // Efeito responsável por gerenciar a reprodução automática (auto-play)
    useEffect(() => {
        // Se autoPlay for falso ou não houver itens suficientes para navegar, não faz nada
        if (!autoPlay || validItems.length <= 1) return;

        // Cria um timer que chama a função 'next' a cada 'interval' milissegundos
        const timer = setInterval(() => {
            next();
        }, interval);
        
        // Limpa o intervalo ao desmontar o componente ou caso as dependências mudem
        return () => clearInterval(timer);
    }, [autoPlay, validItems.length, next, interval]);

    // Função para permitir navegação pelas setas do teclado (acessibilidade)
    const handleKeyboard = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.repeat) return; // Evita disparos múltiplos se o usuário segurar a tecla
        
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            previous();
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            next();
        }
    }, [next, previous]);

    // Retorna tudo o que o componente visual precisa para funcionar
    return { 
        validItems, 
        index, 
        loading,
        next,
        previous,
        handleKeyboard,
        isMobile
     };
}