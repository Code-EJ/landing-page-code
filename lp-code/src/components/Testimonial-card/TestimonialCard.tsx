import { useState } from 'react';
// Importação do CSS Modules. O empacotador (Vite/Webpack) gera classes únicas.
import styles from './TestimonialCard.module.css';

/**
 * Interface que define estritamente o contrato de dados (Props) do componente.
 * Garante que quem consumir este card envie os dados corretos.
 */
export interface TestimonialCardProps {
  text: string;               // Texto principal da avaliação
  authorName: string;         // Nome da pessoa que avaliou
  authorRole?: string;        // (Opcional) Cargo ou descrição. Ex: "Diretor de Projetos"
  avatarUrl?: string;         // (Opcional) URL para a foto de perfil
  rating?: number;            // (Opcional) Nota dada, geralmente de 0 a 5
}

export function TestimonialCard({
  text,
  authorName,
  authorRole,
  avatarUrl,
  rating,
}: TestimonialCardProps) {
  // Estado local usado APENAS para controlar a interface (UI State).
  // Se a imagem disparar o evento onError, mudamos para true para exibir o fallback.
  const [imgError, setImgError] = useState(false);

  /**
   * Função utilitária: Pega o nome do autor e extrai as duas primeiras iniciais.
   * Exemplo: "Enzo Ribas" -> ["Enzo", "Ribas"] -> "E" + "R" -> "ER"
   */
  const getInitials = (name: string) => {
    return name
      .split(' ')            // Divide o nome nos espaços
      .filter(Boolean)       // Remove espaços em branco extras
      .map((n) => n[0])      // Pega a primeira letra de cada palavra
      .join('')              // Junta as letras
      .substring(0, 2)       // Garante que retorne no máximo 2 letras
      .toUpperCase();        // Transforma em maiúsculas
  };

  /**
   * Renderiza as 5 estrelas do topo, pintando-as de acordo com a nota recebida.
   * Se a nota (rating) não for passada, a função não renderiza nada (retorna null).
   */
  const renderStars = () => {
    if (rating === undefined) return null;
    
    // Tratativa de segurança (Edge Case): Impede notas negativas ou maiores que 5.
    const normalizedRating = Math.max(0, Math.min(5, Math.round(rating)));

    return (
      <div
        className={styles.starsContainer}
        // Acessibilidade: Oculta as 5 tags SVG individuais do leitor de tela
        // e lê este container inteiro como uma única imagem descritiva.
        aria-label={`Avaliação de ${normalizedRating} de 5 estrelas`}
        role="img"
      >
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            aria-hidden="true" // Esconde o SVG individual dos leitores de tela
            className={`${styles.star} ${index < normalizedRating ? styles.starFilled : styles.starEmpty}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <article className={styles.card}>
      {renderStars()}
      
      <div className={styles.quoteMark} aria-hidden="true">
        "
      </div>

      <p className={styles.text}>
        {text} <span aria-hidden="true" className={styles.textInlineQuote}>"</span>
      </p>

      {/* 4. Rodapé: Foto/Iniciais e informações de contato */}
      <div className={styles.footer}>

        {avatarUrl && !imgError ? (
          <img
            src={avatarUrl}
            alt={`Foto de perfil de ${authorName}`}
            onError={() => setImgError(true)}
            className={styles.avatar}
          />
        ) : (
          <div
            className={styles.avatarFallback}
            aria-label={`Iniciais de ${authorName}`} // Acessibilidade para leitores de tela
          >
            {getInitials(authorName)}
          </div>
        )}

        {/* Informações textuais do rodapé */}
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{authorName}</span>
          
          {authorRole && (
            <span className={styles.authorRole}>{authorRole}</span>
          )}
        </div>
      </div>
    </article>
  );
}