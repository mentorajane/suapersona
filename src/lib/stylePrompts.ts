// Professional prompts (with parameters) per style — kept in sync with the
// edge function `supabase/functions/generate-persona/index.ts`.
// Used to display & copy the prompt that produced each generated image.

export const IDENTITY_LOCK =
  "ABSOLUTE IDENTITY LOCK — HIGHEST PRIORITY: This is a photo EDIT of the reference image, NOT the creation of a new person. The output MUST be the SAME HUMAN BEING from the reference photo, pixel-faithful to their real face and body. STRICTLY FORBIDDEN: do NOT beautify, slim, thicken, age, de-age, smooth skin, remove blemishes, whiten teeth, enlarge eyes, reshape nose, sharpen jaw, alter ethnicity, alter gender expression, change body proportions, change height, change weight, change muscle tone, change breast/chest size, change hip size, change hand/finger shape, change tattoos or scars, change eye color, change hair color/length/texture/hairline, add or remove facial hair, or apply any 'AI beauty filter'. PRESERVE EXACTLY (100% fidelity): face shape, skull proportions, forehead, jawline, chin, cheekbones, nose shape/size/nostrils, lip shape and thickness, philtrum, mouth width, teeth, ear shape and position, eye shape/spacing/color/eyelids/eyebrows, every freckle/mole/scar/wrinkle/birthmark, skin tone and texture, hair (color, length, style, hairline, parting), facial hair, neck, shoulders, torso, arms, hands, waist, hips, legs, overall body type and silhouette. A close friend or family member must instantly recognize the person in the output as the exact same individual from the reference. Only the clothing, pose (when specified), background, and lighting may change. If in doubt, err on the side of copying the original face and body IDENTICALLY.";

export const IDENTITY_LOCK_PT =
  "TRAVA ABSOLUTA DE IDENTIDADE — PRIORIDADE MÁXIMA: Esta é uma EDIÇÃO da foto de referência, NÃO a criação de uma nova pessoa. O resultado DEVE ser o MESMO SER HUMANO da foto original, fiel em pixels ao rosto e corpo reais. TERMINANTEMENTE PROIBIDO: NÃO embeleze, afine, engrosse, envelheça, rejuvenesça, alise a pele, remova imperfeições, clareie dentes, aumente olhos, remodele nariz, afine mandíbula, altere etnia, altere expressão de gênero, mude proporções do corpo, altere altura, peso, tônus muscular, tamanho do busto/peito, tamanho do quadril, formato das mãos/dedos, tatuagens ou cicatrizes, cor dos olhos, cor/comprimento/textura/linha do cabelo, adicione ou remova pelos faciais, ou aplique qualquer 'filtro de beleza IA'. PRESERVE EXATAMENTE (100% de fidelidade): formato do rosto, proporções do crânio, testa, mandíbula, queixo, maçãs do rosto, formato/tamanho do nariz e narinas, formato e espessura dos lábios, filtro, largura da boca, dentes, formato e posição das orelhas, formato/espaçamento/cor dos olhos, pálpebras, sobrancelhas, cada sarda/pinta/cicatriz/ruga/marca de nascença, tom e textura da pele, cabelo (cor, comprimento, estilo, linha capilar, repartição), pelos faciais, pescoço, ombros, tronco, braços, mãos, cintura, quadril, pernas, tipo de corpo e silhueta geral. Um amigo próximo ou familiar deve reconhecer instantaneamente a pessoa como o MESMO indivíduo da foto original. Apenas roupa, pose (quando especificada), cenário e iluminação podem mudar. Na dúvida, copie o rosto e o corpo IDENTICAMENTE ao original.";

