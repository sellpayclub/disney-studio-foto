import { GoogleGenAI } from "@google/genai";
import { Character } from "../types";

// Helper to convert File to Base64 (minus header)
export const fileToGenerativePart = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Remove data url part if present (e.g., "data:image/jpeg;base64,")
      // This is crucial for the API to accept the data
      const base64Data = base64String.split(',')[1];
      resolve(base64Data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const generateDisneyImage = async (
  imageFile: File,
  character: Character
): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("Chave de API não configurada. Por favor, configure sua API Key.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const base64Image = await fileToGenerativePart(imageFile);

  // Use nano banana (gemini-2.5-flash-image) optimized for multimodal inputs
  const modelId = "gemini-2.5-flash-image";

  // Prompt ajustado para ser uma ordem direta de transformação da imagem anexa
  const prompt = `
    Transforme a foto em anexo.
    
    O seu objetivo é editar a imagem da criança fornecida para transformá-la no personagem ${character.name} do filme ${character.movie}.
    
    Instruções de Transformação:
    1. SUJEITO: Mantenha o rosto da criança da foto original. É fundamental que seja a MESMA criança, com as mesmas feições e expressões. Não gere uma criança nova.
    2. AÇÃO: Vista a criança da foto com o figurino: ${character.description}.
    3. CENÁRIO: Coloque a criança neste ambiente: ${character.environment}.
    4. ESTILO: Fotografia realista (Live Action). A imagem deve parecer uma foto real de alta qualidade, não um desenho ou pintura.
    
    Resumo: Gere uma imagem realista da criança da foto vestida como ${character.name}.
  `;

  try {
    console.log("Enviando imagem e prompt para o modelo...");

    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: imageFile.type || "image/jpeg",
              data: base64Image
            }
          },
          {
            text: prompt
          }
        ]
      }
    });

    const parts = response.candidates?.[0]?.content?.parts;
    
    if (!parts) {
      throw new Error("O sistema não retornou nenhuma imagem. Tente novamente.");
    }

    const imagePart = parts.find(part => part.inlineData);

    if (imagePart && imagePart.inlineData && imagePart.inlineData.data) {
        return `data:image/png;base64,${imagePart.inlineData.data}`;
    }

    // Fallback: Se o modelo se recusar ou der erro de texto
    const textPart = parts.find(part => part.text);
    if (textPart) {
        console.warn("Modelo retornou texto:", textPart.text);
        throw new Error(`A IA não conseguiu processar a imagem. O modelo pode ter recusado a solicitação de edição de pessoas reais por segurança.`);
    }

    throw new Error("Não foi possível gerar a imagem.");

  } catch (error: any) {
    console.error("Erro detalhado:", error);
    throw new Error(error.message || "Falha ao transformar a foto. Verifique sua conexão e tente novamente.");
  }
};