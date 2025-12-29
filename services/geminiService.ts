import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { Character } from "../types";

// Função para redimensionar a imagem antes de enviar (Otimização)
const compressImage = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1024; // Reduz para no máximo 1024px
        const MAX_HEIGHT = 1024;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        
        // Retorna apenas a parte base64 sem o cabeçalho data:image/...
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8); // 80% qualidade
        resolve(dataUrl.split(',')[1]);
      };
      img.onerror = (err) => reject(new Error("Erro ao processar imagem."));
    };
    reader.onerror = (err) => reject(new Error("Erro ao ler arquivo."));
  });
};

export const generateDisneyImage = async (
  imageFile: File,
  character: Character
): Promise<string> => {
  // Agora usa estritamente a variável de ambiente
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    throw new Error("Erro de configuração no servidor (API Key ausente).");
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });
  
  try {
    // Redimensiona a imagem para evitar payloads gigantes
    const base64Image = await compressImage(imageFile);

    // Use nano banana (gemini-2.5-flash-image) optimized for multimodal inputs
    const modelId = "gemini-2.5-flash-image";

    // Prompt em inglês costuma funcionar melhor para instruções complexas de imagem
    const prompt = `
      Create a high-quality, magical, cinematic image based on the attached photo of a child.
      
      Transformation Target:
      - Character Style: ${character.name} from ${character.movie}.
      - Costume/Outfit: ${character.description}.
      - Background/Environment: ${character.environment}.
      
      Key Requirements:
      1. FACE PRESERVATION: The child in the generated image MUST closely resemble the child in the input photo (same facial features, skin tone, hair color/texture if possible). This is a "costume try-on" or "magic transformation" effect.
      2. STYLE: High-end Disney/Pixar movie poster style (realistic textures, magical lighting, vibrant colors).
      3. QUALITY: 4k, highly detailed, photorealistic or high-quality 3D render.
      
      Generate ONLY the image.
    `;

    console.log("Enviando imagem otimizada para o modelo...", { character: character.name });

    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: base64Image
            }
          },
          {
            text: prompt
          }
        ]
      },
      config: {
        // Tenta relaxar filtros de segurança para permitir 'crianças' em contextos artísticos
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH }
        ]
      }
    });

    // Verificação detalhada da resposta
    if (!response.candidates || response.candidates.length === 0) {
        throw new Error("O sistema não retornou nenhuma resposta. A imagem pode ter sido bloqueada pelos filtros de segurança.");
    }

    const candidate = response.candidates[0];

    // Checa finishReason
    if (candidate.finishReason === "SAFETY") {
        throw new Error("A imagem foi bloqueada por motivos de segurança (provavelmente devido a políticas sobre imagens de crianças reais). Tente uma foto diferente ou um personagem diferente.");
    }

    const parts = candidate.content?.parts;
    
    if (!parts || parts.length === 0) {
      // Se terminou com STOP mas não tem parts, algo estranho aconteceu
      console.warn("Resposta vazia com finishReason:", candidate.finishReason);
      throw new Error("O sistema não conseguiu gerar a imagem final. Tente novamente.");
    }

    const imagePart = parts.find(part => part.inlineData);

    if (imagePart && imagePart.inlineData && imagePart.inlineData.data) {
        return `data:image/png;base64,${imagePart.inlineData.data}`;
    }

    // Fallback: Se o modelo retornou texto ao invés de imagem (ex: "I cannot do that")
    const textPart = parts.find(part => part.text);
    if (textPart) {
        console.warn("Modelo retornou texto:", textPart.text);
        // Tenta extrair explicação amigável ou lança erro genérico
        throw new Error(`A IA não conseguiu processar esta solicitação específica.`);
    }

    throw new Error("Não foi possível gerar a imagem.");

  } catch (error: any) {
    console.error("Erro detalhado:", error);
    
    // Tratamento específico para erro de Cota (429)
    if (error.message && (error.message.includes("429") || error.message.includes("Quota") || error.message.includes("RESOURCE_EXHAUSTED"))) {
      throw new Error("Muitos pedidos mágicos ao mesmo tempo! 🪄 Por favor, aguarde alguns segundos e tente novamente.");
    }

    // Repassa a mensagem se já for tratada
    throw new Error(error.message || "Falha ao transformar a foto. Verifique sua conexão e tente novamente.");
  }
};