// Tradução PT-BR dos prompts de cena por nome de estilo
export const STYLE_PROMPTS_PT: Record<string, string> = {
  "Home Office":
    "MUDANÇA DE CENA APENAS: Vista a mesma pessoa com look de empreendedora em alfaiataria — blazer de alfaiataria bem cortado, calça de alfaiataria estruturada, camiseta de seda por baixo, acessórios minimalistas (relógio fino, brincos discretos). Coloque-a em um home office contemporâneo e iluminado, com mesa minimalista, notebook aberto e luz natural suave da janela ao fundo. Iluminação diurna limpa e arejada. Enquadramento de meio corpo.",
  "Cafeteria Elegante":
    "MUDANÇA DE CENA APENAS: Vista a mesma pessoa com look chic do dia a dia — casaco estiloso ou blusa elegante. Coloque-a em uma cafeteria artesanal sofisticada com tons de madeira quente, plantas penduradas e bar de café desfocado ao fundo, segurando uma xícara de café de cerâmica. Iluminação ambiente quente e aconchegante. Enquadramento de meio corpo.",
  "Studio Cinematográfico":
    "MUDANÇA DE CENA APENAS: Vista a mesma pessoa com traje editorial refinado — blazer alfaiatarizado ou vestido elegante. Coloque-a em um estúdio fotográfico profissional com iluminação cinematográfica: softbox grande como luz principal, contraluz e fundo infinito escuro, com leve névoa atmosférica. Iluminação de estúdio dramática e controlada, com sombras e realces profundos. Enquadramento de meio corpo.",
  "Alfaiataria Editorial":
    "MUDANÇA DE CENA APENAS: Vista a mesma pessoa com alfaiataria de alto luxo estilo 'O Diabo Veste Prada' — terno de grife perfeitamente ajustado com ombros estruturados, silhueta marcante, tecido premium, acessórios de impacto (luvas de couro, bolsa estruturada, saltos ou oxfords). Coloque-a em um cenário editorial de revista de moda: lobby de mármore com janelas do piso ao teto, atmosfera de semana de moda, equipe desfocada ao fundo. Iluminação editorial nítida e de alto contraste. Enquadramento de meio corpo.",
  "Sorriso — Fundo Verde":
    "MUDANÇA DE POSE E EXPRESSÃO: Mantenha a mesma pessoa e o figurino atual. Mude a expressão para um sorriso natural e caloroso, olhando diretamente para a câmera. Coloque-a sobre um fundo SÓLIDO CHROMA KEY VERDE (#00B140), iluminado uniformemente. Iluminação de estúdio com softbox no rosto. Enquadramento de meio corpo.",
  "Sério Profissional — Fundo Verde":
    "MUDANÇA DE POSE E EXPRESSÃO: Mantenha a mesma pessoa e o figurino atual. Mude a expressão para um olhar sério e confiante, olhos focados na câmera. Fundo SÓLIDO CHROMA KEY VERDE (#00B140), iluminação de estúdio limpa. Enquadramento de meio corpo.",
  "Olhar Lateral — Fundo Verde":
    "MUDANÇA DE POSE E EXPRESSÃO: Mantenha a mesma pessoa e o figurino atual. Pose 3/4 lateral, olhando para fora da câmera com expressão pensativa. Fundo SÓLIDO CHROMA KEY VERDE (#00B140), iluminação de estúdio suave. Enquadramento de meio corpo.",
  "Braços Cruzados — Fundo Verde":
    "MUDANÇA DE POSE E EXPRESSÃO: Mantenha a mesma pessoa e o figurino atual. Braços cruzados no peito com leve sorriso confiante. Fundo SÓLIDO CHROMA KEY VERDE (#00B140), iluminação de estúdio limpa. Enquadramento de três quartos.",
  "Sorriso — Ambiente":
    "MUDANÇA DE POSE E EXPRESSÃO: Mantenha a mesma pessoa e o figurino atual. Sorriso genuíno olhando para a câmera. Ambiente real elegante (lobby de hotel, salão iluminado ou terraço) com luz natural suave e bokeh. Enquadramento de meio corpo.",
  "Olhar Lateral — Ambiente":
    "MUDANÇA DE POSE E EXPRESSÃO: Mantenha a mesma pessoa e o figurino atual. Ângulo 3/4, olhando para fora da câmera com expressão contemplativa. Ambiente sofisticado (rua na hora dourada, rooftop ou salão de eventos) com iluminação cinematográfica e bokeh cremoso. Enquadramento de meio corpo.",
  "Fundo Transparente":
    "REMOÇÃO DE FUNDO: Mantenha a mesma pessoa e o figurino atual. Gere sobre fundo TOTALMENTE TRANSPARENTE (PNG alfa = 0). Sem elementos, sem sombras. Preserve bordas nítidas em cabelo e roupa. Iluminação de estúdio neutra. Enquadramento de meio corpo.",
};

