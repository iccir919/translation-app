import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(request, response) {
    if (request.method !== "POST") {
        return response.status(405).json({ error: "Method not allowed" })
    }

    try {
        const { text, language } = request.body;

        if (!text || typeof text !== "string" || text.trim().length === 0) {
            return response.status(400).json({ error: "Missing or invalid 'text' field" });
        }

        const allowed = ["brazilian-portuguese", "japanese", "spanish"];
        if (!allowed.includes(language)) {
            return response.status(400).json({
                error: `the value of ${language} for 'language' is not in allowed list`
            })
        }

        const openAIresponse = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            max_tokens: 100,
            messages: [
                {
                    role: "system",
                    content: `
                        You are an expert translator. 
                        Translate the user's text into ${formatLanguage(language)}. 
                        Return only the translation.
                    `
                },
                {
                    role: "user",
                    content: text
                }
            ]
        });

        const translation = openAIresponse.choices[0]?.message?.content?.trim();

        if (!translation) {
            throw new Error("OpenAI returned no translation.")
        }

        return response.status(200).json({ translation })

    } catch(error) {
        console.error("Translation API error:", error);

        return response.status(500).json({
            error: "Internal server error while generating translation."
        })
    }
}

function formatLanguage(language) {
  if (!language) return "";

  return language
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

