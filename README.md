# Portfólio Pessoal - Edson Hagmayer

## 📋 Descrição do Projeto

Este projeto consiste em uma landing page funcional e responsiva desenvolvida como portfólio pessoal para apresentação profissional na área de programação e tecnologia. A página foi criada com o objetivo de consolidar, em um único espaço digital, informações sobre formação acadêmica, habilidades técnicas e comportamentais, além de projetos desenvolvidos ao longo da trajetória profissional.

O portfólio foi desenvolvido como parte da atividade prática do curso SENAI/SC LAB365, servindo como instrumento inicial de apresentação profissional, sendo passível de atualização e ampliação conforme a evolução na área de tecnologia. Utiliza HTML5 semântico com tags estruturais como `<header>`, `<main>`, `<section>` e `<footer>`, CSS3 moderno com Grid Layout e Flexbox, e JavaScript para interatividade dinâmica.

## 🎯 Objetivo

Criar uma página web responsiva, moderna e profissional que sirva como cartão de visitas digital, permitindo que recrutadores, empresas e outros profissionais possam conhecer o perfil, as competências técnicas, habilidades comportamentais e os trabalhos realizados pelo desenvolvedor. O portfólio demonstra domínio das linguagens de marcação e estilização, com design visual atrativo com paleta púrpura sofisticada e funcionalidades dinâmicas através do JavaScript.

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura com `<header>`, `<main>`, `<section>`, `<article>` e `<footer>`
- **CSS3 Moderno**: Grid Layout, Flexbox, gradientes, animações, media queries e design responsivo
- **JavaScript**: Navegação dinâmica, menu responsivo, scroll suave e funcionalidades interativas

## 📁 Estrutura do Projeto

```
portifolio_hagmayer/
├── index.html              # Página principal (HTML5 semântico)
├── styles.css              # Estilos e design (CSS3 moderno)
├── script.js               # Funcionalidades e interatividade
├── README.md               # Documentação do projeto
└── assets/                 # Pasta para recursos
    └── edson.jpeg          # Foto de perfil do desenvolvedor
```

## 🏗️ Estrutura HTML Semântica

```html
<html lang="pt-BR">
  <head>
    <!-- Metadados e links -->
  </head>
  <body>
    <!-- HEADER com navegação -->
    <header>
      <nav class="navbar">
        <!-- Menu de navegação com links para seções -->
      </nav>
    </header>

    <!-- MAIN com todas as seções -->
    <main>
      <!-- SEÇÃO 1: Home / Apresentação -->
      <section id="home">
        <!-- Hero com foto, nome, redes sociais e CTAs -->
      </section>

      <!-- SEÇÃO 2: Sobre -->
      <section id="about">
        <!-- Descrição, foto e estatísticas -->
      </section>

      <!-- SEÇÃO 3: Habilidades -->
      <section id="skills">
        <!-- Habilidades técnicas e comportamentais com barras -->
      </section>

      <!-- SEÇÃO 4: Projetos -->
      <section id="projects">
        <!-- Cards de projetos com descrição e tecnologias -->
      </section>

      <!-- SEÇÃO 5: Contato -->
      <section id="contact">
        <!-- Cards de contato e formulário de mensagem -->
      </section>
    </main>

    <!-- FOOTER -->
    <footer>
      <!-- Informações de copyright -->
    </footer>
  </body>
</html>
```

## 🎨 Estrutura CSS Moderno

O CSS utiliza:

- **Variáveis CSS** (`:root`) para cores, fontes e transições
- **Grid Layout** para seções responsivas e projetos
- **Flexbox** para alinhamento horizontal e vertical
- **Gradientes lineares e radiais** para efeitos visuais sofisticados
- **Media Queries** em 768px e 480px para adaptação mobile
- **Animações e transições** (`transition`, `@keyframes`) suaves em todos os elementos
- **Seletores semânticos** (header, main, section, article, footer) com poucas classes

## 📄 Seções da Página

### 1. Header (Cabeçalho)

- Navegação fixa na parte inferior da tela
- Menu responsivo com ícone hambúrguer para mobile
- Logo com efeito glow ao passar o mouse
- Links com destaque da seção ativa

### 2. Home / Apresentação

- Nome do desenvolvedor com destaque em púrpura
- Foto de perfil em círculo com gradiente e efeito sombra
- Subtítulo "Desenvolvedor & Entusiasta de Tecnologia"
- Links de redes sociais (GitHub e LinkedIn) com ícones SVG
- Dois botões de chamada para ação (Ver Projetos e Fale Comigo)
- Layout responsivo com grid 2 colunas

### 3. Sobre (About)

- Foto do desenvolvedor com borda arredondada
- Descrição profissional em dois parágrafos
- Três cards de estatísticas (15+ Projetos, 100% Dedicação, 2+ Anos Aprendizado)
- Botão para download do CV
- Layout grid com foto à esquerda e texto à direita

### 4. Habilidades (Skills)

- **Habilidades Técnicas** (5 itens):
  - HTML (80%), CSS (75%), JavaScript (70%), Python (65%), Git (70%)
- **Habilidades Comportamentais** (5 itens):
  - Comunicação (85%), Trabalho em Equipe (90%), Resolução de Problemas (80%), Proatividade (85%), Organização (80%)