export const AI_PARAMETERS = {
  model: "google/gemini-2.5-flash-image",
  modalities: ["image", "text"],
  temperature: "default",
  reference: "input photo (locked identity)",
};

export type StyleCategory = "Estilos" | "Poses & Expressões";

export type StyleDefinition = {
  name: string;
  category: StyleCategory;
  prompt: string;
  description: string;
};

export const STYLE_DEFINITIONS: StyleDefinition[] = [
  // ===== Estilos / Lifestyle & Editorial =====
  {
    name: "Home Office",
    category: "Estilos",
    description: "Home office com alfaiataria de empreendedora",
    prompt:
      "SCENE CHANGE ONLY: Dress the same person in an entrepreneurial tailored look — a well-cut blazer with structured shoulders, tailored trousers, a silk camisole underneath, minimalist accessories (a slim watch, discreet earrings). Place them in a bright contemporary home office, with a minimalist desk, open laptop and soft natural window light in the background. Clean, airy daylight lighting. Half-body framing.",
  },
  {
    name: "Cafeteria Elegante",
    category: "Estilos",
    description: "Cafeteria artesanal com xícara de café",
    prompt:
      "SCENE CHANGE ONLY: Dress the same person in chic everyday wear — a stylish coat or elegant blouse. Place them in an upscale artisanal café with warm wood tones, hanging plants and a blurred coffee bar, holding a ceramic coffee cup. Warm, cozy ambient lighting. Half-body framing.",
  },
  {
    name: "Studio Cinematográfico",
    category: "Estilos",
    description: "Estúdio com iluminação cinematográfica",
    prompt:
      "SCENE CHANGE ONLY: Dress the same person in refined editorial attire — a tailored blazer or elegant dress. Place them in a professional photography studio with cinematic lighting: large softbox key light, rim light and dark seamless backdrop, subtle atmospheric haze. Dramatic, controlled studio lighting with deep shadows and highlights. Half-body framing.",
  },
  {
    name: "Alfaiataria Editorial",
    category: "Estilos",
    description: "Alfaiataria power estilo O Diabo Veste Prada",
    prompt:
      "SCENE CHANGE ONLY: Dress the same person in high-fashion power tailoring à la The Devil Wears Prada — a perfectly fitted designer suit with sharp shoulders, structured silhouette, premium fabric, statement accessories (leather gloves, structured bag, heels or oxfords). Place them in a sleek magazine editorial setting: marble lobby with floor-to-ceiling windows, fashion-week atmosphere, blurred staff in background. Crisp, high-contrast editorial lighting. Half-body framing.",
  },

  // ===== Poses & Expressões — fundo verde (chroma key) =====
  {
    name: "Sorriso — Fundo Verde",
    category: "Poses & Expressões",
    description: "Sorriso natural em chroma key",
    prompt:
      "POSE & EXPRESSION CHANGE: Keep the same person and their current outfit. Change the expression to a warm, natural smile showing genuine happiness, looking directly at the camera. Place them on a SOLID CHROMA KEY GREEN background (#00B140), evenly lit, no shadows on background, ready for compositing. Studio softbox lighting on the subject. Half-body framing.",
  },
  {
    name: "Sério Profissional — Fundo Verde",
    category: "Poses & Expressões",
    description: "Olhar sério e confiante em chroma",
    prompt:
      "POSE & EXPRESSION CHANGE: Keep the same person and their current outfit. Change the expression to a serious, confident, professional look with neutral mouth and focused eyes toward the camera. Place them on a SOLID CHROMA KEY GREEN background (#00B140), evenly lit, no shadows on background, ready for compositing. Clean studio lighting. Half-body framing.",
  },
  {
    name: "Olhar Lateral — Fundo Verde",
    category: "Poses & Expressões",
    description: "Perfil 3/4 contemplativo em chroma",
    prompt:
      "POSE & EXPRESSION CHANGE: Keep the same person and their current outfit. Change the pose to a 3/4 side view, looking off-camera with a thoughtful, contemplative expression. Place them on a SOLID CHROMA KEY GREEN background (#00B140), evenly lit, no shadows on background, ready for compositing. Soft studio lighting. Half-body framing.",
  },
  {
    name: "Braços Cruzados — Fundo Verde",
    category: "Poses & Expressões",
    description: "Pose poderosa em chroma",
    prompt:
      "POSE & EXPRESSION CHANGE: Keep the same person and their current outfit. Change the pose to arms crossed in front of the chest with a confident, slight smile, body angled slightly to the side. Place them on a SOLID CHROMA KEY GREEN background (#00B140), evenly lit, no shadows on background, ready for compositing. Clean studio lighting. Three-quarter body framing.",
  },

  // ===== Poses & Expressões — fundo ambiente =====
  {
    name: "Sorriso — Ambiente",
    category: "Poses & Expressões",
    description: "Sorriso natural em ambiente elegante",
    prompt:
      "POSE & EXPRESSION CHANGE: Keep the same person and their current outfit. Change the expression to a warm, genuine smile, looking at the camera. Place them in a beautiful real environment (hotel lobby, illuminated ballroom or terrace) with soft natural lighting and pleasant bokeh background. Half-body framing.",
  },
  {
    name: "Olhar Lateral — Ambiente",
    category: "Poses & Expressões",
    description: "Perfil 3/4 em ambiente sofisticado",
    prompt:
      "POSE & EXPRESSION CHANGE: Keep the same person and their current outfit. Change the pose to a 3/4 angle, looking off-camera with a calm, contemplative expression. Place them in a sophisticated real environment (golden-hour street, rooftop or event hall) with cinematic natural lighting and creamy bokeh. Half-body framing.",
  },
  {
    name: "Fundo Transparente",
    category: "Poses & Expressões",
    description: "Recorte em PNG com fundo transparente",
    prompt:
      "BACKGROUND REMOVAL: Keep the same person and their current outfit unchanged. Output the subject as a clean cut-out on a FULLY TRANSPARENT background (PNG with alpha channel = 0 around the subject). No background elements, no shadows, no gradients — only the person on transparent pixels. Preserve clean, sharp edges around hair and clothing. Even, neutral studio lighting on the subject. Half-body framing.",
  },
];

// Backward-compat map (name -> scene prompt only, no IDENTITY_LOCK)
export const STYLE_PROMPTS: Record<string, string> = STYLE_DEFINITIONS.reduce(
  (acc, s) => {
    acc[s.name] = s.prompt;
    return acc;
  },
  {} as Record<string, string>,
);

export const buildFullPrompt = (styleName: string): string => {
  const scene = STYLE_PROMPTS[styleName] ?? "";
  const scenePt = STYLE_PROMPTS_PT[styleName] ?? "";
  const params = [
    `Model: ${AI_PARAMETERS.model}`,
    `Modalities: ${AI_PARAMETERS.modalities.join(", ")}`,
    `Reference: ${AI_PARAMETERS.reference}`,
    `Style: ${styleName}`,
  ].join("\n");

  return `# Persona — ${styleName}\n\n## Parâmetros\n${params}\n\n## Identity Lock (EN)\n${IDENTITY_LOCK}\n\n## Trava de Identidade (PT-BR)\n${IDENTITY_LOCK_PT}\n\n## Scene (EN)\n${scene}\n\n## Cena (PT-BR)\n${scenePt}`;
};

export const MAX_STYLES_PER_REQUEST = 3;
