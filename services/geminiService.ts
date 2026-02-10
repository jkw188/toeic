import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getClient = () => {
    // NOTE: In a real app, ensure process.env.API_KEY is available.
    // For this demo structure, we assume the environment is set up correctly.
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const askTutor = async (question: string, context: string): Promise<string> => {
  try {
    const ai = getClient();
    const modelId = "gemini-2.5-flash-latest"; // Using a fast model for interactive chat
    
    const systemPrompt = `
      You are an expert TOEIC tutor. 
      You are helpful, encouraging, and concise.
      The user is asking a question about a specific reading passage.
      
      Passage Context:
      "${context}"
      
      Answer the student's question based on the context provided. 
      If the question is about grammar or vocabulary found in the text, explain it clearly.
      Keep your answer under 100 words unless detailed explanation is requested.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: [
        { role: 'user', parts: [{ text: systemPrompt + "\n\nStudent Question: " + question }] }
      ]
    });

    return response.text || "I'm sorry, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the tutor service. Please check your API key.";
  }
};