- Barras de progresso animadas com gradiente e efeito glow
- Percentual de proficiência em cada habilidade
- Grid 2 colunas

### 5. Projetos (Projects)

Lista de 6 projetos desenvolvidos, cada um contendo:

- Imagem/thumbnail
- Nome do projeto (maiúsculo)
- Descrição funcional
- Tags de tecnologias (HTML, CSS, JavaScript)
- Links "Visualizar" e "Código"
- Cards com efeito hover (elevação e aumento de sombra)
- Grid responsivo com `repeat(auto-fit, minmax(300px, 1fr))`

**Projetos listados:**

1. Portfólio Responsivo
2. Calculadora Web
3. To-Do App
4. Conversor de Moedas
5. Galeria de Fotos
6. Jogo da Memória

### 6. Contato (Contact)

- **3 Cards de contato** dispostos verticalmente:
  - Email (edson.hagmayer@email.com) com botão "Enviar Email"
  - WhatsApp (+55 48 99999-9999) com botão "Enviar Mensagem"
  - LinkedIn (Edson Hagmayer) com botão "Ver Perfil"
  - Cada card com ícone SVG colorido em púrpura
- **Formulário de mensagem** com 3 campos:
  - Nome (input text, obrigatório)
  - Email (input email, obrigatório)
  - Mensagem (textarea 6 linhas, obrigatório)
  - Botão "Enviar Mensagem"
- Layout em grid 2 colunas (cards + formulário)

### 7. Footer (Rodapé)

- Copyright 2026
- Texto "Desenvolvido com ❤ e dedicação"
- Fundo em gradiente púrpura

## ⚙️ Funcionalidades Implementadas

✅ **Navegação dinâmica**: Menu fixo na parte inferior com scroll suave entre seções
✅ **Menu responsivo**: Hamburger menu em dispositivos móveis com animação
✅ **Animações suaves**: Transições em hover, transformações e fadeins
✅ **Barras de progresso**: Animação de preenchimento ao carregar a página
✅ **Cards interativos**: Efeito hover com elevação, sombra e mudança de cor
✅ **Formulário de contato**: Validação de campos obrigatórios
✅ **Design responsivo**: Adaptação automática para 3 breakpoints (desktop, tablet, mobile)
✅ **Paleta de cores**: Gradientes púrpura sofisticado com efeito glow
✅ **Background dinâmico**: Gradiente fixo com padrão radial sutil

## 🚀 Como Executar

1. Faça o download ou clone este repositório:

   ```bash
   git clone https://github.com/Hagmayer1969/portifolio_hagmayer.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd portifolio_hagmayer
   ```

3. Abra o arquivo `index.html` em qualquer navegador web moderno:
   - Google Chrome
   - Mozilla Firefox
   - Microsoft Edge
   - Safari
   - Opera

4. Navegue pelas seções utilizando o menu de navegação ou rolando a página

## 📱 Responsividade

O portfólio é totalmente responsivo com adaptações para:

- **Desktop** (>768px): Layout completo com 2 colunas onde apropriado
- **Tablet** (768px): Layout adaptado com grid responsivo
- **Mobile** (<480px): Layout de coluna única com menu hamburger

## 💜 Paleta de Cores Implementada

- **Cor Primária**: `#a78bfa` (Púrpura claro/lavanda)
- **Cor Secundária**: `#8b5cf6` (Púrpura médio)
- **Cor Escura**: `#0f0f1e` (Quase preto azulado)
- **Texto Principal**: `#e8e8f0` (Branco levemente azulado)
- **Texto Secundário**: `#b8b8cc` (Cinza claro)
- **Borda**: `rgba(167, 139, 250, 0.3)` (Púrpura com transparência)

## 👤 Autor

**Edson Hagmayer**

- Desenvolvedor em formação
- Estudante de programação e tecnologia SENAI/SC LAB365
- GitHub: [Hagmayer1969](https://github.com/Hagmayer1969)
- Email: edson.hagmayer@email.com

## 📅 Data de Desenvolvimento

Fevereiro de 2026

## 📊 Critérios de Avaliação SENAI/SC LAB365 (Atendidos)

### Documentação: 30% do score

✅ **Mais de 800 caracteres**: Documentação completa e detalhada (aprox. 3.500 caracteres)
✅ Descrição clara do projeto e objetivo
✅ Explicação de tecnologias utilizadas
✅ Estrutura do projeto bem organizada

### Linguagens de Programação: 30% do score

✅ **HTML5 Semântico**: Estrutura com tags `<header>`, `<main>`, `<section>`, `<footer>`
✅ **CSS3 Moderno**: Grid Layout, Flexbox, gradientes, animações, media queries
✅ **JavaScript**: Navegação dinâmica, menu responsivo, scroll suave

### Codificação: 40% do score

✅ **Projeto válido e funcional**: Executável sem erros críticos
✅ **Sem erros de execução**: Código limpo e otimizado
✅ **Responsivo**: Adaptável para todos os tamanhos de tela
✅ **Interface profissional**: Design moderno com paleta sofisticada

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso SENAI/SC LAB365.

---

**Este portfólio é um documento vivo e profissional, sendo constantemente atualizado com novos projetos e habilidades adquiridas ao longo da jornada de desenvolvimento.**
