import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const API_URL = "https://api.openai.com/v1/chat/completions";

export const getOpenAIResponse = async (message) => {
  if (!API_KEY) {
    console.error("⚠️ OpenAI API Key is missing! Check your .env file.");
    return "Missing API Key";
  }

  try {
    
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-4",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_KEY,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching OpenAI response:", error.response?.data || error.message);
    return "Error fetching response.";
  }
};
