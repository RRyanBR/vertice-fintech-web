# Vértice – Fintech de controle financeiro pessoal

Projeto acadêmico da **FIAP – Fase 4 (View)**.
Tela **Visão geral** do sistema Vértice, recriada a partir do protótipo feito no Figma na Fase 2.

![Logo](logo.svg)

## Tecnologias
- HTML5 semântico
- CSS com **Tailwind CSS 3** (compilado para `style.css`)

## Como abrir
Basta dar dois cliques no arquivo **`index.html`**.
O CSS já está compilado no arquivo `style.css`, então a página funciona até **sem internet**.

## Estrutura
```
vertice-fintech-web/
├── index.html          → tela Visão geral (estrutura)
├── style.css           → CSS final, gerado pelo Tailwind (estilo)
├── input.css           → CSS-fonte (Tailwind + componentes próprios)
├── logo.svg            → logo da Vértice
├── tailwind.config.js  → cores e fontes da identidade visual
└── package.json        → script para recompilar o CSS
```

## Responsividade
- **Celular:** menu no topo com rolagem horizontal e cards em 1 coluna.
- **Tablet:** cards em 2 colunas.
- **Desktop:** menu lateral fixo, 4 indicadores lado a lado e gráfico ao lado das últimas transações.

## Recompilar o CSS (opcional)
```bash
npm install
npm run build
```

## Autor
Ryan de Almeida – FIAP
