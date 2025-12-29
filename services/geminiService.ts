import { GoogleGenAI } from "@google/genai";
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
  if (!process.env.API_KEY) {
    throw new Error("Chave de API não configurada. Por favor, configure sua API Key.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Redimensiona a imagem para evitar payloads gigantes
    const base64Image = await compressImage(imageFile);

    // Use nano banana (gemini-2.5-flash-image) optimized for multimodal inputs
    const modelId = "gemini-2.5-flash-image";

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

    console.log("Enviando imagem otimizada para o modelo...");

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
    
    // Tratamento específico para erro de Cota (429)
    if (error.message && (error.message.includes("429") || error.message.includes("Quota") || error.message.includes("RESOURCE_EXHAUSTED"))) {
      throw new Error("Muitos pedidos mágicos ao mesmo tempo! 🪄 A fada madrinha precisa descansar por 30 segundos. Por favor, aguarde um pouquinho e tente de novo.");
    }

    // Tratamento para imagem recusada (Safety)
    if (error.message && (error.message.includes("safety") || error.message.includes("blocked"))) {
      throw new Error("A imagem não pôde ser processada por motivos de segurança da IA. Tente uma foto diferente (apenas rosto funciona melhor).");
    }

    throw new Error(error.message || "Falha ao transformar a foto. Verifique sua conexão e tente novamente.");
  }
};