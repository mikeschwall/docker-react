import axios from "axios";

// Your OpenAI API key from environment variables
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const API_URL = "https://api.openai.com/v1/chat/completions";

/**
 * Fetches a structured JSON response from OpenAI based on the user's message.
 * @param {string} message - The message/prompt to send to OpenAI.
 * @returns {Promise<string>} The content returned by OpenAI (stringified JSON array).
 */
export const getOpenAIResponse = async (message) => {
  if (!API_KEY) {
    console.error("⚠️ OpenAI API Key is missing! Check your .env file.");
    return JSON.stringify([{ title: "Missing API Key", previewLink: "#" }]);
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `
Return a JSON array of 5 action movies currently available on Netflix.
Each object should have:
- "title": string
- "previewLink": string (Netflix URL)

Respond ONLY with the JSON array.
            `.trim(),
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("❌ Error fetching OpenAI response:", error.response?.data || error.message);
    return JSON.stringify([{ title: "Error fetching response", previewLink: "#" }]);
  }
};
