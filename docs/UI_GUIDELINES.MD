# 🎨 Diretrizes de UI e Animação

Este documento guia o desenvolvimento visual e interativo do projeto.

## 1. Estrutura de Estilos (Tailwind)

Utilizamos o Tailwind CSS para toda a estilização estática.

- **Configuração:** As cores, fontes e espaçamentos personalizados estão em `tailwind.config.js`.
- **Convenção:** Evite `@apply` no CSS sempre que possível. Use classes utilitárias diretamente no JSX.

## 2. Padrões de Animação (GSAP)

Para manter a performance e consistência (60fps), siga estas regras:

### O Hook `useGSAP`

Sempre utilize o hook `useGSAP` em vez de `useEffect` para animações. Isso garante a limpeza de memória automática (cleanup).

```javascript
// ✅ Certo
useGSAP(() => {
    gsap.to(".box", { x: 100 });
}, { scope: containerRef });

// ❌ Errado
useEffect(() => {
    gsap.to(".box", { x: 100 });
}, []);
```

## 3. Objetivo

Garantir que a interface seja clara, consistente, previsível, acessível e eficiente.

UI bonita sem UX boa é vitrine falsa. UX boa sem UI decente é software dos anos 90. Queremos as duas.

## 4. Princípios Fundamentais

A interface deve exigir o mínimo de esforço cognitivo e sempre deixar claro onde o usuário está, o que pode fazer e o que acabou de acontecer.

Se o usuário precisa "pensar demais", o sistema falhou.

## 5. Consistência Visual

### Cores

- Usar paleta limitada (3–5 cores principais)
- Verde → sucesso; Vermelho → erro; Amarelo → aviso; Azul/neutro → ação primária

### Tipografia

- No máximo 2 fontes (uma para títulos, uma para texto)
- Hierarquia clara: Título, Subtítulo, Corpo, Legenda

### Espaçamento

- Usar espaçamentos múltiplos de 4 ou 8px
- Evitar elementos "colados"

## 6. Componentes

### Botões

- Ação primária sempre destacada
- Ação destrutiva sempre em vermelho com confirmação
- Texto claro: ✅ "Salvar alterações" em vez de "OK"

### Inputs e Formulários

- Label sempre visível (nunca só placeholder)
- Mensagens de erro específicas
- Validação preferencialmente em tempo real

### Feedback ao Usuário

Toda ação relevante deve gerar: loading, sucesso e erro.

## 7. Navegação

Estrutura previsível, menus estáveis, breadcrumbs quando necessário.

## 8. Estados Obrigatórios

Toda tela deve prever: loading, vazio, erro e sucesso.

## 9. Acessibilidade

- Contraste suficiente (WCAG AA)
- Navegação por teclado e foco visível
- Textos alternativos em ícones importantes

## 10. Responsividade

Mobile first, evitar horizontal scroll, botões grandes para toque, layouts fluidos.

## 11. Performance Percebida

- Skeleton loaders em telas pesadas
- Dividir carregamentos grandes
- Velocidade percebida importa mais que velocidade real

## 12. Padrões Proibidos

Modais em cascata, popups inesperados, animações longas inúteis, sons automáticos, dark patterns.

## 13. Regra de Ouro

Se precisar explicar a interface, ela está mal projetada. A interface deveria ensinar sozinha.
