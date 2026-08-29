# Remix of persona-essence-creator (60)

ESPECIFICAÇÃO DE DESIGN E FUNCIONALIDADE DO APP "PERSONA"
Objetivo Geral: Criar um aplicativo responsivo, minimalista e elegante, com foco na experiência do usuário, transições suaves e design que evoque desejo, seguindo a estética e funcionalidade de produtos Apple.




1. TELA DE INÍCIO: "SUA VISÃO. NOSSA ARTE." (Front)




Título Principal: "Persona" (Fonte 'Serif' elegante, tamanho 48pt, cor #1A1A1A ou preto absoluto).




Subtítulo: "Sua visão. Nossa arte." (Fonte 'Serif' leve, tamanho 16pt, cor #4A4A4A).




Área de Upload: Um quadrado pontilhado (2px dashed line, cor #AAAAAA) centralizado. Dimensões: 200x200px. Contém um ícone "+" centralizado (48pt, cor #4A4A4A).




Funcionalidade: Ao tocar no quadrado ou no "+", abre o seletor de imagens do dispositivo (galeria de fotos/câmera).




Call to Action Inferior: "Toque para iniciar sua sessão de foto." (Fonte 'Serif' leve, tamanho 14pt, cor #4A4A4A).




Transição de Saída: Ao selecionar a imagem, transição para a Tela de Processamento com um efeito Fade Out da Tela de Início e Fade In da Tela de Processamento, em 0.4s.




2. TELA DE PROCESSAMENTO: "A ARTE ESTÁ TOMANDO FORMA..."




Título Superior: "Persona" (Fonte 'Serif' elegante, tamanho 28pt, cor #1A1A1A).




Mensagem Dinâmica (Frases de Expectativa):




"A arte está tomando forma..."




"Refinando a luz, capturando a essência..."




"Sua melhor versão, quase pronta..."




Comportamento: Estas frases devem aparecer e desaparecer suavemente (efeito Fade In/Out, 0.8s de duração para cada frase, com 2s de exibição) abaixo do título principal. Fonte 'Serif' leve, tamanho 18pt, cor #4A4A4A.




Imagem do Usuário em Fundo: A foto que o usuário carregou deve ser exibida no centro da tela, em P&B ou com um filtro monocromático suave, e levemente desfocada (blur: 8-12px).




Animação Central: Um círculo brilhante e sutilmente animado (efeito de "pulsação" ou "giro lento" com partículas de luz suaves, cor #FFD700 - dourado pálido) ao redor da imagem do usuário. Esta animação não deve ter fim, e deve ser visualmente satisfatória.




Texto Inferior (Atualização de Status): Uma pequena frase de "aguarde" ou "processando" pode aparecer discretamente abaixo da imagem, em fonte fina e cinza claro, se o processo for longo.




Transição de Saída: Quando o processamento é concluído (simulado após 3-5s), transição para a Tela de Resultados com um efeito de Crossfade suave da imagem desfocada para as imagens nítidas na próxima tela. Duração 0.6s.




3. TELA DE RESULTADOS: "SUA ESSÊNCIA, REINVENTADA."




Título Superior: "Persona" (Fonte 'Serif' elegante, tamanho 28pt, cor #1A1A1A).




Subtítulo: "Sua essência, reinventada." (Fonte 'Serif' leve, tamanho 16pt, cor #4A4A4A).




Galeria de Imagens (3 Resultados):




Layout: Três cards de imagem (retângulos com cantos levemente arredondados, border-radius: 12px), organizados em uma grade flexível, ocupando a maior parte da tela.




Conteúdo: Cada card exibe uma das fotos geradas em alta qualidade.




Descrição do Estilo: Abaixo de cada imagem, um texto curto e descritivo (Ex: "Visão Empresarial", "Alma Criativa", "Vibração Urbana"). Fonte 'Sans-serif' fina, tamanho 12pt, cor #6A6A6A.




Ícone "Persona" Discreto: Em cada card de imagem, no canto inferior direito, um pequeno ícone do app "Persona" (o que projetamos no Catálogo de Design) em monocromático (#A0A0A0, opacity: 0.6). Isso serve como uma assinatura de design, não uma marca d'água agressiva.




Funcionalidades por Imagem (Ao Clicar na Fotografia Individualmente):




Ao clicar em uma imagem específica, ela se expande para uma visualização em tela cheia (transição suave de zoom/fade).




Nessa visualização em tela cheia, botões flutuantes e minimalistas aparecem:




Salvar Foto: Ícone de download. Ao clicar, salva a imagem em alta resolução na galeria do dispositivo.




Favoritar (Coração): Ícone de coração. Ao clicar, o coração preenche-se/esvazia-se. Esta imagem é marcada como favorita para acesso futuro (ver "Book de Favoritos" abaixo).




Compartilhar: Ícone de compartilhamento. Abre o menu de compartilhamento nativo do dispositivo.




Voltar: Ícone "X" ou "Seta para trás". Retorna à Tela de Resultados.




Transição de Expansão: Ao clicar na imagem, ela deve se expandir suavemente para a tela cheia (0.3s). Os botões devem surgir com um efeito Fade In logo após.




Botões de Ação Global (Parte Inferior da Tela de Resultados):




"Salvar Imagens" (Botão Principal): Um botão proeminente, arredondado (border-radius: 25px), fundo branco/cinza claro, texto #1A1A1A. Ao clicar, salva todas as 3 imagens geradas na galeria do dispositivo.




"Compartilhar Tudo" (Botão Secundário): Ao lado do botão "Salvar Imagens", um botão secundário similar em estilo. Ao clicar, abre o menu de compartilhamento para que o usuário possa escolher como deseja compartilhar um álbum ou colagem das 3 imagens (se a plataforma no-code suportar isso, caso contrário, compartilha uma por uma).




"Book de Favoritos" (Ícone): Um ícone de livro ou estrela no canto inferior esquerdo (próximo aos botões, mas distinto). Ao clicar, navega para uma nova tela que exibe todas as fotos que o usuário marcou como favoritas.




4. TELA DE "BOOK DE FAVORITOS" (A Ser Criada)




Layout: Uma grade limpa de todas as fotos que o usuário marcou como favoritas.




Título: "Meu Book de Favoritos"




Funcionalidade: Clicar em qualquer foto no Book de Favoritos a expande para a visualização em tela cheia com as mesmas opções de Salvar/Compartilhar (sem a opção de Favoritar novamente).




ESTILO GERAL E RESPONSIVIDADE:




Fontes: Priorize 'Serif' para títulos e textos maiores (como 'Playfair Display' ou 'Lora') e uma 'Sans-serif' fina para descrições e botões (como 'Open Sans Light' ou 'Montserrat Light'). Mantenha a consistência.




Cores: Paleta minimalista. Branco, cinzas suaves ( #E0E0E0, #A0A0A0, #6A6A6A), preto (#1A1A1A). Evite cores vibrantes, a menos que seja para um destaque muito específico e controlado.




Espaçamento (Padding/Margin): Use um sistema de espaçamento consistente (Ex: múltiplos de 8px ou 16px) para garantir equilíbrio e clareza.




Bordas: Cantos arredondados (border-radius: 8px a 25px) para cards e botões, dando uma sensação suave e moderna.




Sombras: Sombras muito sutis (box-shadow: 0px 4px 10px rgba(0,0,0,0.05)) para elevar elementos (cards, botões) sem parecer pesado.




Responsividade: O layout deve se adaptar fluidamente a diferentes tamanhos de tela (smartphones, tablets). Os elementos devem redimensionar e reorganizar-se de forma inteligente, mantendo as proporções e a estética. Use flexbox ou grid layouts para garantir isso.




Transições e Animações: Todas as transições (entre telas, abertura de pop-ups, cliques de botões) devem ser suaves, rápidas (0.2s a 0.6s) e elegantes, evitando qualquer "salto" ou "engasgo". A experiência deve ser fluida como um produto Apple.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://suapersona.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6d14c4e8-c160-4fe7-bf64-fce90d3d93fc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
