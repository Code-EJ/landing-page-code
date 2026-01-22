# Rewrite Plan – Projeto Landing-Page-Code

## 1. Objetivo

Este rewrite tem como objetivo:

- Melhorar a organização do código
- Reduzir acoplamento e duplicação
- Facilitar manutenção e onboarding
- Preparar o projeto para novas funcionalidades
- Aumentar previsibilidade de deploy e testes

O refactor não tem como foco adicionar features, apenas estabilizar e reorganizar.

## 2. Escopo

- Refatoração Completa do Projeto
- Nova Arquitetura
- Design com foco em UX

## 3. Estratégia Geral

- Desenvolvimento incremental (em etapas pequenas)
- Código sempre compilável
- Cada etapa = uma branch + uma issue
- Merge frequente para evitar branches longas
- Testes antes e depois de cada etapa

## 4. Estrutura de Branches

**Branch principal:**

- `main` – produção

**Padrão de branches:**

- `feat/<task>`
- `fix/<bug>`
- `chore/<infra>`

**Exemplos:**

- `feat/modal`
- `fix/pop-up`
- `chore/refactor-folder-structure`

**Branches antigas:**

- Serão removidas ou movidas para `legacy_<ano>/*`

## 5. Fases do Refactor

### Fase 0 – Base estrutural

1. Definir stack/arquitetura
1. Documentar guidelines iniciais

### Fase 1 – Design / Prototipagem

1. Prototipagem Figma (Mobile First vs Desktop).
    - Definição das Animações
1. Ajustar conforme feedback
1. Ajustar guidelines de UI/UX
1. Validar com stakeholders

### Fase 2: Setup & Architecture

1. Padronizar:
    - Estrutura de pastas
    - Nomenclatura
1. Setup Vite + Tailwind + Lenis.
1. Definição de Tokens de Design (Cores/Fontes no tailwind.config).



### Fase 3: Implementation (Atomic Design)

1. Identificar Átomos reutilizáveis
1. Criar biblioteca de Átomos
1. Documentar Átomos
1. Átomos: Botões, Textos, Inputs.
1. Moléculas/Organismos: Seções da LP (Hero, Features, Footer).
1. Integração do GSAP nos organismos.

### Fase 4 – Polish & Performance

1. Implementar lazy loading
1. Otimização de imagens (WebP/Avif).
1. Lighthouse Score (SEO/Acessibilidade).
1. Melhorar performance (bundle size, renderização)

## 6. Regras para Issues

Cada issue deve conter:

- Objetivo
- Escopo
- Critério de aceitação

## 7. Critérios de Qualidade

Antes de qualquer merge:

- Build passando
- Testes de Regressão Visual (comparar com versão anterior)
- Sem warnings críticos
- Revisão de código obrigatória

## 8. Responsabilidades

**Tech Lead:**

- Definir arquitetura alvo
- Revisar PRs
- Controlar escopo
- Garantir qualidade

**Dev Team:**

- Implementar mudanças
- Escrever testes
- Documentar código
- Reportar bloqueios

## 10. Definição de sucesso

- Código mais limpo e organizado
- Redução de bugs
- Facilidade de manutenção  
- Feedback positivo do time
- Entrega dentro do prazo planejado
- Preparação para novas features
- Documentação atualizada
