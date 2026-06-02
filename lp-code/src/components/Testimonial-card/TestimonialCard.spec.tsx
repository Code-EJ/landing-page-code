import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TestimonialCard } from './TestimonialCard';

describe('TestimonialCard Component', () => {
  // Objeto de mock básico (Mock Data) usado para não repetir código em cada teste
  const baseProps = {
    text: 'Melhor empresa júnior do Brasil!',
    authorName: 'Enzo Ribas',
  };

  it('deve renderizar corretamente com todas as props completas', () => {
    // 1. Arrange: Prepara a renderização do componente com todas as props
    render(
      <TestimonialCard
        {...baseProps}
        authorRole="Diretor de Projetos"
        avatarUrl="https://github.com/github.png"
        rating={4}
      />
    );

    // 2. Act & Assert: Verifica se os textos existem na tela
    expect(screen.getByText(/Melhor empresa júnior do Brasil!/i)).toBeInTheDocument();
    expect(screen.getByText('Enzo Ribas')).toBeInTheDocument();
    expect(screen.getByText('Diretor de Projetos')).toBeInTheDocument();

    // 3. Assert: Valida a imagem, checando se possui o atributo ALT descritivo
    const avatar = screen.getByAltText('Foto de perfil de Enzo Ribas');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'https://github.com/github.png');

    // 4. Assert: Verifica se o acessibilidade das estrelas foi aplicada
    // Estamos procurando um elemento que seja uma "imagem" cujo nome (aria-label) corresponda.
    expect(
      screen.getByRole('img', { name: 'Avaliação de 4 de 5 estrelas' })
    ).toBeInTheDocument();
  });

  it('deve renderizar corretamente sem as props opcionais', () => {
    // 1. Arrange: Renderiza APENAS com nome e texto (props obrigatórias da Interface)
    render(<TestimonialCard {...baseProps} />);

    // 2. Assert: Textos obrigatórios devem existir
    expect(screen.getByText('Enzo Ribas')).toBeInTheDocument();

    // 3. Assert: O Cargo (que não foi passado) NÃO deve existir no DOM
    expect(screen.queryByText('Diretor de Projetos')).not.toBeInTheDocument();

    // 4. Assert: Container de avaliação (estrelas) NÃO deve existir
    expect(
      screen.queryByRole('img', { name: /Avaliação de/i })
    ).not.toBeInTheDocument();

    // 5. Assert: O Fallback de avatar (Iniciais) DEVE estar visível (já que não foi passado um avatarUrl)
    expect(screen.getByText('ER')).toBeInTheDocument();
  });

  it('deve exibir fallback (iniciais) quando a imagem do avatar falhar ao carregar (Edge Case)', () => {
    // 1. Arrange: Renderiza com um link de imagem de propósito quebrado ou inválido
    render(
      <TestimonialCard
        {...baseProps}
        avatarUrl="https://url-quebrada.com/imagem.png"
      />
    );

    // No primeiro momento, a tag <img> é montada no DOM
    const image = screen.getByAltText('Foto de perfil de Enzo Ribas');
    expect(image).toBeInTheDocument();

    // 2. Act: Dispara o evento de erro nativo do HTML para simular uma falha de rede/link quebrado
    fireEvent.error(image);

    // 3. Assert: O estado muda, a imagem desaparece e o fallback (as letras ER) assume o lugar
    expect(screen.getByText('ER')).toBeInTheDocument();
    expect(screen.queryByAltText('Foto de perfil de Enzo Ribas')).not.toBeInTheDocument();
  });
});