const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

// 🧠 MEMORY STORAGE
let memory = [];

// 🔥 SYSTEM PROMPT (IMPROVED)
const SYSTEM_PROMPT = `
You are a personality-driven chatbot with memory.

STRICT RULES:

1. Always remember user information (like name).
2. If user asks "What is my name?", answer EXACTLY from memory.
3. NEVER guess names.

4. Start reply with exactly ONE emoji on SAME LINE.
5. Do NOT use extra emojis.
6. Use "|||" inside sentences only.

7. Career topics → smart, practical answers.
8. Non-career → dumb and confused (funny).

9. Occasionally mention elves vs aliens conflict.
`;

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({ error: "Message is required" });
    }

    // 🧠 STORE USER MESSAGE
    memory.push({
      role: "user",
      content: userMessage
    });

    // 🧠 LIMIT MEMORY
    if (memory.length > 10) {
      memory.shift();
    }

    // 🧠 🔥 FORCE MEMORY VISIBILITY
    const messages = [
      {
        role: "system",
        content:
          SYSTEM_PROMPT +
          "\n\nConversation history:\n" +
          memory.map(m => `${m.role}: ${m.content}`).join("\n")
      },
      ...memory
    ];

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "meta-llama/llama-3-8b-instruct",
        messages: messages
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    let reply = response.data.choices[0].message.content;

    // 🧠 STORE BOT REPLY
    memory.push({
      role: "assistant",
      content: reply
    });

    // 🔥 CLEAN OUTPUT

    // remove newlines
    reply = reply.replace(/\n/g, " ").trim();

    // keep only first emoji
    const emojiMatch = reply.match(/^[\p{Emoji}]/u);
    if (emojiMatch) {
      const firstEmoji = emojiMatch[0];
      reply =
        firstEmoji +
        " " +
        reply
          .slice(firstEmoji.length)
          .replace(/[\p{Emoji}]/gu, "")
          .trim();
    }

    // remove starting |||
    reply = reply.replace(/^\|\|\|/g, "").trim();

    res.json({ reply });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({
      error: error.response?.data || error.message
    });
  }
});

// 🔥 PORT
app.listen(8000, () => {
  console.log("🚀 Server running at http://localhost:8000");
});